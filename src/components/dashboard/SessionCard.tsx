import { Button } from 'antd';

interface SessionCardProps {
  id: number;
  title: string;
  time: string;
  date: string;
  instructor: string;
  type: string;
  img: string;
  action: string;
  isPrimary: boolean;
}

const SessionCard = ({ title, time, date, instructor, type, img, action, isPrimary }: SessionCardProps) => (
  <div className="bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-slate-50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4">
    <div className="flex items-start sm:items-center gap-3 sm:gap-5 w-full">
      <img src={img} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl object-cover shadow-inner flex-shrink-0" alt="" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
          <span className={`text-[10px] sm:text-[11px] font-black px-2 sm:px-3 py-1 rounded-full uppercase tracking-tighter inline-block w-fit ${isPrimary ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
            {date}
          </span>
          <span className="text-xs sm:text-sm text-slate-400 font-bold">{time}</span>
        </div>
        <h4 className="font-bold text-lg sm:text-xl text-slate-800 mb-1 truncate">{title}</h4>
        <p className="text-slate-500 font-medium text-xs sm:text-sm truncate">with {instructor} • {type}</p>
      </div>
    </div>
    <Button 
      className={`w-full sm:w-auto rounded-xl sm:rounded-2xl px-6 sm:px-10 h-10 sm:h-12 font-bold text-sm sm:text-base transition-all flex-shrink-0 ${isPrimary ? 'bg-[#22C55E] text-white border-none shadow-md' : 'bg-white text-slate-700 border-slate-200'}`}
    >
      {action}
    </Button>
  </div>
);

export default SessionCard;