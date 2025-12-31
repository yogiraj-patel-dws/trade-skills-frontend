import Hero from '../../../components/landing/Hero';
import Stats from '../../../components/landing/Stats';
import Skills from '../../../components/landing/Skills';
import Features from '../../../components/landing/Features';
import HowItWorks from '../../../components/landing/HowItWorks';
import Testimonials from '../../../components/landing/Testimonials';
import CallToAction from '../../../components/landing/CallToAction';
import Footer from '../../home/Footer';
import { useLandingPage } from '../../../services/landing/landing.service';
import { useCommunityStories, useFooter } from '../../../services/community/community.service';

const Landing = () => {
  const { data: landingData, isLoading: landingLoading, error: landingError } = useLandingPage();
  const { data: communityData, isLoading: communityLoading, error: communityError } = useCommunityStories();
  const { data: footerData, isLoading: footerLoading, error: footerError } = useFooter();

  if (landingLoading || communityLoading || footerLoading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (landingError || communityError || footerError) return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading page</div>;

  const pageData = landingData?.data;
  const stories = communityData?.data;
  
  // Transform analytics data for Stats component
  const statsData = pageData?.analytics ? [
    { 
      label: 'Active Teachers', 
      value: pageData.analytics.activeTeachers,
      icon: () => <div className="text-2xl">👨‍🏫</div>
    },
    { 
      label: 'Skills Exchanged', 
      value: pageData.analytics.skillsExchanged,
      icon: () => <div className="text-2xl">🔄</div>
    },
    { 
      label: 'Community Rating', 
      value: pageData.analytics.communityRating.toString(),
      icon: () => <div className="text-2xl">⭐</div>
    },
    { 
      label: 'Countries', 
      value: pageData.analytics.countries,
      icon: () => <div className="text-2xl">🌍</div>
    },
  ] : [];

  // Transform skills data for Skills component
  const skillsData = pageData?.popularSkills?.map(skill => ({
    name: skill.name,
    icon: () => <div className="text-lg">💻</div>
  })) || [];

  // Transform stories data for Testimonials component
  const testimonialsData = stories?.stories?.map(story => ({
    content: story.story,
    name: story.author.name,
    role: story.author.title,
    avatar: story.author.avatar
  })) || [];

  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      <main className="w-full px-6">
        <Hero />
        <Stats stats={statsData} />
        <Skills skills={skillsData} />
        <Features whyTradeSkills={pageData?.whyTradeSkills} />
        <HowItWorks howItWorks={stories?.howItWorks} />
        <Testimonials testimonials={testimonialsData} />
        <CallToAction callToAction={footerData?.data?.callToAction} />
        <Footer footerData={footerData?.data} />
      </main>
    </div>
  );
};

export default Landing;