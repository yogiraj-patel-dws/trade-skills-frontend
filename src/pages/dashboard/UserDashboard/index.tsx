import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TrendingUp } from 'lucide-react';
import { DASHBOARD_STATS, UPCOMING_SESSIONS, RECOMMENDATIONS, ACTIVITY_ITEMS } from '../../../constants/constants';
import StatsCard from '../../../components/dashboard/StatsCard';
import SessionCard from '../../../components/dashboard/SessionCard';
import RecommendationCard from '../../../components/dashboard/RecommendationCard';
import ActivityItem from '../../../components/dashboard/ActivityItem';

const UserDashboard = () => {
  return (
    <div className="w-full min-h-screen" style={{background: 'linear-gradient(135deg, #e8fff2 0%, #f0fdf4 50%, #f8fafc 100%)'}}> 
      <main className=" px-6 py-10 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, Jamie! 👋
            </h1>
            <p className="text-slate-500 text-lg mt-1 font-medium">
              You have <span className="text-green-600 font-bold">2 upcoming sessions</span> this week.
            </p>
          </div>
          <Button 
            type="primary" 
            size="large" 
            icon={<PlusOutlined />} 
            className="h-14 px-8 bg-[#22C55E] hover:bg-green-600 border-none rounded-2xl font-bold shadow-lg shadow-green-100 transition-all transform hover:scale-105"
          >
            Post a Request
          </Button>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DASHBOARD_STATS.map((stat: any, i: number) => (
                <StatsCard key={i} {...stat} />
              ))}
            </div>

            {/* Upcoming Sessions */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Upcoming Sessions</h3>
                <button className="text-green-600 font-bold hover:underline">View Calendar</button>
              </div>
              <div className="space-y-4">
                {UPCOMING_SESSIONS.map((session: any) => (
                  <SessionCard key={session.id} {...session} />
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Recommended for You</h3>
                <button className="text-green-600 font-bold hover:underline">Explore All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RECOMMENDATIONS.map((item: any, i: number) => (
                  <RecommendationCard key={i} {...item} />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: Sidebar (Community Activity) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-50 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl text-slate-800 tracking-tight">Community Activity</h3>
                <div className="text-slate-300 cursor-pointer hover:text-green-500 transition-colors text-xl">↺</div>
              </div>
              
              <div className="ml-1">
                {ACTIVITY_ITEMS.map((item: any, i: number) => (
                  <ActivityItem 
                    key={i}
                    {...item}
                    isLast={i === ACTIVITY_ITEMS.length - 1}
                  />
                ))}
              </div>

              <button className="w-full text-emerald-600 font-extrabold text-[11px] mt-8 hover:text-emerald-700 transition-colors tracking-widest uppercase">
                VIEW MORE ACTIVITY
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-[#E6F9EF] p-10 rounded-[3rem] relative overflow-hidden border border-green-100">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <TrendingUp size={28} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3 leading-tight">Boost your learning</h3>
              <p className="text-base text-green-800/70 mb-8 font-medium leading-relaxed">
                Get 5 free credits when you invite a friend to TradeSkill.
              </p>
              <button className="w-full h-14 rounded-2xl font-bold text-slate-800 bg-white shadow-md hover:bg-slate-50 transition-all hover:-translate-y-0.5">
                Invite Friends
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;