export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  profilePicture: string | null;
  phoneNumber: string | null;
  timezone: string | null;
  availability: string | null;
  rating: number;
  totalReviews: number;
  createdAt: number;
  updatedAt: number;
}

export interface User {
  id: string;
  email: string;
  profile: Profile;
}

export interface DashboardStats {
  availableCredits: number;
  creditsChangeThisWeek: number;
  sessionsTaught: number;
  sessionsTaughtThisWeek: number;
  skillsLearned: number;
  upcomingSessionsCount: number;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  scheduledAt: number;
  duration: number;
  status: string;
}

export interface CommunityActivity {
  id: string;
  type: string;
  message: string;
  createdAt: number;
}

export interface DashboardData {
  user: User;
  stats: DashboardStats;
  upcomingSessions: Session[];
  recommendedSessions: Session[];
  communityActivity: CommunityActivity[];
}

export interface DashboardResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: DashboardData;
}