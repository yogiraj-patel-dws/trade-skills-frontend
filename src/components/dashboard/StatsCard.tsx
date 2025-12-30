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
  <div className="bg-white p-6 shadow-sm border border-slate-100 flex justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">{label}</p>
      <h2 className="text-4xl font-black text-slate-800 mb-1">{value}</h2>
      <p className="text-xs font-bold text-slate-400 flex items-center gap-1">
        {trend.includes('+') && <TrendingUp size={14} className="text-green-500" />}
        {trend}
      </p>
    </div>
    <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center`}>
      <Icon className={iconColor} />
    </div>
  </div>
);

export default StatsCard;