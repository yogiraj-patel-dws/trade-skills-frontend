import { Button, Tag } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

interface TeachingSessionCardProps {
  title: string;
  duration: string;
  credits: string;
  status: 'Requested' | 'Scheduled' | 'Completed' | 'Rejected';
  learner: string;
  learnerImage: string;
  icon: string;
}

const TeachingSessionCard = ({ title, duration, credits, status, learner, learnerImage, icon }: TeachingSessionCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Requested': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Scheduled': return 'bg-green-50 text-green-700 border-green-200';
      case 'Completed': return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'Rejected': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getCardStyle = () => {
    switch (status) {
      case 'Requested': return 'border-l-4 border-l-yellow-400';
      case 'Scheduled': return 'border-l-4 border-l-[#2bee79]';
      default: return '';
    }
  };

  const isCompleted = status === 'Completed' || status === 'Rejected';

  return (
    <div className={`group relative flex flex-col gap-4 sm:gap-6 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200 hover:ring-[#2bee79]/50 hover:shadow-md transition-all mb-3 sm:mb-4 ${getCardStyle()} ${isCompleted ? 'opacity-80 hover:opacity-100' : ''}`}>
      
      <div className="flex items-start gap-3 sm:gap-4 flex-1">
        <div className={`flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full ${
          status === 'Requested' ? 'bg-yellow-50 text-yellow-600' :
          status === 'Scheduled' ? 'bg-[#2bee79]/20 text-green-800' :
          status === 'Completed' ? 'bg-slate-100 text-slate-500' :
          'bg-red-50 text-red-400'
        }`}>
          <span className="text-lg sm:text-xl">{icon}</span>
        </div>
        
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className={`font-bold text-base sm:text-lg truncate ${isCompleted ? 'text-slate-700' : 'text-slate-900'}`}>{title}</h3>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1">
            <span className="flex items-center gap-1">⏱️ {duration}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 hidden sm:block"></span>
            <span className={`flex items-center gap-1 font-medium ${
              status === 'Completed' ? 'text-slate-500' : 'text-[#2bee79]'
            }`}>
              {status === 'Completed' ? '✓' : '⚡'} {status === 'Completed' ? `Earned ${credits}` : `${credits} Credits`}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 lg:gap-12 justify-between border-t border-slate-100 pt-3 sm:pt-0 sm:border-t-0">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div 
            className={`size-6 sm:size-8 rounded-full bg-cover bg-center shrink-0 ${isCompleted ? 'grayscale' : ''}`}
            style={{ backgroundImage: `url(${learnerImage})` }}
          ></div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Learner</span>
            <span className={`text-sm font-medium truncate ${isCompleted ? 'text-slate-700' : 'text-slate-900'}`}>{learner}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <Tag className={`inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-xs font-bold border ${getStatusColor()}`}>
            {status === 'Scheduled' && <span className="h-1.5 w-1.5 rounded-full bg-[#2bee79]"></span>}
            {status === 'Requested' && <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>}
            {status}
          </Tag>
          <Button 
            type="text" 
            shape="circle" 
            size="small"
            icon={<MoreOutlined />} 
            className="flex size-6 sm:size-8 items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TeachingSessionCard;