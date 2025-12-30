import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../../constants/routes";

// Layouts
import PublicLayout from "../../components/layouts/PublicLayout";
import AuthLayout from "../../components/layouts/AuthLayout";
import AppLayout from "../../components/layouts/AppLayout";

// Public Pages
import Landing from "../../pages/public/Landing";
import AboutUs from "../../pages/public/AboutUs";
import ContactUs from "../../pages/public/ContactUs";

// Auth Pages
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import ResetPassword from "../../pages/auth/ResetPassword";
import VerifyEmail from "../../pages/auth/VerifyEmail";

// Protected Pages
import UserDashboard from "../../pages/dashboard/UserDashboard";
import ProfileCompletion from "../../pages/profile/ProfileCompletion";
import MySkills from "../../pages/skills/MySkills";
import AddSkill from "../../pages/skills/AddSkills";
import ExplorePage from "../../pages/skills/ExplorePage";
import RequestSession from "../../pages/sessions/RequestSession";
import MySessions from "../../pages/sessions/MySessions";
import ReviewSession from "../../pages/sessions/ReviewSession";
import MyWallet from "../../pages/wallet/MyWallet";
import Plans from "../../pages/wallet/Plans";
import WithdrawPage from "../../pages/wallet/WithdrawPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path={ROUTES.HOME}
          element={
            <PublicLayout>
              <Landing />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <PublicLayout>
              <AboutUs />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.CONTACT}
          element={
            <PublicLayout>
              <ContactUs />
            </PublicLayout>
          }
        />

        {/* Auth Routes */}
        <Route
          path={ROUTES.SIGNUP}
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.VERIFY_EMAIL}
          element={
            <AuthLayout>
              <VerifyEmail />
            </AuthLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <AppLayout>
                <UserDashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.PROFILE_COMPLETE}
          element={
            <ProtectedRoute>
              <AppLayout>
                <ProfileCompletion />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SKILLS}
          element={
            <ProtectedRoute>
              <AppLayout>
                <MySkills />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SESSIONS}
          element={
            <ProtectedRoute>
              <AppLayout>
                <MySessions />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ADD_SKILL}
          element={
            <ProtectedRoute>
              <AppLayout>
                <AddSkill />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.EXPLORE}
          element={
            <ProtectedRoute>
              <AppLayout>
                <ExplorePage />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SESSIONS_REQUEST}
          element={
            <ProtectedRoute>
              <AppLayout>
                <RequestSession />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SESSIONS}
          element={
            <ProtectedRoute>
              <AppLayout>
                <MySessions />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.SESSIONS_REVIEW}
          element={
            <ProtectedRoute>
              <AppLayout>
                <ReviewSession />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.WALLET}
          element={
            <ProtectedRoute>
              <AppLayout>
                <MyWallet />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.PLANS}
          element={
            <ProtectedRoute>
              <AppLayout>
                <Plans />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.WITHDRAW}
          element={
            <ProtectedRoute>
              <AppLayout>
                <WithdrawPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
