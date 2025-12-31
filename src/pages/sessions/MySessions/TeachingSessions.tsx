import { useState } from 'react';
import { Button } from 'antd';
import { TEACHING_SESSIONS } from '../../../constants/constants';
import TeachingSessionCard from '../../../components/sessions/TeachingSessionCard';
import DeleteConfirmModal from '../../../components/common/DeleteConfirmModal';

interface TeachingSessionsProps {
  activeTab: 'learning' | 'teaching';
  setActiveTab: (tab: 'learning' | 'teaching') => void;
}

const TeachingSessions = ({}: TeachingSessionsProps) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<{ id: string; title: string } | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteClick = (sessionId: string) => {
    const session = TEACHING_SESSIONS.find((s, idx) => `${idx}` === sessionId);
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

  const hasSessions = TEACHING_SESSIONS.length > 0;

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {hasSessions ? (
        <>
          {/* Session List */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {TEACHING_SESSIONS.map((session, index) => (
              <TeachingSessionCard 
                key={index}
                id={`${index}`}
                {...session}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        </>
      ) : (
        /* Empty State */
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
      )}

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
    </div>
  );
};

export default TeachingSessions;
