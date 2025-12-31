import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CTA_SECTION } from "../../constants/constants";
import { ROUTES } from "../../constants/routes";

const CTASection = () => {
  const navigate = useNavigate();

  const handleExploreSkills = () => {
    navigate(ROUTES.EXPLORE);
  };

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-[#0d1b13] py-20 px-8 text-center">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at 80% 20%, #2bee79 0%, transparent 40%), radial-gradient(circle at 20% 80%, #2bee79 0%, transparent 40%)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight leading-tight">
          {CTA_SECTION.title}
        </h2>
        <p className="text-[#cfe7d9] text-lg md:text-xl font-light">
          {CTA_SECTION.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {(CTA_SECTION as any).primaryButton && <Button 
            type="primary" 
            size="large" 
            className="h-14 px-10 bg-[#2bee79] hover:bg-[#1fd66a] text-[#0d1b13] text-lg font-bold rounded-full border-none shadow-[0_0_20px_rgba(43,238,121,0.4)]"
          >
            {(CTA_SECTION as any).primaryButton}
          </Button>}
          <Button 
            ghost 
            size="large" 
            className="h-14 px-10 border-2 border-[#2bee79]/30 text-white text-lg font-bold rounded-full hover:border-[#2bee79]"
            onClick={handleExploreSkills}
          >
            {CTA_SECTION.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;