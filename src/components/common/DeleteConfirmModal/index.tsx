import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface DeleteConfirmModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  itemName?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  visible,
  title = 'Confirm Delete',
  message = 'Are you sure you want to delete this item?',
  itemName,
  onConfirm,
  onCancel,
  loading = false,
}) => {
  return (
    <Modal
      open={visible}
      title={
        <div className="flex items-center gap-2">
          <ExclamationCircleOutlined className="text-red-500 text-xl" />
          <span className="text-lg font-bold">{title}</span>
        </div>
      }
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Delete"
      cancelText="Cancel"
      okButtonProps={{
        danger: true,
        loading,
        className: 'bg-red-500 hover:bg-red-600 border-none',
      }}
      cancelButtonProps={{
        className: 'hover:bg-gray-100',
      }}
      className="delete-confirm-modal"
    >
      <div className="py-4">
        <p className="text-gray-700 text-base">
          {message}
        </p>
        {itemName && (
          <p className="mt-2 text-gray-900 font-semibold">
            "{itemName}"
          </p>
        )}
        <p className="mt-3 text-sm text-gray-500">
          This action cannot be undone.
        </p>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;

