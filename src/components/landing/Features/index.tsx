import { CheckCircle, BookOpen, Users } from 'lucide-react';

export default function Features() {
  return (
    <section className="px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Why TradeSkill?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Whether you're looking to master a new craft or share your expertise, our community is built on mutual growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* For Learners */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
            <BookOpen className="text-blue-500" size={24} />
          </div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-50/30 rounded-full"></div>
          
          <h3 className="text-2xl font-bold mb-6">For Learners</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Access thousands of skills for free.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Learn at your own pace with real people.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Expand your network globally.</span>
            </div>
          </div>
          
          <button className="mt-6 text-[#2beea0] font-bold text-sm hover:underline">
            Start Learning →
          </button>
        </div>

        {/* For Teachers */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
            <Users className="text-purple-500" size={24} />
          </div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-50/30 rounded-full"></div>
          
          <h3 className="text-2xl font-bold mb-6">For Teachers</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Reinforce your knowledge by teaching.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Build a reputation as an expert.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#2beea0]" size={20} />
              <span className="text-slate-700">Earn community credits for premium features.</span>
            </div>
          </div>
          
          <button className="mt-6 text-[#2beea0] font-bold text-sm hover:underline">
            Start Teaching →
          </button>
        </div>
      </div>
    </section>
  );
}