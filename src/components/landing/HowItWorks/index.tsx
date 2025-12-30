import { SquarePen, UserSearch, Repeat } from 'lucide-react';

interface TimelineStepProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineStep = ({ icon: Icon, title, description, isLast }: TimelineStepProps) => {
  return (
    <div className={`flex gap-4 ${!isLast ? 'mb-8' : ''}`}>
      <div className="shrink-0">
        <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center">
          <Icon className="text-white" size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-white py-20 rounded-[3rem] my-8 px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">How Swapping Works</h2>
          <p className="text-lg text-slate-600 mb-8">It's simple, fair, and fun. No currency involved—just a mutual exchange of time and talent.</p>
          <div className="mt-8">
            <TimelineStep icon={SquarePen} title="List a Skill" description="Create a profile and share what you know. It can be anything from salsa dancing to spreadsheets." />
            <TimelineStep icon={UserSearch} title="Find a Match" description="Browse our community to find someone teaching what you want to learn." />
            <TimelineStep icon={Repeat} title="Start Swapping" description="Connect via video or in person. Schedule a session and start exchanging knowledge." isLast />
          </div>
        </div>
        <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800" className="w-full h-full object-cover" alt="People" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;