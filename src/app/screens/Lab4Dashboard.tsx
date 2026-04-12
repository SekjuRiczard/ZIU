import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Settings, Moon, Sun, Plus } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import { useTheme } from '../context/ThemeContext';
import { FilterBar } from '../components/todo/FilterBar';
import { TodoList } from '../components/todo/TodoList';

// Główny komponent Dashboard zgodny z Lab 4
// Używa Context API (TodoContext, ThemeContext) aby uniknąć props drilling

export function Lab4Dashboard() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { activeTodosCount, todos, filter, dispatch } = useTodos();

  const handleToggle = (id: string) => dispatch({ type: 'TOGGLE', payload: id });
  const handleDelete = (id: string) => dispatch({ type: 'DELETE', payload: id });

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header z licznikiem zadań */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
      >
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[var(--color-text-primary)] mb-[4px]">
                Zarządzanie Zadaniami
              </h1>
              {/* Reaktywny licznik - odświeża się natychmiast po każdej zmianie */}
              <p className="text-[var(--color-text-secondary)] body-2">
                Masz {activeTodosCount} aktywnych{' '}
                {activeTodosCount === 1 ? 'zadanie' : 'zadań'} z {todos.length} ogółem
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
                title={isDark ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Settings */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/settings')}
                className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
                title="Ustawienia"
              >
                <Settings size={20} />
              </motion.button>

              {/* User Avatar */}
              <div className="flex items-center gap-[12px] pl-[16px] border-l border-[var(--color-border)]">
                <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  JK
                </div>
                <div>
                  <div className="text-[var(--color-text-primary)] font-medium text-[14px]">
                    Jan Kowalski
                  </div>
                  <div className="text-[var(--color-text-secondary)] text-[12px]">
                    jan.kowalski@firma.pl
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* FilterBar - wizualne wyróżnienie aktywnego stanu */}
        <div className="mb-[32px]">
          <FilterBar />
        </div>

        {/* TodoList - mapuje zadania na TodoItem */}
        <TodoList
          todos={todos}
          filter={filter}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        {/* Floating Action Button - przycisk dodawania */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/add-task')}
          className="fixed bottom-[40px] right-[40px] w-[64px] h-[64px] rounded-full bg-[var(--color-primary-default)] text-white flex items-center justify-center shadow-[var(--shadow-lg)] hover:bg-[var(--color-primary-hover)] transition-colors"
          title="Dodaj nowe zadanie"
        >
          <Plus size={28} />
        </motion.button>

        {/* Link do Design System */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="fixed bottom-[40px] left-[40px] flex flex-col gap-[12px]"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/design-system')}
            className="px-[20px] py-[10px] rounded-[var(--radius-lg)] font-medium text-[14px] bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all"
          >
            Design System
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/lab4-docs')}
            className="px-[20px] py-[10px] rounded-[var(--radius-lg)] font-medium text-[14px] bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all"
          >
            Lab 4 - Dokumentacja
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}