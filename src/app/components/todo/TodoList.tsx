import React, { useMemo } from "react";
import { motion } from "motion/react";
import { TodoItem } from "./TodoItem";
import { Todo, FilterType } from "../../types/todo";

interface TodoListProps {
  todos: Todo[];
  filter?: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({
  todos,
  filter = "all",
  onToggle,
  onDelete,
}: TodoListProps) {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "all":
      default:
        return todos;
    }
  }, [todos, filter]);

  if (filteredTodos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <p
          className="text-[var(--color-text-secondary)]"
          style={{ fontSize: "var(--font-body)" }}
        >
          Brak zadań. Dodaj pierwsze!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="task-grid-responsive"
    >
      {filteredTodos.map((todo, index) => (
        <motion.div
          key={todo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <TodoItem todo={todo} />
        </motion.div>
      ))}
    </motion.div>
  );
}
