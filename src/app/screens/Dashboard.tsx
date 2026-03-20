import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TaskCard } from '../components/library/TaskCard';
import { Input } from '../components/library/Input';
import { Button } from '../components/library/Button';
import { mockTasks } from '../data/mockTasks';

export function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = mockTasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[#333333]">ToDoApp - Lista Zadań</h1>
            <div className="flex items-center gap-[16px]">
              <div 
                className="w-[40px] h-[40px] bg-[#D0D0D0] cursor-pointer hover:bg-[#C0C0C0] flex items-center justify-center"
                onClick={() => navigate('/settings')}
                title="Ustawienia"
              >
                <div className="w-[20px] h-[20px] bg-[#666666]"></div>
              </div>
              <div className="w-[40px] h-[40px] bg-[#D0D0D0] rounded-full"></div>
              <span className="text-[#666666]">Jan Kowalski</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Search and Filters */}
        <div className="mb-[32px] flex gap-[24px]">
          <div className="flex-1">
            <Input 
              placeholder="Szukaj zadań..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="secondary"
            onClick={() => navigate('/filter')}
          >
            <div className="flex items-center gap-[8px]">
              <div className="w-[16px] h-[16px] bg-[#666666]"></div>
              <span>Filtry i Sortowanie</span>
            </div>
          </Button>
        </div>

        {/* Filter Chips */}
        <div className="mb-[32px] flex gap-[16px] items-center">
          <div className="px-[16px] py-[8px] bg-[#E0E0E0] text-[#333333] cursor-pointer hover:bg-[#D0D0D0]">
            Wszystkie ({mockTasks.length})
          </div>
          <div className="px-[16px] py-[8px] bg-white border border-[#D0D0D0] text-[#666666] cursor-pointer hover:bg-[#F5F5F5]">
            Aktywne ({mockTasks.filter(t => t.status === 'default').length})
          </div>
          <div className="px-[16px] py-[8px] bg-white border border-[#D0D0D0] text-[#666666] cursor-pointer hover:bg-[#F5F5F5]">
            Ukończone ({mockTasks.filter(t => t.status === 'completed').length})
          </div>
          <div className="px-[16px] py-[8px] bg-white border border-[#D0D0D0] text-[#666666] cursor-pointer hover:bg-[#F5F5F5]">
            Przeterminowane ({mockTasks.filter(t => t.status === 'overdue').length})
          </div>
          
          <div className="ml-auto">
            <div 
              className="px-[16px] py-[8px] bg-white border border-[#999999] text-[#333333] cursor-pointer hover:bg-[#F5F5F5] flex items-center gap-[8px]"
              onClick={() => navigate('/components')}
            >
              <div className="w-[16px] h-[16px] bg-[#666666]"></div>
              <span>Biblioteka</span>
            </div>
          </div>
        </div>

        {/* Task List Grid */}
        <div className="grid grid-cols-3 gap-[24px] mb-[80px]">
          {filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task}
              onClick={() => navigate(`/task/${task.id}`)}
            />
          ))}
        </div>

        {/* Floating Action Button */}
        <div 
          className="fixed bottom-[40px] right-[40px] w-[64px] h-[64px] bg-[#333333] text-white flex items-center justify-center cursor-pointer hover:bg-[#555555] transition-all shadow-lg"
          onClick={() => navigate('/add-task')}
        >
          <div className="text-[32px]">+</div>
        </div>
      </div>
    </div>
  );
}