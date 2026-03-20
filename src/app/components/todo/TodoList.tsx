import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { TodoItem } from './TodoItem';
import { useTodos } from '../../context/TodoContext';

// Komponent zgodny z Lab 4 - mapuje listę zadań na komponenty TodoItem

export function TodoList() {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-[80px]"
      >
        <div className="w-[120px] h-[120px] mx-auto mb-[24px] rounded-full bg-[var(--color-muted)] flex items-center justify-center">
          <CheckCircle2 size={48} className="text-[var(--color-text-secondary)]" />
        </div>
        <h3 className="text-[var(--color-text-primary)] mb-[8px]">
          Brak zadań
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Dodaj nowe zadanie, aby rozpocząć
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-[16px]">
      <AnimatePresence mode="popLayout">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </div>
  );
}
