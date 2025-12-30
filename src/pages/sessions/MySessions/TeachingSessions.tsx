import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { TEACHING_SESSIONS } from '../../../constants/constants';
import TeachingSessionCard from '../../../components/sessions/TeachingSessionCard';

const TeachingSessions = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* Search Bar */}
      <div className="w-full sm:w-72 sm:ml-auto">
        <Input
          prefix={<SearchOutlined className="text-[#2bee79]" />}
          placeholder="Search sessions or learners..."
          className="rounded-xl border-none bg-white py-2.5 sm:py-3 text-sm shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-[#2bee79] h-10 sm:h-12"
        />
      </div>

      {/* Session List */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {TEACHING_SESSIONS.map((session, index) => (
          <TeachingSessionCard key={index} {...session} />
        ))}
      </div>

      {/* Empty State */}
      <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white p-8 sm:p-12 text-center ring-1 ring-slate-200 shadow-sm">
        <div className="mb-4 sm:mb-6 flex size-16 sm:size-20 items-center justify-center rounded-full bg-slate-50">
          <span className="text-3xl sm:text-4xl text-slate-300">📥</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">No session requests yet</h3>
        <p className="text-sm sm:text-base max-w-sm text-slate-500 mb-4 sm:mb-6">
          Once learners discover your skills, their requests will appear here.
        </p>
        <Button 
          type="primary" 
          className="rounded-full bg-[#2bee79] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-bold text-slate-900 hover:brightness-95 h-9 sm:h-10 w-full sm:w-auto"
        >
          Update Availability
        </Button>
      </div>
    </div>
  );
};

export default TeachingSessions;