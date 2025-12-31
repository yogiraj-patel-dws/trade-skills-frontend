import { Button, Tag, Dropdown, Avatar } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface TeachingSessionCardProps {
  id?: string;
  title: string;
  duration: string;
  credits: string;
  status: 'Requested' | 'Scheduled' | 'Completed' | 'Rejected';
  learner: string;
  learnerImage: string;
  icon: string;
  onDelete?: (id: string) => void;
}

const TeachingSessionCard = ({ id, title, duration, credits, status, learner, learnerImage, icon, onDelete }: TeachingSessionCardProps) => {
  const navigate = useNavigate();

  const getIconBgColor = () => {
    switch (status) {
      case 'Requested': return 'bg-yellow-50';
      case 'Scheduled': return 'bg-green-50';
      case 'Completed': return 'bg-slate-100';
      case 'Rejected': return 'bg-red-50';
      default: return 'bg-slate-100';
    }
  };

  const getStatusConfig = () => {
    switch (status) {
      case 'Requested':
        return {
          color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
          dot: 'bg-yellow-500',
          text: 'Requested'
        };
      case 'Scheduled':
        return {
          color: 'bg-green-50 text-green-700 border-green-200',
          dot: 'bg-[#2bee79]',
          text: 'Scheduled'
        };
      case 'Completed':
        return {
          color: 'bg-slate-100 text-slate-600 border-slate-200',
          dot: '',
          text: 'Completed'
        };
      case 'Rejected':
        return {
          color: 'bg-red-50 text-red-600 border-red-200',
          dot: 'bg-red-500',
          text: 'Rejected'
        };
      default:
        return {
          color: 'bg-slate-100 text-slate-600 border-slate-200',
          dot: '',
          text: status
        };
    }
  };

  const statusConfig = getStatusConfig();
  const isCompleted = status === 'Completed';

  const handleCardClick = () => {
    if (id) {
      navigate(`/sessions/${id}`);
    }
  };

  return (
    <div 
      className="group relative flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm ring-1 ring-slate-200 hover:ring-[#2bee79]/50 hover:shadow-md transition-all cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Icon */}
      <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${getIconBgColor()}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className={`font-bold text-base truncate mb-1 ${isCompleted ? 'text-slate-700' : 'text-slate-900'}`}>
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-1">
          <span>{duration}</span>
          <span className="text-slate-400">•</span>
          {status === 'Completed' ? (
            <span className="font-medium text-slate-600">Earned {credits}</span>
          ) : (
            <span className="font-medium text-[#2bee79]">{credits} Credits</span>
          )}
        </div>
      </div>

      {/* Learner Details - Centered */}
      <div className="flex items-center gap-2 flex-1 justify-center">
        <Avatar size={32} src={learnerImage} className="border border-white" />
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-400 uppercase">LEARNER</span>
          <span className={`text-sm font-medium ${isCompleted ? 'text-slate-600' : 'text-slate-900'}`}>
            {learner}
          </span>
        </div>
      </div>

      {/* Status and Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <Tag className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border ${statusConfig.color}`}>
          {statusConfig.dot && <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dot}`}></span>}
          {statusConfig.text}
        </Tag>
        <Dropdown 
          menu={{ 
            items: [
              { key: '1', label: 'View Details', onClick: handleCardClick }, 
              { 
                key: '2', 
                label: 'Delete', 
                danger: true,
                onClick: (e) => {
                  e.domEvent.stopPropagation();
                  id && onDelete?.(id);
                }
              }
            ] 
          }} 
          trigger={['click']}
        >
          <Button 
            type="text" 
            shape="circle" 
            size="small"
            icon={<MoreOutlined />} 
            className="flex size-8 items-center justify-center hover:bg-slate-100 text-slate-400 shrink-0"
            onClick={(e) => e.stopPropagation()}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default TeachingSessionCard;
