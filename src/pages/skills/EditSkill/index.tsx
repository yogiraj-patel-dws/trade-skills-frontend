import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { SkillForm } from '../../../components/skills/SkillForm';
import type { FormData, Topic, UploadedFiles } from '../../../components/skills/SkillForm';

// Mock function to fetch skill data - replace with actual API call
const fetchSkillData = (skillId: string) => {
  // This is mock data - in real app, fetch from API
  return {
    formData: {
      title: 'Web Development Fundamentals',
      category: 'technology',
      subcategory: 'web-development',
      language: 'English',
      difficulty: 'beginner',
      prerequisites: 'Basic computer knowledge'
    },
    topics: [
      {
        id: 1,
        name: 'Introduction to the Course',
        subtopics: [
          { id: 101, name: 'Welcome & Setup', difficulty: 'Beginner', duration: '5 min' },
          { id: 102, name: 'Course Overview', difficulty: 'Beginner', duration: '10 min' }
        ]
      },
      {
        id: 2,
        name: 'HTML Basics',
        subtopics: [
          { id: 201, name: 'HTML Structure', difficulty: 'Beginner', duration: '15 min' }
        ]
      }
    ],
    files: {
      image: null,
      video: null,
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      videoUrl: undefined
    }
  };
};

export const EditSkill: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Fetch skill data (replace with actual API call)
  const skillData = id ? fetchSkillData(id) : null;

  const handleCancel = () => {
    navigate(ROUTES.SKILLS);
  };

  const handleSubmit = (formData: FormData, topics: Topic[], files: UploadedFiles) => {
    navigate(ROUTES.SKILLS);
  };

  if (!skillData) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Skill not found</h2>
          <button
            onClick={handleCancel}
            className="text-emerald-600 hover:underline"
          >
            Go back to Skills
          </button>
        </div>
      </div>
    );
  }

  return (
    <SkillForm
      initialFormData={skillData.formData}
      initialTopics={skillData.topics}
      initialFiles={skillData.files}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText="Update Skill"
      isEditMode={true}
    />
  );
};

export default EditSkill;

