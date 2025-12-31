import { useState } from 'react';
import { Button, Input } from 'antd';
import {
  ReadOutlined,
  TeamOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import TeachingSessions from './TeachingSessions';
import LearningSessions from './LearningSessions';

// --- Main Page Component ---
const MySessions = () => {
  const [activeTab, setActiveTab] = useState<'learning' | 'teaching'>('learning');

  return (
    <div className="min-h-screen bg-[#fdfbf9] font-sans antialiased">
      {/* Main Content */}
      <main className="px-6 sm:px-8 py-6 sm:py-10">
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">My Sessions</h1>
            <p className="text-[#5e6d66] text-base sm:text-lg font-medium">Manage your learning and teaching sessions</p>
          </div>
          
          {/* Request New Session Button - Right side of subtitle */}
          <Button 
            type="primary"
            icon={<PlusOutlined />}
            className="bg-black hover:bg-gray-800 border-none rounded-xl font-bold h-12 px-6 sm:px-8 text-white shrink-0"
          >
            Request New Session
          </Button>
        </div>

        {/* Toggle Buttons and Search - Side by Side */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="bg-white/60 p-1 rounded-full border border-white shadow-sm flex backdrop-blur-sm">
            <Button 
              type={activeTab === 'learning' ? 'primary' : 'text'} 
              icon={<ReadOutlined />} 
              className={`rounded-full h-10 sm:h-11 px-6 sm:px-8 font-bold border-none ${
                activeTab === 'learning' 
                  ? 'shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] bg-[#2bee79] text-white' 
                  : 'text-[#5e6d66] hover:text-[#1a1a1a]'
              }`}
              onClick={() => setActiveTab('learning')}
            >
              Learning Sessions
            </Button>
            <Button 
              type={activeTab === 'teaching' ? 'primary' : 'text'} 
              icon={<TeamOutlined />} 
              className={`rounded-full h-10 sm:h-11 px-6 sm:px-8 font-bold border-none ${
                activeTab === 'teaching' 
                  ? 'shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] bg-[#2bee79] text-white' 
                  : 'text-[#5e6d66] hover:text-[#1a1a1a]'
              }`}
              onClick={() => setActiveTab('teaching')}
            >
              Teaching Sessions
            </Button>
          </div>

          {/* Search Bar */}
          <div className="w-full sm:w-72">
            <Input
              prefix={<SearchOutlined className="text-[#2bee79]" />}
              placeholder={activeTab === 'learning' ? "Search sessions or learners..." : "Search sessions or learners..."}
              className="rounded-xl border-none bg-white py-2.5 sm:py-3 text-sm shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-[#2bee79] h-10 sm:h-12"
            />
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'learning' ? (
          <LearningSessions 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <TeachingSessions 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </main>
    </div>
  );
};

export default MySessions;
