import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { SkillForm } from '../../../components/skills/SkillForm';
import type { FormData, Topic, UploadedFiles } from '../../../components/skills/SkillForm';

export const AddSkill: React.FC = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(ROUTES.SKILLS);
    };

    const handleSubmit = (formData: FormData, topics: Topic[], files: UploadedFiles) => {
        navigate(ROUTES.SKILLS);
    };

    return (
        <SkillForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            submitButtonText="Create Skill"
            isEditMode={false}
        />
    );
};

export default AddSkill;