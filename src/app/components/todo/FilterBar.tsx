import { motion } from "motion/react";
import { FilterType } from "../../types/todo";
import { useTodos } from "../../context/TodoContext";

export function FilterBar() {
  const { filter, setFilter, activeTodosCount, completedTodosCount, todos } =
    useTodos();

  const filters: Array<{ type: FilterType; label: string; count: number }> = [
    { type: "all", label: "Wszystkie", count: todos.length },
    { type: "active", label: "Aktywne", count: activeTodosCount },
    { type: "completed", label: "Ukończone", count: completedTodosCount },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filterOption, index) => (
        <motion.button
          key={filterOption.type}
          type="button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter(filterOption.type)}
          aria-pressed={filter === filterOption.type}
          className={`min-h-[44px] rounded-[var(--radius-lg)] px-[20px] py-[10px] text-[14px] font-medium transition-all ${
            filter === filterOption.type
              ? "bg-[var(--color-primary-default)] text-white shadow-[var(--shadow-md)]"
              : "border border-[var(--color-border)] bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-muted)]"
          }`}
        >
          {filterOption.label} ({filterOption.count})
        </motion.button>
      ))}
    </div>
  );
}
