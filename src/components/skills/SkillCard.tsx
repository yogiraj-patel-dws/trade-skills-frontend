import React from 'react';
import { Dropdown, type MenuProps } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Skill {
  id: string;
  image: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  duration: string;
  credits: number;
}

interface SkillCardProps {
  skill: Skill;
  onEdit?: (skillId: string) => void;
  onDelete?: (skillId: string) => void;
}

export const SkillCard = ({ skill, onEdit, onDelete }: SkillCardProps) => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'edit',
      label: 'Edit',
      icon: <EditOutlined />,
      onClick: () => onEdit?.(skill.id),
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => onDelete?.(skill.id),
    },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={skill.image} 
          alt={skill.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <skill.icon className="w-3 h-3 text-emerald-500" />
            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{skill.level}</span>
          </div>
          <Dropdown 
            menu={{ items: menuItems }} 
            trigger={['click']}
            placement="bottomRight"
          >
            <button 
              className="bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm hover:bg-white transition-colors flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreOutlined className="text-gray-700 text-base" />
            </button>
          </Dropdown>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Avatar" 
            className="w-6 h-6 rounded-full bg-orange-100"
          />
          <span className="text-sm text-emerald-600 font-medium">You (Instructor)</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-6 leading-tight h-12">
          {skill.title}
        </h3>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{skill.duration}</span>
          </div>
          
          <div className="bg-emerald-50 px-3 py-1 rounded-md flex items-center gap-1.5">
            <div className="w-4 h-4 bg-emerald-500 rounded flex items-center justify-center">
               <span className="text-[10px] text-white font-bold">$</span>
            </div>
            <span className="text-emerald-600 font-bold text-sm">{skill.credits} Credits</span>
          </div>
        </div>
      </div>
    </div>
  );
};
