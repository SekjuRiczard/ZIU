import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useTodos } from '../../context/TodoContext';
import { ButtonHiFi } from '../library/ButtonHiFi';
import { InputHiFi } from '../library/InputHiFi';

// Komponent zgodny z Lab 4 - lokalny stan, walidacja, reset po dodaniu

interface AddTodoFormProps {
  onSuccess?: () => void;
}

export function AddTodoForm({ onSuccess }: AddTodoFormProps) {
  const { dispatch } = useTodos();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('');
  
  const [errors, setErrors] = useState<{ title?: string; dueDate?: string }>({});
  const [touched, setTouched] = useState<{ title?: boolean; dueDate?: boolean }>({});

  // Walidacja pustego pola
  const validateTitle = (value: string): string => {
    if (!value.trim()) {
      return 'Tytuł zadania jest wymagany';
    }
    if (value.trim().length < 3) {
      return 'Tytuł musi mieć minimum 3 znaki';
    }
    return '';
  };

  const handleTitleBlur = () => {
    setTouched({ ...touched, title: true });
    const error = validateTitle(title);
    setErrors({ ...errors, title: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Walidacja przed dodaniem
    const titleError = validateTitle(title);
    
    if (titleError) {
      setErrors({ title: titleError });
      setTouched({ title: true, dueDate: true });
      return;
    }

    // Dodanie zadania przez reducer (akcja ADD)
    dispatch({
      type: 'ADD',
      payload: {
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate || undefined,
        priority,
        category: category.trim() || undefined,
      },
    });

    // Reset formularza po dodaniu
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setCategory('');
    setErrors({});
    setTouched({});

    // Callback sukcesu (opcjonalny)
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <motion.form
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]"
    >
      <div className="space-y-[24px]">
        {/* Tytuł - pole wymagane */}
        <InputHiFi
          label="Tytuł zadania *"
          placeholder="np. Przygotować prezentację projektu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleTitleBlur}
          error={touched.title ? errors.title : ''}
          required
        />

        {/* Opis */}
        <div>
          <label className="block mb-[8px] text-[var(--color-text-primary)]">
            Opis zadania
          </label>
          <textarea
            className="w-full px-[16px] py-[12px] min-h-[120px] rounded-[var(--radius-lg)] bg-[var(--color-input-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-border-focus)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] transition-all resize-none"
            placeholder="Szczegółowy opis zadania, kontekst i wymagania..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Data i kategoria */}
        <div className="grid grid-cols-2 gap-[24px]">
          <InputHiFi
            label="Termin wykonania"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <InputHiFi
            label="Kategoria"
            placeholder="np. Frontend, Backend"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        {/* Priorytet */}
        <div>
          <label className="block mb-[16px] text-[var(--color-text-primary)]">
            Priorytet *
          </label>
          <div className="flex gap-[16px]">
            {[
              { value: 'low' as const, label: 'Niski' },
              { value: 'medium' as const, label: 'Średni' },
              { value: 'high' as const, label: 'Wysoki' },
            ].map((priorityOption) => (
              <motion.label
                key={priorityOption.value}
                whileHover={{ scale: 1.02 }}
                className="flex-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="priority"
                  value={priorityOption.value}
                  checked={priority === priorityOption.value}
                  onChange={(e) =>
                    setPriority(e.target.value as 'low' | 'medium' | 'high')
                  }
                  className="peer hidden"
                />
                <div
                  className={`px-[20px] py-[12px] rounded-[var(--radius-lg)] border-2 transition-all text-center ${
                    priority === priorityOption.value
                      ? 'border-[var(--color-primary-default)] bg-[var(--color-primary-default)] text-white'
                      : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary-default)]'
                  }`}
                >
                  {priorityOption.label}
                </div>
              </motion.label>
            ))}
          </div>
        </div>
      </div>

      {/* Przycisk dodawania */}
      <div className="flex justify-end mt-[40px] pt-[32px] border-t border-[var(--color-border)]">
        <ButtonHiFi type="submit" variant="primary" size="medium" icon={Plus}>
          Dodaj zadanie
        </ButtonHiFi>
      </div>
    </motion.form>
  );
}
