import { useState } from 'react';
import { Button, Avatar, Tag, Dropdown } from 'antd';
import { MoreOutlined, DownOutlined } from '@ant-design/icons';
import { LEARNING_SESSIONS } from '../../../constants/constants';
import DeleteConfirmModal from '../../../components/common/DeleteConfirmModal';

interface LearningSessionsProps {
  activeTab: 'learning' | 'teaching';
  setActiveTab: (tab: 'learning' | 'teaching') => void;
}

const LearningSessions = ({}: LearningSessionsProps) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<{ id: string; title: string } | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteClick = (sessionId: string) => {
    const session = LEARNING_SESSIONS.find((s, idx) => `${idx}` === sessionId);
    if (session) {
      setSessionToDelete({ id: sessionId, title: session.title });
      setDeleteModalVisible(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!sessionToDelete) return;
    
    setDeleteLoading(true);
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setDeleteModalVisible(false);
      setSessionToDelete(null);
    } catch (error) {
      console.error('Error deleting session:', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setSessionToDelete(null);
  };

  return (
    <>
      {/* Learning Sessions List */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1.5fr_80px] gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SKILL & HOST</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">DURATION</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">CREDITS</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">STATUS</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">ACTIONS</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-slate-100">
          {LEARNING_SESSIONS.map((session, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1.5fr_80px] gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-slate-50/50 transition-colors">
              {/* SKILL & HOST */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Avatar shape="square" size={48} className="rounded-xl shadow-sm border-2 border-white" src={session.image} />
                <div className="flex flex-col min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">{session.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar size={20} src={session.hostImage} className="border border-white" />
                    <span className="text-sm text-slate-600 font-medium">{session.host}</span>
                    <Tag color="default" className="ml-1 text-xs font-semibold border-slate-200 m-0">HOST</Tag>
                  </div>
                </div>
              </div>

              {/* DURATION */}
              <div className="flex items-center text-sm sm:text-base text-slate-700 font-medium">
                {session.duration}
              </div>

              {/* CREDITS */}
              <div className="flex items-center">
                <span className="text-sm sm:text-base font-bold text-slate-900">{session.cost} Credits</span>
              </div>

              {/* STATUS */}
              <div className="flex items-center">
                {session.status === 'Scheduled' && (
                  <Tag color="success" className="px-3 py-1 rounded-full font-bold border-none text-xs sm:text-sm h-8 flex items-center m-0">
                    <span className="w-1.5 h-1.5 bg-[#2bee79] rounded-full mr-1.5"></span>
                    Scheduled
                  </Tag>
                )}
                {session.status === 'Requested' && (
                  <Tag color="warning" className="px-3 py-1 rounded-full font-bold border-none text-xs sm:text-sm h-8 flex items-center m-0">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1.5"></span>
                    Requested
                  </Tag>
                )}
                {session.status === 'Completed' && (
                  <Tag color="default" className="px-3 py-1 rounded-full font-bold border-none text-xs sm:text-sm h-8 flex items-center m-0">
                    Completed
                  </Tag>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-end">
                <Dropdown 
                  menu={{ 
                    items: [
                      { 
                        key: '2', 
                        label: 'Delete', 
                        danger: true,
                        onClick: () => handleDeleteClick(`${index}`)
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
                    className="hover:bg-slate-100"
                  />
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <Button 
          type="text" 
          icon={<DownOutlined />} 
          className="text-[#5e6d66] font-bold h-10 sm:h-12 px-6 sm:px-8 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100"
        >
          Load More Sessions
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        visible={deleteModalVisible}
        title="Delete Session"
        message="Are you sure you want to delete this session?"
        itemName={sessionToDelete?.title}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={deleteLoading}
      />
    </>
  );
};

export default LearningSessions;
