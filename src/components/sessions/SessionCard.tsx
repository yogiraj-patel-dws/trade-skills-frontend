import { Button, Dropdown, Avatar, Tag } from 'antd';
import { 
  VideoCameraOutlined, 
  MoreOutlined, 
  CheckCircleFilled,
  ClockCircleOutlined,
  UserOutlined
} from '@ant-design/icons';

interface SessionCardProps {
  title: string;
  host: string;
  duration: string;
  level: string;
  cost: string;
  status: string;
  image: string;
  hostImage: string;
  date?: string;
}

const SessionCard = ({ title, host, duration, level, cost, status, image, hostImage, date }: SessionCardProps) => {
  const isScheduled = status === 'Scheduled';
  const isRequested = status === 'Requested';
  const isCompleted = status === 'Completed';

  return (
    <div className={`group relative bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-1 transition-all duration-300
      ${isScheduled ? 'shadow-card hover:shadow-[0_20px_40px_-12px_rgba(43,238,121,0.15)]' : 'shadow-soft opacity-90 hover:opacity-100'}`}>
      
      {isScheduled && <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2bee79] rounded-l-2xl sm:rounded-l-3xl" />}

      <div className="p-3 sm:p-5 lg:p-7">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-5 flex-1">
            <div className="shrink-0 relative">
              <Avatar shape="square" size={60} className={`sm:w-20! sm:h-20! rounded-xl sm:rounded-2xl shadow-md border-2 sm:border-4 border-white ${isCompleted ? 'grayscale group-hover:grayscale-0' : ''}`} src={image} />
              <Avatar size={24} className="sm:w-9! sm:h-9! absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 border-2 sm:border-[3px] border-white shadow-sm" src={hostImage} />
            </div>
            
            <div className="flex flex-col justify-center min-w-0 pt-1 flex-1">
              <h3 className="text-[#1a1a1a] text-lg sm:text-xl font-extrabold truncate tracking-tight mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5e6d66] font-medium mb-2">
                <UserOutlined className="text-[#2bee79]" />
                <span className="truncate">Host: <span className="text-[#1a1a1a] font-bold">{host}</span></span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5e6d66]">
                <Tag color="default" className="font-semibold border-slate-200 m-0 text-xs">{level}</Tag>
                <span className="flex items-center gap-1 font-semibold">
                    <ClockCircleOutlined className="text-[12px] sm:text-[14px]" /> {duration}
                    {date && <span className="hidden sm:inline ml-1">• {date}</span>}
                </span>
                {date && <span className="sm:hidden text-xs text-[#5e6d66]">{date}</span>}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-8 justify-between border-t border-slate-100 pt-4 sm:pt-0 sm:border-t-0">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <div className="text-left sm:text-right">
                <p className={`text-base sm:text-lg font-bold ${isCompleted ? 'text-[#1a1a1a]/60' : 'text-[#1a1a1a]'}`}>{cost} Credits</p>
                <p className="text-xs text-[#5e6d66] font-medium">
                  {isRequested ? 'Pending' : isCompleted ? '' : 'Learning cost'}
                </p>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                {isScheduled && (
                  <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#2bee79]/10 text-emerald-800 font-bold text-xs sm:text-sm gap-1.5 sm:gap-2 border border-[#2bee79]/20">
                    <span className="size-1.5 sm:size-2 bg-[#2bee79] rounded-full animate-pulse"></span> 
                    <span className="hidden sm:inline">Scheduled</span>
                    <span className="sm:hidden">Live</span>
                  </div>
                )}
                {isRequested && (
                  <Tag color="warning" className="px-3 sm:px-4 py-1 rounded-lg sm:rounded-xl font-bold border-none text-xs sm:text-sm h-7 sm:h-9 flex items-center m-0">Requested</Tag>
                )}
                {isCompleted && (
                  <Tag icon={<CheckCircleFilled />} color="default" className="px-3 sm:px-4 py-1 rounded-lg sm:rounded-xl font-bold border-none text-xs sm:text-sm h-7 sm:h-9 flex items-center m-0">Done</Tag>
                )}

                <Dropdown menu={{ items: [{ key: '1', label: 'Edit' }, { key: '2', label: 'Cancel' }] }} trigger={['click']}>
                  <Button type="text" shape="circle" size="small" className="sm:size-auto" icon={<MoreOutlined />} />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        {isScheduled && (
          <div className="mt-3 pt-4 sm:pt-5 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center bg-slate-50/50 -mx-3 sm:-mx-5 lg:-mx-7 -mb-3 sm:-mb-5 lg:-mb-7 px-3 sm:px-5 lg:px-7 py-3 sm:py-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2bee79] font-bold bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm border border-[#2bee79]/10">
              <VideoCameraOutlined /> <span>Zoom Ready</span>
            </div>
            <div className="text-xs sm:text-sm text-[#5e6d66] font-medium flex-1">
              Starts in <span className="text-[#1a1a1a] font-bold">2 hours</span> <span className="hidden sm:inline">(Today, 4:00 PM)</span>
            </div>
            <Button type="primary" size="small" className="sm:size-default bg-[#1a1a1a] hover:bg-black! border-none h-8 sm:h-10 rounded-lg sm:rounded-xl font-bold shadow-lg w-full sm:w-auto">
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">Details</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionCard;