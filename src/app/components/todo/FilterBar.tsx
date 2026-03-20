import React from 'react';
import { motion } from 'motion/react';
import { FilterType } from '../../types/todo';
import { useTodos } from '../../context/TodoContext';

// Komponent zgodny z Lab 4 - 3 przyciski filtrów z wizualnym wyróżnieniem aktywnego

export function FilterBar() {
  const { filter, setFilter, activeTodosCount, completedTodosCount, todos } = useTodos();

  const filters: Array<{ type: FilterType; label: string; count: number }> = [
    { type: 'all', label: 'Wszystkie', count: todos.length },
    { type: 'active', label: 'Aktywne', count: activeTodosCount },
    { type: 'completed', label: 'Ukończone', count: completedTodosCount },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex gap-[12px] flex-wrap"
    >
      {filters.map((filterOption, index) => (
        <motion.button
          key={filterOption.type}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter(filterOption.type)}
          className={`px-[20px] py-[10px] rounded-[var(--radius-lg)] font-medium text-[14px] transition-all ${
            filter === filterOption.type
              ? 'bg-[var(--color-primary-default)] text-white shadow-[var(--shadow-md)]'
              : 'bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-muted)]'
          }`}
        >
          {filterOption.label} ({filterOption.count})
        </motion.button>
      ))}
    </motion.div>
  );
}
