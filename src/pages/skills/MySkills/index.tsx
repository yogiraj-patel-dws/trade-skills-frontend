import { SkillCard } from "../../../components/skills/SkillCard";
import { Button } from "antd";
import { Monitor, BarChart3, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

interface Skill {
  id: string;
  image: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  duration: string;
  credits: number;
}

// Mock data - replace with actual API call
const skillsData: Skill[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
    title: "Web Development Fundamentals",
    icon: Monitor,
    level: "Beginner",
    duration: "2 hours",
    credits: 50,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    title: "Data Analysis with Python",
    icon: BarChart3,
    level: "Intermediate",
    duration: "3 hours",
    credits: 75,
  },
  {
    id: "3",
    title: "Italian Pasta From Scratch",
    level: "All Levels",
    duration: "120m",
    credits: 80,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    icon: ChefHat,
  },
  {
    id: "4",
    title: "Italian Pasta From Scratch",
    level: "All Levels",
    duration: "120m",
    credits: 80,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    icon: ChefHat,
  },
  {
    id: "4",
    title: "Italian Pasta From Scratch",
    level: "All Levels",
    duration: "120m",
    credits: 80,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    icon: ChefHat,
  },
];

const MySkills = () => {
  const navigate = useNavigate();

  const handleAddSkill = () => {
    navigate(ROUTES.ADD_SKILL);
  };
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Main Content */}
      <main className="px-8 py-10">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              My Skills
            </h1>
            <p className="text-gray-500 text-lg">
              Manage the skills you teach. Share your expertise and earn credits
              from the community.
            </p>
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleAddSkill}
            className="bg-emerald-500! hover:bg-emerald-600! border-none! px-6 font-bold h-12 rounded-xl! shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Skill
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill: Skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MySkills;
