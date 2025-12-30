import { Button } from 'antd';
import { ShieldCheck, Music2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full grid lg:grid-cols-2 items-center px-6 pt-6">
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full bg-[#2beea0]/10 text-slate-800 text-sm font-medium border border-[#2beea0]/20">
          <ShieldCheck size={16} className="text-[#25d18c]" />
          #1 Skill Exchange Community
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.1]">
          Learn & Teach <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2beea0] to-teal-500">
            Together.
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
          Swap talents, build meaningful connections, and master new abilities without spending a dime. The fairest way to grow.
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <Button size="large" className="h-14 px-8 rounded-full bg-[#2beea0] text-slate-900 font-bold border-none shadow-xl hover:scale-105 transition-transform">
            Join TradeSkill
          </Button>
          <Button size="large" className="h-14 px-8 rounded-full font-bold">
            Explore Skills
          </Button>
        </div>
        <div className="flex items-center justify-center lg:justify-start pt-4">
          <div className="flex">
            {[1, 2, 3].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="user" />
            ))}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-600">+2k</div>
          </div>
          <p className="text-sm text-slate-500 font-medium">Joined this week</p>
        </div>
      </div>

      <div className="relative h-96">
        <div className="absolute inset-0 bg-linear-to-tr from-[#2beea0]/30 to-blue-200/30 blur-3xl rounded-full -z-10" />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 h-full pt-7">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" alt="Collab" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#2beea0]/20 p-2 rounded-full"><Music2 size={14} /></div>
              <span className="text-xs font-bold">Guitar Lesson</span>
            </div>
            <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#2beea0] w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}