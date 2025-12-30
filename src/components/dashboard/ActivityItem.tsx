interface ActivityItemProps {
  avatar: string;
  text: {
    name: string;
    action: string;
    skill: string;
    detail: string;
  };
  time: string;
  color: string;
  isLast?: boolean;
}

const ActivityItem = ({ avatar, text, time, color, isLast }: ActivityItemProps) => (
  <div className="relative flex gap-6 pb-10 last:pb-0">
    {!isLast && (
      <div className="absolute top-6 bottom-0 bg-slate-100" />
    )}
    <div className="relative z-10">
      <div className={`w-3.5 h-3.5 rounded-full ${color} ring-4 ring-white shadow-sm mt-1.5`} />
    </div>
    <div className="flex gap-4 items-start flex-1">
      <img 
        src={avatar} 
        alt="User" 
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
      />
      <div className="min-w-0">
        <div className="text-sm text-slate-600 leading-snug">
          <span className="font-bold text-slate-800">{text.name}</span> {text.action} {text.skill && <span className="text-emerald-600 font-bold">{text.skill}</span>} {text.detail && (text.detail.includes('"') ? <span className="text-slate-400 italic font-medium">{text.detail}</span> : text.detail)}
        </div>
        <div className="text-xs text-slate-400 mt-1 font-medium">{time}</div>
      </div>
    </div>
  </div>
);

export default ActivityItem;