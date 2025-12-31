import React, { useState, useMemo } from 'react';
import { SkillCard } from "../../../components/skills/SkillCard";
import { Button, Spin, Empty } from 'antd';
import { Monitor, Code, Palette, Languages, Briefcase, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import DeleteConfirmModal from '../../../components/common/DeleteConfirmModal';
import { useAppQuery } from '../../../react-query/useAppQuery';
import { queryKeys } from '../../../react-query/queryKeys';
import { skillsService } from '../../../services/skills/skills.service';
import type { Skill as ApiSkill } from '../../../services/skills/skills.types';

interface SkillCardData {
  id: string;
  image: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  duration: string;
  credits: number;
}

// Map category to icon
const getCategoryIcon = (category: string): React.ComponentType<{ className?: string }> => {
  const categoryMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'Technology': Code,
    'Design': Palette,
    'Creative': Sparkles,
    'Business': Briefcase,
    'Languages': Languages,
  };
  return categoryMap[category] || Monitor;
};

// Map level from API to display format
const formatLevel = (level: string): string => {
  const levelMap: Record<string, string> = {
    'BEGINNER': 'Beginner',
    'INTERMEDIATE': 'Intermediate',
    'ADVANCED': 'Advanced',
  };
  return levelMap[level] || level;
};

// Dummy skills data as fallback
const dummySkills: SkillCardData[] = [
  {
    id: 'dummy-1',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    title: 'Web Development',
    icon: Code,
    level: 'Intermediate',
    duration: '3 hours',
    credits: 75,
  },
  {
    id: 'dummy-2',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400',
    title: 'UI/UX Design',
    icon: Palette,
    level: 'Beginner',
    duration: '2 hours',
    credits: 50,
  },
  {
    id: 'dummy-3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    title: 'Digital Marketing',
    icon: Briefcase,
    level: 'Advanced',
    duration: '4 hours',
    credits: 100,
  },
];

// Transform API skill data to SkillCard format
const transformSkillToCard = (apiSkill: ApiSkill, userSkill: ApiSkill['userSkills'][0]): SkillCardData => {
  const defaultImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400';
  
  return {
    id: apiSkill.id, // Use skill ID for navigation to detail page
    image: userSkill.bannerImage || defaultImage,
    title: userSkill.skillTitle || apiSkill.name,
    icon: getCategoryIcon(apiSkill.category),
    level: formatLevel(userSkill.level),
    duration: '2 hours', // Default duration, can be updated if API provides this
    credits: 50, // Default credits, can be updated if API provides this
  };
};

const MySkills = () => {
  const navigate = useNavigate();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [skillToDelete, setSkillToDelete] = useState<{ id: string; title: string } | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch skills from API
  const { data: apiSkills, isLoading, error } = useAppQuery(
    queryKeys.skills.list(),
    () => skillsService.getSkills(),
    {
      refetchOnWindowFocus: false,
      retry: 1, // Only retry once
    }
  );

  // Transform API data to card format, showing all skills or dummy data as fallback
  const skillsData = useMemo(() => {
    if (!apiSkills || !Array.isArray(apiSkills)) {
      return dummySkills;
    }
    
    const transformed: SkillCardData[] = [];
    apiSkills.forEach((skill) => {
      if (skill.userSkills && skill.userSkills.length > 0) {
        // If skill has userSkills, show each userSkill
        skill.userSkills.forEach((userSkill) => {
          transformed.push(transformSkillToCard(skill, userSkill));
        });
      } else {
        // If no userSkills, show the skill itself with default values
        const defaultUserSkill = {
          id: skill.id,
          userId: '',
          skillId: skill.id,
          level: 'BEGINNER',
          yearsOfExperience: 0,
          canTeach: false,
          wantsToLearn: true,
          skillTitle: skill.name,
          bannerImage: null,
          createdAt: skill.createdAt,
          updatedAt: skill.createdAt,
          user: {
            id: '',
            profile: {
              firstName: 'Unknown',
              lastName: 'User',
              rating: 0,
              createdAt: skill.createdAt,
              updatedAt: skill.createdAt
            }
          }
        };
        transformed.push(transformSkillToCard(skill, defaultUserSkill));
      }
    });
    
    // Return dummy data if no skills found
    return transformed.length > 0 ? transformed : dummySkills;
  }, [apiSkills]);

  const handleAddSkill = () => {
    navigate(ROUTES.ADD_SKILL);
  };

  const handleEdit = (skillId: string) => {
    navigate(ROUTES.EDIT_SKILL.replace(':id', skillId));
  };

  const handleDeleteClick = (skillId: string) => {
    const skill = skillsData.find(s => s.id === skillId);
    if (skill) {
      setSkillToDelete({ id: skillId, title: skill.title });
      setDeleteModalVisible(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!skillToDelete) return;
    
    setDeleteLoading(true);
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setDeleteModalVisible(false);
      setSkillToDelete(null);
    } catch (error) {
      console.error('Error deleting skill:', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setSkillToDelete(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Main Content */}
      <main className="px-8 py-10">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">All Skills</h1>
            <p className="text-gray-500 text-lg">
              Browse all available skills in the platform.
            </p>
          </div>
          <Button 
            type="primary" 
            size="large"
            onClick={handleAddSkill}
            className="bg-emerald-500! hover:bg-emerald-600! border-none! px-6 font-bold h-12 rounded-xl! shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Skill
          </Button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Spin size="large" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col justify-center items-center py-20">
            <p className="text-red-500 text-lg mb-4">Error loading skills</p>
            <p className="text-gray-500 text-center max-w-md">
              {(error as any)?.message || (error as any)?.error?.message || 'An unexpected error occurred'}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Check the browser console for more details
            </p>
          </div>
        )}

        {/* Skills Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {skillsData.map((skill: SkillCardData) => (
              <SkillCard 
                key={skill.id} 
                skill={skill}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        visible={deleteModalVisible}
        title="Delete Skill"
        message="Are you sure you want to delete this skill?"
        itemName={skillToDelete?.title}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={deleteLoading}
      />
    </div>
  );
};

export default MySkills;

