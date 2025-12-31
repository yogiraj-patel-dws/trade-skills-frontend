import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { SkillForm } from "../../../components/skills/SkillForm";
import type {
  FormData,
  Topic,
  UploadedFiles,
} from "../../../components/skills/SkillForm";
import { useSkills, useAddSkill } from "../../../services/user/user.service";
import type {
  AddSkillRequest,
  UserSkill,
} from "../../../services/user/user.service";

export const AddSkill: React.FC = () => {
  const navigate = useNavigate();
  const { data: skills = [] } = useSkills();

  const { mutate: addSkill } = useAddSkill();

  const categories = React.useMemo(() => {
    const cats = (skills || []).map((s: UserSkill) => s.category);
    return [...new Set(cats)];
  }, [skills]);

  const handleCancel = () => {
    navigate(ROUTES.SESSIONS);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (
    formData: FormData,
    topics: Topic[],
    files: UploadedFiles
  ) => {
    try {
      let bannerImageBase64 = "";
      let demoVideoBase64 = "";

      if (files.image) {
        bannerImageBase64 = await convertToBase64(files.image);
      }
      if (files.video) {
        demoVideoBase64 = await convertToBase64(files.video);
      }

      // Find skillId based on subcategory name (which maps to skill name)
      const selectedSkill = (skills || []).find(
        (s: UserSkill) => s.name === formData.subcategory
      );
      const skillId = selectedSkill?.id || "";

      const payload: AddSkillRequest = {
        skillId,
        level: formData.difficulty.toUpperCase(),
        skillTitle: formData.title,
        bannerImage: bannerImageBase64,
        demoVideo: demoVideoBase64,
        teachingLanguage: formData.language,
        prerequisites: formData.prerequisites,
        subcategory: formData.subcategory,
      };

      addSkill(payload, {
        onSuccess: () => {
          navigate(ROUTES.SESSIONS);
        },
      });
    } catch (error) {
      console.error("Error submitting skill:", error);
      // Handle error (toast or alert)
    }
  };

  return (
    <SkillForm
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText="Create Skill"
      isEditMode={false}
      availableCategories={categories}
      availableSkills={skills}
    />
  );
};

export default AddSkill;
