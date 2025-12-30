import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<any>;
  color: string;
  iconColor: string;
}

const StatsCard = ({ label, value, trend, icon: Icon, color, iconColor }: StatsCardProps) => (
  <div className="bg-white p-4 sm:p-6 shadow-sm border border-slate-100 rounded-xl sm:rounded-2xl flex justify-between hover:shadow-md transition-shadow">
    <div className="flex-1">
      <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-4">{label}</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-1">{value}</h2>
      <p className="text-xs font-bold text-slate-400 flex items-center gap-1">
        {trend.includes('+') && <TrendingUp size={12} className="text-green-500 sm:w-3.5 sm:h-3.5" />}
        {trend}
      </p>
    </div>
    <div className={`${color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
      <Icon className={`${iconColor} w-5 h-5 sm:w-6 sm:h-6`} />
    </div>
  </div>
);

export default StatsCard;