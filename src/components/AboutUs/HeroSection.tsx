import { Button, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HERO_DATA } from "../../constants/constants";
import { ROUTES } from "../../constants/routes";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJoinMovement = () => {
    navigate(ROUTES.EXPLORE);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e7f3ec] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4c9a6b] w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#2bee79]"></span>
          {HERO_DATA.badge}
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0d1b13]">
          Empowering<br />
          <span className="relative inline-block text-nowrap">
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#2bee79]/30 -z-10 rounded-sm"></span>
            Connections
          </span><br />
          Through<br />
          Skill<br />
          Exchange
        </h1>
        <p className="text-[#4c9a6b] text-lg leading-relaxed max-w-150">
          {HERO_DATA.description}
        </p>
        <Button 
          type="primary" 
          size="large" 
          className="w-fit h-14 px-8 bg-[#0d1b13] hover:bg-black text-white rounded-full font-bold shadow-lg transition-all mt-4 border-none"
          onClick={handleJoinMovement}
        >
          {HERO_DATA.buttonText}
        </Button>
      </div>
      
      <div className="flex-1">
        <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 group">
          <img 
            src={HERO_DATA.image}
            alt={HERO_DATA.imageAlt}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/50">
            <Avatar.Group>
              <Avatar src="https://i.pravatar.cc/150?u=1" />
              <Avatar src="https://i.pravatar.cc/150?u=2" />
              <Avatar src="https://i.pravatar.cc/150?u=3" />
            </Avatar.Group>
            <span className="text-xs font-bold text-[#0d1b13]">Joined today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;