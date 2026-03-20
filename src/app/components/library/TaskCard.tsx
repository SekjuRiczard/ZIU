import React from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  status: 'default' | 'completed' | 'overdue';
}

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  const baseStyles = 'bg-white border border-[#D0D0D0] p-[24px] cursor-pointer hover:border-[#999999] transition-all';
  
  const statusStyles = {
    default: '',
    completed: 'opacity-70',
    overdue: 'border-l-[4px] border-l-[#666666]'
  };

  const priorityLabels = {
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki'
  };

  return (
    <div 
      className={`${baseStyles} ${statusStyles[task.status]}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-[16px]">
        <h3 className={task.status === 'completed' ? 'line-through text-[#999999]' : 'text-[#333333]'}>
          {task.title}
        </h3>
        <div className="w-[64px] h-[24px] bg-[#E0E0E0] flex items-center justify-center text-[12px] text-[#666666]">
          {priorityLabels[task.priority]}
        </div>
      </div>
      
      <p className="text-[#666666] mb-[16px] line-clamp-2">
        {task.description}
      </p>
      
      <div className="flex items-center gap-[16px] text-[14px] text-[#999999]">
        <div className="flex items-center gap-[8px]">
          <div className="w-[16px] h-[16px] bg-[#D0D0D0]"></div>
          <span>{task.dueDate}</span>
        </div>
        {task.status === 'completed' && (
          <div className="flex items-center gap-[8px]">
            <div className="w-[16px] h-[16px] bg-[#999999]"></div>
            <span>Ukończone</span>
          </div>
        )}
        {task.status === 'overdue' && (
          <div className="flex items-center gap-[8px]">
            <div className="w-[16px] h-[16px] bg-[#666666]"></div>
            <span>Przeterminowane</span>
          </div>
        )}
      </div>
    </div>
  );
}
