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
  <div className="bg-white p-5 flex flex-col sm:flex-row items-center justify-between border border-slate-50 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-5 w-full">
      <img src={img} className="w-20 h-20 rounded-3xl object-cover shadow-inner" alt="" />
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${isPrimary ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
            {date}
          </span>
          <span className="text-sm text-slate-400 font-bold">{time}</span>
        </div>
        <h4 className="font-bold text-xl text-slate-800">{title}</h4>
        <p className="text-slate-500 font-medium text-sm">with {instructor} • {type}</p>
      </div>
    </div>
    <Button 
      className={`mt-4 sm:mt-0 rounded-2xl px-10 h-12 font-bold text-base transition-all ${isPrimary ? 'bg-[#22C55E] text-white border-none shadow-md' : 'bg-white text-slate-700 border-slate-200'}`}
    >
      {action}
    </Button>
  </div>
);

export default SessionCard;