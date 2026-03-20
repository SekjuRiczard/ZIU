import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useTodos } from '../context/TodoContext';

// Dokumentacja implementacji Lab 4

export function Lab4Docs() {
  const navigate = useNavigate();
  const { todos, activeTodosCount, completedTodosCount } = useTodos();

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)] sticky top-0 z-50"
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
                Lab 4 - Dokumentacja Implementacji
              </h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                React 18 + TypeScript 5 (strict mode) + Vite
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="space-y-[48px]">
          {/* Status zadań */}
          <section className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">
              Status Aplikacji
            </h2>
            <div className="grid grid-cols-3 gap-[24px]">
              <div className="p-[24px] bg-[var(--color-muted)] rounded-[var(--radius-lg)]">
                <div className="text-[var(--color-text-secondary)] mb-[8px]">
                  Wszystkie zadania
                </div>
                <div className="text-[32px] font-bold text-[var(--color-text-primary)]">
                  {todos.length}
                </div>
              </div>
              <div className="p-[24px] bg-blue-50 dark:bg-blue-900/20 rounded-[var(--radius-lg)]">
                <div className="text-blue-700 dark:text-blue-400 mb-[8px]">
                  Aktywne
                </div>
                <div className="text-[32px] font-bold text-blue-700 dark:text-blue-400">
                  {activeTodosCount}
                </div>
              </div>
              <div className="p-[24px] bg-green-50 dark:bg-green-900/20 rounded-[var(--radius-lg)]">
                <div className="text-green-700 dark:text-green-400 mb-[8px]">
                  Ukończone
                </div>
                <div className="text-[32px] font-bold text-green-700 dark:text-green-400">
                  {completedTodosCount}
                </div>
              </div>
            </div>
          </section>

          {/* Checklist Lab 4 */}
          <section className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">
              ✅ Checklist Lab 4
            </h2>
            <div className="space-y-[16px]">
              {[
                'TypeScript w trybie strict - wszystkie propsy i stany typowane',
                'Interfejs Todo: id, title, completed, createdAt',
                'Typ FilterType: "all" | "active" | "completed"',
                'AddTodoForm - lokalny useState, walidacja, reset po dodaniu',
                'TodoItem - checkbox, edycja, usuwanie, przekreślony tekst',
                'TodoList - mapowanie zadań na komponenty',
                'FilterBar - wizualne wyróżnienie aktywnego filtru',
                'Pełny CRUD: ADD, TOGGLE, DELETE, EDIT',
                'useReducer (todoReducer) - zamiast useState dla listy zadań',
                'Context API (TodoContext) - unikanie props drilling',
                'Reaktywny licznik - natychmiastowe odświeżanie',
                'Filtrowanie z useMemo dla optymalizacji',
                'Design identyczny z prototypem Hi-Fi',
                'Animacje i transitions (Motion)',
                'Dark Mode z ThemeContext',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-[12px]"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[var(--color-semantic-success)] flex-shrink-0 mt-[2px]"
                  />
                  <span className="text-[var(--color-text-primary)]">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Architektura */}
          <section className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">
              Architektura Komponentów
            </h2>
            <div className="space-y-[16px] font-mono text-[14px]">
              <div className="text-[var(--color-text-primary)]">
                src/app/
              </div>
              <div className="ml-[24px] space-y-[8px]">
                <div className="text-[var(--color-text-secondary)]">
                  ├── types/
                </div>
                <div className="ml-[24px] text-blue-600 dark:text-blue-400">
                  │   └── todo.ts (Interface Todo, FilterType, TodoAction)
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  ├── reducers/
                </div>
                <div className="ml-[24px] text-blue-600 dark:text-blue-400">
                  │   └── todoReducer.ts (ADD, TOGGLE, DELETE, EDIT)
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  ├── context/
                </div>
                <div className="ml-[24px] text-blue-600 dark:text-blue-400">
                  │   ├── TodoContext.tsx (useReducer + useMemo)
                </div>
                <div className="ml-[24px] text-blue-600 dark:text-blue-400">
                  │   └── ThemeContext.tsx (Dark Mode)
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  ├── components/todo/
                </div>
                <div className="ml-[24px] text-green-600 dark:text-green-400">
                  │   ├── AddTodoForm.tsx (useState, walidacja)
                </div>
                <div className="ml-[24px] text-green-600 dark:text-green-400">
                  │   ├── TodoItem.tsx (checkbox, edycja)
                </div>
                <div className="ml-[24px] text-green-600 dark:text-green-400">
                  │   ├── TodoList.tsx (mapowanie)
                </div>
                <div className="ml-[24px] text-green-600 dark:text-green-400">
                  │   └── FilterBar.tsx (filtry)
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  └── screens/
                </div>
                <div className="ml-[24px] text-purple-600 dark:text-purple-400">
                      ├── Lab4Dashboard.tsx
                </div>
                <div className="ml-[24px] text-purple-600 dark:text-purple-400">
                      └── Lab4AddTask.tsx
                </div>
              </div>
            </div>
          </section>

          {/* CRUD Operations */}
          <section className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">
              Operacje CRUD
            </h2>
            <div className="space-y-[16px]">
              <div className="p-[20px] bg-[var(--color-muted)] rounded-[var(--radius-lg)]">
                <h4 className="text-[var(--color-text-primary)] mb-[8px]">
                  CREATE (ADD)
                </h4>
                <code className="text-[var(--color-text-secondary)] text-[14px]">
                  dispatch({'{'} type: 'ADD', payload: {'{'} title, description, ... {'}'} {'}'})
                </code>
              </div>
              <div className="p-[20px] bg-[var(--color-muted)] rounded-[var(--radius-lg)]">
                <h4 className="text-[var(--color-text-primary)] mb-[8px]">
                  READ (Filtrowanie)
                </h4>
                <code className="text-[var(--color-text-secondary)] text-[14px]">
                  useMemo(() =&gt; todos.filter(...), [todos, filter])
                </code>
              </div>
              <div className="p-[20px] bg-[var(--color-muted)] rounded-[var(--radius-lg)]">
                <h4 className="text-[var(--color-text-primary)] mb-[8px]">
                  UPDATE (TOGGLE, EDIT)
                </h4>
                <code className="text-[var(--color-text-secondary)] text-[14px]">
                  dispatch({'{'} type: 'TOGGLE', payload: id {'}'})<br />
                  dispatch({'{'} type: 'EDIT', payload: {'{'} id, updates {'}'} {'}'})
                </code>
              </div>
              <div className="p-[20px] bg-[var(--color-muted)] rounded-[var(--radius-lg)]">
                <h4 className="text-[var(--color-text-primary)] mb-[8px]">
                  DELETE
                </h4>
                <code className="text-[var(--color-text-secondary)] text-[14px]">
                  dispatch({'{'} type: 'DELETE', payload: id {'}'})
                </code>
              </div>
            </div>
          </section>

          {/* Technologie */}
          <section className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px]">
            <h2 className="text-[var(--color-text-primary)] mb-[24px]">
              Stack Technologiczny
            </h2>
            <div className="grid grid-cols-2 gap-[24px]">
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[12px]">
                  Framework & Language
                </h4>
                <ul className="space-y-[8px] text-[var(--color-text-secondary)]">
                  <li>• React 18 (Funkcyjne komponenty)</li>
                  <li>• TypeScript 5 (Strict mode)</li>
                  <li>• Vite (Build tool)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[12px]">
                  State Management
                </h4>
                <ul className="space-y-[8px] text-[var(--color-text-secondary)]">
                  <li>• useReducer (todoReducer)</li>
                  <li>• Context API (TodoContext)</li>
                  <li>• useMemo (optymalizacja)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[12px]">
                  Styling & UI
                </h4>
                <ul className="space-y-[8px] text-[var(--color-text-secondary)]">
                  <li>• Tailwind CSS v4</li>
                  <li>• CSS Variables (Light/Dark)</li>
                  <li>• Font: Inter</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[var(--color-text-primary)] mb-[12px]">
                  Animations
                </h4>
                <ul className="space-y-[8px] text-[var(--color-text-secondary)]">
                  <li>• Motion (Framer Motion)</li>
                  <li>• AnimatePresence</li>
                  <li>• Transitions & Gestures</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
