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
      <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 lg:mb-10 gap-4">
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, Jamie! 👋
            </h1>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg mt-1 font-medium">
              You have <span className="text-green-600 font-bold">2 upcoming sessions</span> this week.
            </p>
          </div>
          <Button 
            type="primary" 
            size="large" 
            icon={<PlusOutlined />} 
            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-[#22C55E] hover:bg-green-600 border-none rounded-xl sm:rounded-2xl font-bold shadow-lg shadow-green-100 transition-all transform hover:scale-105"
          >
            Post a Request
          </Button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Content */}
          <div className="xl:col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {DASHBOARD_STATS.map((stat: any, i: number) => (
                <StatsCard key={i} {...stat} />
              ))}
            </div>

            {/* Upcoming Sessions */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Upcoming Sessions</h3>
                <button className="text-green-600 font-bold hover:underline text-sm sm:text-base">View Calendar</button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {UPCOMING_SESSIONS.map((session: any) => (
                  <SessionCard key={session.id} {...session} />
                ))}
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Recommended for You</h3>
                <button className="text-green-600 font-bold hover:underline text-sm sm:text-base">Explore All</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {RECOMMENDATIONS.map((item: any, i: number) => (
                  <RecommendationCard key={i} {...item} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-4 space-y-6 sm:space-y-8">
            {/* Community Activity */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[3rem] border border-slate-50 shadow-sm">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <h3 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight">Community Activity</h3>
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

              <button className="w-full text-emerald-600 font-extrabold text-[10px] sm:text-[11px] mt-6 sm:mt-8 hover:text-emerald-700 transition-colors tracking-widest uppercase">
                VIEW MORE ACTIVITY
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-[#E6F9EF] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[3rem] relative overflow-hidden border border-green-100">
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                <TrendingUp size={24} className="text-green-500 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-2 sm:mb-3 leading-tight">Boost your learning</h3>
              <p className="text-sm sm:text-base text-green-800/70 mb-6 sm:mb-8 font-medium leading-relaxed">
                Get 5 free credits when you invite a friend to TradeSkill.
              </p>
              <button className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl font-bold text-slate-800 bg-white shadow-md hover:bg-slate-50 transition-all hover:-translate-y-0.5">
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