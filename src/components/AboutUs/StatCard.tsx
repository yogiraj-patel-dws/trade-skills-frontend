interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-2xl flex flex-col gap-2 items-center text-center shadow-sm hover:shadow-md transition-all">
    <div className="mb-2">{icon}</div>
    <div className="text-[#0d1b13] text-4xl font-black tracking-tight">{value}</div>
    <div className="text-[#4c9a6b] font-medium">{label}</div>
  </div>
);

export default StatCard;