import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

// Layouts
import PublicLayout from '../../components/layouts/PublicLayout';
import AuthLayout from '../../components/layouts/AuthLayout';
import AppLayout from '../../components/layouts/AppLayout';

// Public Pages
import Landing from '../../pages/public/Landing';
import AboutUs from '../../pages/public/AboutUs';
import ContactUs from '../../pages/public/ContactUs';

// Auth Pages
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import ForgotPassword from '../../pages/auth/ForgotPassword';
import VerifyEmail from '../../pages/auth/VerifyEmail';

// Protected Pages
import UserDashboard from '../../pages/dashboard/UserDashboard';
import ProfileCompletion from '../../pages/profile/ProfileCompletion';
import MySkills from '../../pages/skills/MySkills';
import ExplorePage from '../../pages/skills/ExplorePage';
import RequestSession from '../../pages/sessions/RequestSession';
import MySessions from '../../pages/sessions/MySessions';
import ReviewSession from '../../pages/sessions/ReviewSession';
import MyWallet from '../../pages/wallet/MyWallet';
import Plans from '../../pages/wallet/Plans';
import WithdrawPage from '../../pages/wallet/WithdrawPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutUs /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactUs /></PublicLayout>} />

        {/* Auth Routes */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
        <Route path="/verify-email" element={<AuthLayout><VerifyEmail /></AuthLayout>} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AppLayout><UserDashboard /></AppLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/profile/complete" element={
          <ProtectedRoute>
            <AppLayout><ProfileCompletion /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/skills" element={
          <ProtectedRoute>
            <AppLayout><MySkills /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/explore" element={
          <ProtectedRoute>
            <AppLayout><ExplorePage /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/sessions/request" element={
          <ProtectedRoute>
            <AppLayout><RequestSession /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/sessions" element={
          <ProtectedRoute>
            <AppLayout><MySessions /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/sessions/review" element={
          <ProtectedRoute>
            <AppLayout><ReviewSession /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/wallet" element={
          <ProtectedRoute>
            <AppLayout><MyWallet /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/plans" element={
          <ProtectedRoute>
            <AppLayout><Plans /></AppLayout>
          </ProtectedRoute>
        } />

        <Route path="/withdraw" element={
          <ProtectedRoute>
            <AppLayout><WithdrawPage /></AppLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default AppRouter;