import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../components/library/Button';
import { mockTasks } from '../data/mockTasks';

export function TaskDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const task = mockTasks.find(t => t.id === id);

  if (!task) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-[#999999]">Zadanie nie znalezione</div>
      </div>
    );
  }

  const priorityLabels = {
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki'
  };

  const statusLabels = {
    default: 'Aktywne',
    completed: 'Ukończone',
    overdue: 'Przeterminowane'
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 className="text-[#333333]">Szczegóły Zadania</h1>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Breadcrumb */}
        <div className="mb-[32px] flex items-center gap-[8px] text-[#999999]">
          <span 
            className="cursor-pointer hover:text-[#333333]"
            onClick={() => navigate('/')}
          >
            Dashboard
          </span>
          <span>/</span>
          <span className="text-[#333333]">Szczegóły zadania</span>
        </div>

        <div className="max-w-[900px]">
          {/* Task Content */}
          <div className="bg-white border border-[#E0E0E0] p-[40px] mb-[24px]">
            {/* Title and Status */}
            <div className="flex items-start justify-between mb-[32px] pb-[24px] border-b border-[#E0E0E0]">
              <div className="flex-1">
                <h2 className={`mb-[8px] ${task.status === 'completed' ? 'line-through text-[#999999]' : 'text-[#333333]'}`}>
                  {task.title}
                </h2>
                <div className="flex items-center gap-[16px] text-[14px]">
                  <div className="px-[12px] py-[4px] bg-[#E0E0E0] text-[#666666]">
                    {statusLabels[task.status]}
                  </div>
                  <div className="px-[12px] py-[4px] bg-[#F5F5F5] text-[#666666]">
                    {priorityLabels[task.priority]}
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="mb-[32px] grid grid-cols-2 gap-[24px]">
              <div>
                <div className="text-[#999999] mb-[8px]">Termin wykonania</div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[20px] h-[20px] bg-[#D0D0D0]"></div>
                  <span className="text-[#333333]">{task.dueDate}</span>
                </div>
              </div>
              <div>
                <div className="text-[#999999] mb-[8px]">Data utworzenia</div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[20px] h-[20px] bg-[#D0D0D0]"></div>
                  <span className="text-[#333333]">2026-03-15</span>
                </div>
              </div>
              <div>
                <div className="text-[#999999] mb-[8px]">Kategoria</div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[20px] h-[20px] bg-[#D0D0D0]"></div>
                  <span className="text-[#333333]">Projekt</span>
                </div>
              </div>
              <div>
                <div className="text-[#999999] mb-[8px]">Przypisane do</div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[20px] h-[20px] bg-[#999999] rounded-full"></div>
                  <span className="text-[#333333]">Jan Kowalski</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-[32px]">
              <div className="text-[#999999] mb-[12px]">Opis zadania</div>
              <p className="text-[#666666] leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Additional Info */}
            <div className="pt-[24px] border-t border-[#E0E0E0]">
              <div className="text-[#999999] mb-[12px]">Notatki</div>
              <div className="bg-[#F9F9F9] p-[16px] text-[#666666] italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[16px]">
            <Button 
              variant="secondary"
              onClick={() => navigate('/')}
            >
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] h-[16px] bg-[#666666]"></div>
                <span>Powrót</span>
              </div>
            </Button>
            <Button 
              variant="primary"
              onClick={() => alert('Funkcja edycji - w wersji demo')}
            >
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] h-[16px] bg-[#333333]"></div>
                <span>Edytuj</span>
              </div>
            </Button>
            <Button 
              variant="secondary"
              onClick={() => {
                if (confirm('Czy na pewno chcesz usunąć to zadanie?')) {
                  navigate('/');
                }
              }}
            >
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] h-[16px] bg-[#666666]"></div>
                <span>Usuń</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
