import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Edit2, Save, X, Calendar } from 'lucide-react';
import { Todo } from '../../types/todo';
import { useTodos } from '../../context/TodoContext';
import { ButtonHiFi } from '../library/ButtonHiFi';

// Komponent zgodny z Lab 4 - checkbox, przekreślony tekst, usuwanie, edycja

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // TOGGLE - zmiana stanu completed
  const handleToggle = () => {
    dispatch({ type: 'TOGGLE', payload: todo.id });
  };

  // DELETE - usunięcie zadania
  const handleDelete = () => {
    if (confirm('Czy na pewno chcesz usunąć to zadanie?')) {
      dispatch({ type: 'DELETE', payload: todo.id });
    }
  };

  // EDIT - edycja tytułu zadania
  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      dispatch({
        type: 'EDIT',
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
    low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  const priorityLabels = {
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[24px] border border-[var(--color-border)]"
    >
      <div className="flex items-start gap-[16px]">
        {/* Checkbox */}
        <motion.input
          whileTap={{ scale: 0.9 }}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="w-[24px] h-[24px] mt-[2px] cursor-pointer rounded-[6px] border-2 border-[var(--color-border)] accent-[var(--color-primary-default)]"
        />

        {/* Treść zadania */}
        <div className="flex-1">
          {isEditing ? (
            // Tryb edycji
            <div className="space-y-[12px]">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-[12px] py-[8px] rounded-[var(--radius-lg)] bg-[var(--color-input-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-border-focus)] focus:outline-none"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveEdit();
                  if (e.key === 'Escape') handleCancelEdit();
                }}
              />
              <div className="flex gap-[8px]">
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
            // Tryb wyświetlania
            <>
              <div className="flex items-start justify-between mb-[8px]">
                <h4
                  className={`flex-1 ${
                    todo.completed
                      ? 'line-through text-[var(--color-text-secondary)]'
                      : 'text-[var(--color-text-primary)]'
                  }`}
                >
                  {todo.title}
                </h4>
                {todo.priority && (
                  <span
                    className={`px-[12px] py-[4px] rounded-[6px] text-[12px] font-medium ml-[12px] ${
                      priorityColors[todo.priority]
                    }`}
                  >
                    {priorityLabels[todo.priority]}
                  </span>
                )}
              </div>

              {todo.description && (
                <p className="text-[var(--color-text-secondary)] body-2 mb-[12px]">
                  {todo.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px] text-[14px] text-[var(--color-text-secondary)]">
                  {todo.dueDate && (
                    <div className="flex items-center gap-[6px]">
                      <Calendar size={16} />
                      <span>{todo.dueDate}</span>
                    </div>
                  )}
                  {todo.category && (
                    <span className="px-[8px] py-[2px] bg-[var(--color-muted)] rounded-[4px] text-[12px]">
                      {todo.category}
                    </span>
                  )}
                </div>

                {/* Przyciski akcji */}
                <div className="flex gap-[8px]">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsEditing(true)}
                    className="p-[8px] rounded-[var(--radius-lg)] hover:bg-[var(--color-muted)] transition-colors"
                    title="Edytuj"
                  >
                    <Edit2 size={16} className="text-[var(--color-text-secondary)]" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDelete}
                    className="p-[8px] rounded-[var(--radius-lg)] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Usuń"
                  >
                    <Trash2
                      size={16}
                      className="text-[var(--color-semantic-error)]"
                    />
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
