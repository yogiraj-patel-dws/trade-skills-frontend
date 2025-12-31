export interface UserProfile {
  id: string;
  profile: {
    firstName: string;
    lastName: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface UserSkill {
  id: string;
  userId: string;
  skillId: string;
  level: string;
  yearsOfExperience: number | null;
  canTeach: boolean;
  wantsToLearn: boolean;
  skillTitle: string;
  bannerImage: string | null;
  demoVideo?: string | null;
  teachingLanguage?: string | null;
  prerequisites?: string | null;
  subcategory?: string | null;
  createdAt: string;
  updatedAt: string;
  user: UserProfile;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  createdAt: string;
  userSkills: UserSkill[];
}

export interface SkillsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Skill[];
}

// Skill Detail types
export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt: string;
  duration?: string;
}

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
}

export interface SkillDetailData {
  id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  createdAt: string;
  userSkills: any[];
}

export interface SkillDetailResponse {
  success: boolean;
  statusCode: number;
  message: string;
  name: string;
  category: string;
  data: SkillDetailData;
}

// Add Skill types
export interface AddSkillRequest {
  name: string;
  description: string;
  category: string;
}

export interface AddSkillResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Skill;
}

// Categories types
export interface Category {
  name: string;
  count: number;
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
}

