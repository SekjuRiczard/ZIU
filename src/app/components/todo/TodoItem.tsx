import React, { useState } from "react";
import { motion } from "motion/react";
import { Trash2, Edit2, Save, X, Calendar } from "lucide-react";
import { Todo } from "../../types/todo";
import { useTodos } from "../../context/TodoContext";
import { ButtonHiFi } from "../library/ButtonHiFi";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  const handleDelete = () => {
    if (confirm("Czy na pewno chcesz usunąć to zadanie?")) {
      dispatch({ type: "DELETE", payload: todo.id });
    }
  };

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      dispatch({
        type: "EDIT",
        payload: { id: todo.id, updates: { title: editTitle.trim() } },
      });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  const priorityColors = {
    low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  const priorityLabels = {
    low: "Niski",
    medium: "Średni",
    high: "Wysoki",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-card)] p-4 shadow-[var(--shadow-md)] sm:p-5 lg:p-6"
    >
      <div className="grid grid-cols-[44px_minmax(0,1fr)] gap-4">
        <motion.input
          whileTap={{ scale: 0.9 }}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          aria-label={`Oznacz zadanie "${todo.title}" jako ${
            todo.completed ? "nieukończone" : "ukończone"
          }`}
          className="mt-1 min-h-[44px] min-w-[44px] cursor-pointer rounded-[6px] border-2 border-[var(--color-border)] accent-[var(--color-primary-default)]"
        />

        <div className="min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                aria-label={`Edytuj tytuł zadania ${todo.title}`}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="min-h-[44px] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-input-background)] px-3 py-2 text-[var(--color-text-primary)] focus:border-[var(--color-border-focus)] focus:outline-none"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveEdit();
                  if (e.key === "Escape") handleCancelEdit();
                }}
              />

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <ButtonHiFi
                  variant="primary"
                  size="small"
                  icon={Save}
                  onClick={handleSaveEdit}
                >
                  Zapisz
                </ButtonHiFi>

                <ButtonHiFi
                  variant="secondary"
                  size="small"
                  icon={X}
                  onClick={handleCancelEdit}
                >
                  Anuluj
                </ButtonHiFi>
              </div>
            </div>
          ) : (
            <div className="min-w-0 space-y-3">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3
                  className={`min-w-0 break-words ${
                    todo.completed
                      ? "line-through text-[var(--color-text-secondary)]"
                      : "text-[var(--color-text-primary)]"
                  }`}
                >
                  {todo.title}
                </h3>

                {todo.priority && (
                  <span
                    className={`w-fit shrink-0 rounded-[6px] px-3 py-1 text-[12px] font-medium ${
                      priorityColors[todo.priority]
                    }`}
                  >
                    {priorityLabels[todo.priority]}
                  </span>
                )}
              </div>

              {todo.description && (
                <p className="body-2 break-words text-[var(--color-text-secondary)]">
                  {todo.description}
                </p>
              )}

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 flex-wrap items-center gap-2 text-[14px] text-[var(--color-text-secondary)] sm:gap-4">
                  {todo.dueDate && (
                    <div className="flex min-h-[32px] min-w-0 items-center gap-2">
                      <Calendar size={16} aria-hidden="true" />
                      <span className="break-words">{todo.dueDate}</span>
                    </div>
                  )}

                  {todo.category && (
                    <span className="max-w-full break-words rounded-[4px] bg-[var(--color-muted)] px-2 py-1 text-[12px]">
                      {todo.category}
                    </span>
                  )}
                </div>

                <div className="flex shrink-0 items-center gap-2 self-start lg:self-center">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsEditing(true)}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[var(--radius-lg)] transition-colors hover:bg-[var(--color-muted)]"
                    aria-label={`Edytuj zadanie ${todo.title}`}
                    title="Edytuj"
                  >
                    <Edit2
                      size={16}
                      className="text-[var(--color-text-secondary)]"
                      aria-hidden="true"
                    />
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDelete}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[var(--radius-lg)] transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                    aria-label={`Usuń zadanie ${todo.title}`}
                    title="Usuń"
                  >
                    <Trash2
                      size={16}
                      className="text-[var(--color-semantic-error)]"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
