import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Edit, Trash2, Calendar, User, FolderOpen, Clock } from 'lucide-react';
import { ButtonHiFi } from '../components/library/ButtonHiFi';
import { realTasks } from '../data/realTasks';

export function TaskDetailsHiFi() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const task = realTasks.find(t => t.id === id);

  if (!task) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-background)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-[120px] h-[120px] mx-auto mb-[24px] rounded-full bg-[var(--color-muted)] flex items-center justify-center">
            <FolderOpen size={48} className="text-[var(--color-text-secondary)]" />
          </div>
          <h3 className="text-[var(--color-text-primary)] mb-[8px]">Zadanie nie znalezione</h3>
          <ButtonHiFi variant="primary" onClick={() => navigate('/')}>
            Wróć do Dashboard
          </ButtonHiFi>
        </div>
      </div>
    );
  }

  const priorityColors = {
    low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  };

  const priorityLabels = {
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki'
  };

  const statusColors = {
    active: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    overdue: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  };

  const statusLabels = {
    active: 'Aktywne',
    completed: 'Ukończone',
    overdue: 'Przeterminowane'
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)]"
      >
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center gap-[16px]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <div>
              <h1 className="text-[var(--color-text-primary)]">Szczegóły Zadania</h1>
              <p className="text-[var(--color-text-secondary)] body-2">Pełna informacja o zadaniu</p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-[32px] flex items-center gap-[8px] text-[14px]"
        >
          <span 
            className="text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-primary-default)] transition-colors"
            onClick={() => navigate('/')}
          >
            Dashboard
          </span>
          <span className="text-[var(--color-text-secondary)]">/</span>
          <span className="text-[var(--color-text-primary)] font-medium">Szczegóły</span>
        </motion.div>

        <div className="max-w-[900px]">
          {/* Task Image */}
          {task.hasImage && task.imageUrl && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-[32px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]"
            >
              <img 
                src={task.imageUrl} 
                alt={task.title}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          )}

          {/* Task Content */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px] mb-[24px]"
          >
            {/* Title and Status */}
            <div className="mb-[32px] pb-[24px] border-b border-[var(--color-border)]">
              <div className="flex items-start gap-[16px] mb-[16px]">
                <h2 className={`flex-1 ${task.status === 'completed' ? 'line-through text-[var(--color-text-secondary)]' : 'text-[var(--color-text-primary)]'}`}>
                  {task.title}
                </h2>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className={`px-[16px] py-[6px] rounded-[var(--radius-lg)] text-[14px] font-medium ${statusColors[task.status]}`}>
                  {statusLabels[task.status]}
                </span>
                <span className={`px-[16px] py-[6px] rounded-[var(--radius-lg)] text-[14px] font-medium ${priorityColors[task.priority]}`}>
                  Priorytet: {priorityLabels[task.priority]}
                </span>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="mb-[32px] grid grid-cols-2 gap-[24px]">
              <div className="flex items-start gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-[var(--color-text-secondary)]" />
                </div>
                <div>
                  <div className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">Termin wykonania</div>
                  <div className="text-[var(--color-text-primary)] font-medium">{task.dueDate}</div>
                </div>
              </div>

              <div className="flex items-start gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[var(--color-text-secondary)]" />
                </div>
                <div>
                  <div className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">Data utworzenia</div>
                  <div className="text-[var(--color-text-primary)] font-medium">15 marca 2026</div>
                </div>
              </div>

              {task.category && (
                <div className="flex items-start gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0">
                    <FolderOpen size={20} className="text-[var(--color-text-secondary)]" />
                  </div>
                  <div>
                    <div className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">Kategoria</div>
                    <div className="text-[var(--color-text-primary)] font-medium">{task.category}</div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  JK
                </div>
                <div>
                  <div className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">Przypisane do</div>
                  <div className="text-[var(--color-text-primary)] font-medium">Jan Kowalski</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-[32px]">
              <h4 className="text-[var(--color-text-primary)] mb-[12px]">Opis zadania</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Additional Notes */}
            <div className="pt-[24px] border-t border-[var(--color-border)]">
              <h4 className="text-[var(--color-text-primary)] mb-[12px]">Notatki</h4>
              <div className="bg-[var(--color-muted)] rounded-[var(--radius-lg)] p-[20px]">
                <p className="text-[var(--color-text-secondary)] italic">
                  Pamiętaj o koordynacji z zespołem przed rozpoczęciem implementacji. Sprawdź dostępność zasobów i zależności od innych zadań.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-[16px]"
          >
            <ButtonHiFi 
              variant="secondary"
              icon={ArrowLeft}
              onClick={() => navigate('/')}
            >
              Powrót
            </ButtonHiFi>
            <ButtonHiFi 
              variant="primary"
              icon={Edit}
              onClick={() => alert('Funkcja edycji - w wersji demo')}
            >
              Edytuj
            </ButtonHiFi>
            <ButtonHiFi 
              variant="danger"
              icon={Trash2}
              onClick={() => {
                if (confirm('Czy na pewno chcesz usunąć to zadanie?')) {
                  navigate('/');
                }
              }}
            >
              Usuń
            </ButtonHiFi>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
