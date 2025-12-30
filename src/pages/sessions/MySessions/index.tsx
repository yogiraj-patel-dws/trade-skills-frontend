import { useState } from 'react';
import { Button } from 'antd';
import {
  HistoryOutlined, 
  ReadOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import TeachingSessions from './TeachingSessions';
import LearningSessions from './LearningSessions';

// --- Main Page Component ---
const MySessions = () => {
  const [activeTab, setActiveTab] = useState<'learning' | 'teaching'>('learning');

  return (
    <div className="min-h-screen bg-[#fdfbf9] font-sans antialiased px-6">

      {/* Main Content */}
      <main className="px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a1a1a] mb-2">My Sessions</h1>
            <p className="text-[#5e6d66] text-lg font-medium">Manage your learning and teaching sessions within the community.</p>
          </div>
          <Button size="large" icon={<HistoryOutlined />} className="rounded-2xl font-bold text-[#5e6d66] border-slate-200 h-12 hover:text-[#2bee79]! hover:border-[#2bee79]!">
            Session History
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="bg-white/60 p-1 rounded-full border border-white shadow-sm flex backdrop-blur-sm">
            <Button 
              type={activeTab === 'learning' ? 'primary' : 'text'} 
              icon={<ReadOutlined />} 
              className={`rounded-full h-11 px-8 font-bold border-none ${
                activeTab === 'learning' 
                  ? 'shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] bg-[#2bee79]' 
                  : 'text-[#5e6d66] hover:text-[#1a1a1a]!'
              }`}
              onClick={() => setActiveTab('learning')}
            >
              Learning Sessions
            </Button>
            <Button 
              type={activeTab === 'teaching' ? 'primary' : 'text'} 
              icon={<TeamOutlined />} 
              className={`rounded-full h-11 px-8 font-bold border-none ${
                activeTab === 'teaching' 
                  ? 'shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] bg-[#2bee79]' 
                  : 'text-[#5e6d66] hover:text-[#1a1a1a]!'
              }`}
              onClick={() => setActiveTab('teaching')}
            >
              Teaching Sessions
            </Button>
          </div>
        
        </div>

        {/* Content based on active tab */}
        {activeTab === 'learning' ? <LearningSessions /> : <TeachingSessions />}
      </main>
    </div>
  );
};

export default MySessions;