export interface Analytics {
  activeTeachers: string;
  skillsExchanged: string;
  communityRating: number;
  countries: string;
}

export interface PopularSkill {
  id: string;
  name: string;
  category: string;
  teacherCount: number;
}

export interface WhyTradeSkillsItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyTradeSkills {
  forLearners: WhyTradeSkillsItem[];
  forTeachers: WhyTradeSkillsItem[];
}

export interface LandingPageData {
  analytics: Analytics;
  popularSkills: PopularSkill[];
  whyTradeSkills: WhyTradeSkills;
}

export interface LandingPageResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: LandingPageData;
}