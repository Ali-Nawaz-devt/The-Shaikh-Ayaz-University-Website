import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeatureLinks from './components/FeatureLinks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import EventsSection from './components/EventsSection';
import Layout from './components/Layout';

// Pages
import DepartmentsPage from './pages/DepartmentsPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import NewsPage from './pages/NewsPage';
import ApplyPage from './pages/ApplyPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdminLoginPage from "./admin/AdminLoginPage";
import AdminDashboard from "./admin/AdminDashboard"; // ✅ fixed path here

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <HeroSection />
              <StatsSection />
              <FeatureLinks />
              <AboutSection />
              <WhyChooseUs />
              <EventsSection />
            </>
          }
        />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* Admin Routes outside Layout */}
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
