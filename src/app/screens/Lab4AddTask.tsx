import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { AddTodoForm } from '../components/todo/AddTodoForm';

// Ekran dodawania zadania zgodny z Lab 4

export function Lab4AddTask() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Po pomyślnym dodaniu zadania, przejdź do Dashboard
    navigate('/');
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
              <h1 className="text-[var(--color-text-primary)]">
                Dodaj Nowe Zadanie
              </h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                Wypełnij formularz, aby utworzyć zadanie
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="max-w-[800px]">
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
            <span className="text-[var(--color-text-primary)] font-medium">
              Dodaj zadanie
            </span>
          </motion.div>

          {/* Formularz dodawania zadania */}
          <AddTodoForm onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
