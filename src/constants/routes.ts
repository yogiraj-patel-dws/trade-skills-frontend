export const ROUTES = {
  // Public Routes
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",

  // Auth Routes
  SIGNUP: "/signup",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  VERIFY_EMAIL: "/verify-email",

  // Protected Routes
  DASHBOARD: "/dashboard",
  PROFILE_COMPLETE: "/profile/complete",
  SKILLS: "/skills",
  ADD_SKILL: "/skills/add",
  SKILL_DETAIL: "/skills/:id",
  EDIT_SKILL: "/skills/edit/:id",
  EXPLORE: "/explore",
  SESSIONS_REQUEST: "/sessions/request",
  SESSIONS: "/sessions",
  SESSIONS_REVIEW: "/sessions/review",
  WALLET: "/wallet",
  PLANS: "/plans",
  WITHDRAW: "/withdraw",
} as const;
