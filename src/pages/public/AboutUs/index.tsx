import CTASection from "../../../components/AboutUs/CTASection";
import HeroSection from "../../../components/AboutUs/HeroSection";
import StatsSection from "../../../components/AboutUs/StatsSection";
import TeamSection from "../../../components/AboutUs/TeamSection";
import ValuesSection from "../../../components/AboutUs/ValuesSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 font-sans text-[#0d1b13] selection:bg-primary/30">
      
      <main className="w-full px-6 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
        <HeroSection />
        <StatsSection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default AboutUs;