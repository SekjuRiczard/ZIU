import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/library/Button';

export function FilterSort() {
  const navigate = useNavigate();
  
  const [filters, setFilters] = useState({
    showActive: true,
    showCompleted: true,
    showOverdue: true,
    priorityLow: true,
    priorityMedium: true,
    priorityHigh: true
  });

  const [sortBy, setSortBy] = useState('dueDate');

  const handleReset = () => {
    setFilters({
      showActive: true,
      showCompleted: true,
      showOverdue: true,
      priorityLow: true,
      priorityMedium: true,
      priorityHigh: true
    });
    setSortBy('dueDate');
  };

  const handleApply = () => {
    console.log('Zastosowano filtry:', filters, 'Sortowanie:', sortBy);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 className="text-[#333333]">Filtrowanie i Sortowanie</h1>
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
          <span className="text-[#333333]">Filtry</span>
        </div>

        <div className="max-w-[800px]">
          <div className="bg-white border border-[#E0E0E0] p-[40px]">
            {/* Status Filters */}
            <div className="mb-[40px] pb-[32px] border-b border-[#E0E0E0]">
              <h3 className="mb-[24px] text-[#333333]">Status zadania</h3>
              <div className="space-y-[16px]">
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.showActive}
                    onChange={(e) => setFilters({ ...filters, showActive: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Aktywne</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.showCompleted}
                    onChange={(e) => setFilters({ ...filters, showCompleted: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Ukończone</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.showOverdue}
                    onChange={(e) => setFilters({ ...filters, showOverdue: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Przeterminowane</span>
                </label>
              </div>
            </div>

            {/* Priority Filters */}
            <div className="mb-[40px] pb-[32px] border-b border-[#E0E0E0]">
              <h3 className="mb-[24px] text-[#333333]">Priorytet</h3>
              <div className="space-y-[16px]">
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.priorityLow}
                    onChange={(e) => setFilters({ ...filters, priorityLow: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Niski</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.priorityMedium}
                    onChange={(e) => setFilters({ ...filters, priorityMedium: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Średni</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={filters.priorityHigh}
                    onChange={(e) => setFilters({ ...filters, priorityHigh: e.target.checked })}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Wysoki</span>
                </label>
              </div>
            </div>

            {/* Sorting */}
            <div className="mb-[40px]">
              <h3 className="mb-[24px] text-[#333333]">Sortuj według</h3>
              <div className="space-y-[16px]">
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="radio"
                    name="sortBy"
                    value="dueDate"
                    checked={sortBy === 'dueDate'}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Data wykonania</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="radio"
                    name="sortBy"
                    value="priority"
                    checked={sortBy === 'priority'}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Priorytet</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="radio"
                    name="sortBy"
                    value="title"
                    checked={sortBy === 'title'}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Nazwa (A-Z)</span>
                </label>
                <label className="flex items-center gap-[12px] cursor-pointer">
                  <input 
                    type="radio"
                    name="sortBy"
                    value="created"
                    checked={sortBy === 'created'}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[#666666]">Data utworzenia</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] justify-end pt-[24px] border-t border-[#E0E0E0]">
              <Button 
                variant="secondary"
                onClick={handleReset}
              >
                Resetuj
              </Button>
              <Button 
                variant="primary"
                onClick={handleApply}
              >
                Zastosuj
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
