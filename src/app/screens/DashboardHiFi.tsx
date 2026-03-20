import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, Plus, Settings, Moon, Sun } from 'lucide-react';
import { TaskCardHiFi } from '../components/library/TaskCardHiFi';
import { InputHiFi } from '../components/library/InputHiFi';
import { ButtonHiFi } from '../components/library/ButtonHiFi';
import { realTasks } from '../data/realTasks';
import { useTheme } from '../context/ThemeContext';

export function DashboardHiFi() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed' | 'overdue'>('all');

  const filteredTasks = realTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'active') return matchesSearch && task.status === 'active';
    if (activeFilter === 'completed') return matchesSearch && task.status === 'completed';
    if (activeFilter === 'overdue') return matchesSearch && task.status === 'overdue';
    return matchesSearch;
  });

  const filterCounts = {
    all: realTasks.length,
    active: realTasks.filter(t => t.status === 'active').length,
    completed: realTasks.filter(t => t.status === 'completed').length,
    overdue: realTasks.filter(t => t.status === 'overdue').length
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
      >
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[var(--color-text-primary)] mb-[4px]">Zarządzanie Zadaniami</h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                Witaj, Jan! Masz {filterCounts.active} aktywnych zadań
              </p>
            </div>
            
            <div className="flex items-center gap-[16px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/settings')}
                className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
              >
                <Settings size={20} />
              </motion.button>
              
              <div className="flex items-center gap-[12px] pl-[16px] border-l border-[var(--color-border)]">
                <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  JK
                </div>
                <div>
                  <div className="text-[var(--color-text-primary)] font-medium text-[14px]">Jan Kowalski</div>
                  <div className="text-[var(--color-text-secondary)] text-[12px]">jan.kowalski@firma.pl</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Search and Filters */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-[32px] flex gap-[16px]"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" size={20} />
            <input
              type="text"
              placeholder="Szukaj zadań po tytule lub opisie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[48px] pl-[48px] pr-[16px] rounded-[var(--radius-lg)] bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-border-focus)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] transition-all"
            />
          </div>
          <ButtonHiFi 
            variant="secondary"
            size="medium"
            icon={SlidersHorizontal}
            onClick={() => navigate('/filter')}
          >
            Filtry
          </ButtonHiFi>
        </motion.div>

        {/* Filter Chips */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-[32px] flex gap-[12px] flex-wrap items-center"
        >
          {(['all', 'active', 'completed', 'overdue'] as const).map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-[20px] py-[10px] rounded-[var(--radius-lg)] font-medium text-[14px] transition-all ${
                activeFilter === filter
                  ? 'bg-[var(--color-primary-default)] text-white shadow-[var(--shadow-md)]'
                  : 'bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-muted)]'
              }`}
            >
              {filter === 'all' ? 'Wszystkie' :
               filter === 'active' ? 'Aktywne' :
               filter === 'completed' ? 'Ukończone' :
               'Przeterminowane'} ({filterCounts[filter]})
            </motion.button>
          ))}
          
          <div className="ml-auto">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/design-system')}
              className="px-[20px] py-[10px] rounded-[var(--radius-lg)] font-medium text-[14px] bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all"
            >
              Design System
            </motion.button>
          </div>
        </motion.div>

        {/* Task Grid */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[80px]"
        >
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <TaskCardHiFi 
                task={task}
                onClick={() => navigate(`/task/${task.id}`)}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredTasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-[80px]"
          >
            <div className="w-[120px] h-[120px] mx-auto mb-[24px] rounded-full bg-[var(--color-muted)] flex items-center justify-center">
              <Search size={48} className="text-[var(--color-text-secondary)]" />
            </div>
            <h3 className="text-[var(--color-text-primary)] mb-[8px]">Nie znaleziono zadań</h3>
            <p className="text-[var(--color-text-secondary)]">Spróbuj zmienić kryteria wyszukiwania</p>
          </motion.div>
        )}

        {/* Floating Action Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/add-task')}
          className="fixed bottom-[40px] right-[40px] w-[64px] h-[64px] rounded-full bg-[var(--color-primary-default)] text-white flex items-center justify-center shadow-[var(--shadow-lg)] hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus size={28} />
        </motion.button>
      </div>
    </div>
  );
}