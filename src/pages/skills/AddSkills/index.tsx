import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { SkillForm } from "../../../components/skills/SkillForm";
import type {
  FormData,
} from "../../../components/skills/SkillForm";
import { skillsService, useCategories, useSkills } from "../../../services/skills/skills.service";
import type { AddSkillRequest } from "../../../services/skills/skills.types";

export const AddSkill: React.FC = () => {
  const navigate = useNavigate();
  const { data: categoriesData } = useCategories();
  const { data: skillsData } = useSkills();

  const categories = categoriesData?.map(cat => cat.name) || ['Technology', 'Creative', 'Business', 'Languages'];
  const skills = skillsData || [];

  const handleCancel = () => {
    navigate(ROUTES.SKILLS);
  };

  const handleSubmit = async (
    formData: FormData,
  ) => {
    try {
      const payload: AddSkillRequest = {
        name: formData.title,
        description: formData.prerequisites || formData.title,
        category: formData.category,
      };

      await skillsService.addSkill(payload);
      navigate(ROUTES.SKILLS);
    } catch (error) {
      console.error("Error submitting skill:", error);
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
