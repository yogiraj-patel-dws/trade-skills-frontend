import { Button, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { LEARNING_SESSIONS } from '../../../constants/constants';
import SessionCard from '../../../components/sessions/SessionCard';

const LearningSessions = () => {
  return (
    <>
      {/* Filter */}
      <div className="flex justify-end mb-6 sm:mb-10">
        <Select 
          defaultValue="all"
          style={{ width: '100%', maxWidth: 180 }}
          className="h-10 sm:h-11 custom-select-rounded"
          options={[
            { value: 'all', label: 'All Statuses' },
            { value: 'scheduled', label: 'Scheduled' },
            { value: 'requested', label: 'Requested' },
            { value: 'completed', label: 'Completed' },
          ]}
        />
      </div>

      {/* Learning Sessions List */}
      <div className="space-y-6">
        {LEARNING_SESSIONS.map((session, index) => (
          <SessionCard key={index} {...session} />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-12">
        <Button 
          type="text" 
          icon={<DownOutlined />} 
          className="text-[#5e6d66] font-bold h-10 sm:h-12 px-6 sm:px-8 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 w-full sm:w-auto"
        >
          Show older sessions
        </Button>
      </div>
    </>
  );
};

export default LearningSessions;