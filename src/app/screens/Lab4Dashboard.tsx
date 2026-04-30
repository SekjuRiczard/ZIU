import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Settings, Moon, Sun, Plus } from "lucide-react";
import { useTodos } from "../context/TodoContext";
import { useTheme } from "../context/ThemeContext";
import { FilterBar } from "../components/todo/FilterBar";
import { TodoList } from "../components/todo/TodoList";
import { AppLayout } from "../components/layout/AppLayout";

// Główny komponent Dashboard zgodny z Lab 4
// Używa Context API (TodoContext, ThemeContext) aby uniknąć props drilling
// Mobile-first design z responsywną nawigacją i stylami

export function Lab4Dashboard() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { activeTodosCount, todos, filter, dispatch } = useTodos();

  const handleToggle = (id: string) =>
    dispatch({ type: "TOGGLE", payload: id });
  const handleDelete = (id: string) =>
    dispatch({ type: "DELETE", payload: id });

  return (
    <AppLayout>
      {/* Header z licznikiem zadań - responsywny */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)] rounded-lg p-4 md:p-6 mb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1
              className="text-[var(--color-text-primary)] mb-2"
              style={{ fontSize: "var(--font-h1)" }}
            >
              Zarządzanie Zadaniami
            </h1>
            {/* Reaktywny licznik - odświeża się natychmiast po każdej zmianie */}
            <p
              className="text-[var(--color-text-secondary)]"
              style={{ fontSize: "var(--font-body)" }}
            >
              Masz {activeTodosCount} aktywnych{" "}
              {activeTodosCount === 1 ? "zadanie" : "zadań"} z {todos.length}{" "}
              ogółem
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
              title={isDark ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/settings")}
              className="w-10 h-10 rounded-lg bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
              title="Ustawienia"
            >
              <Settings size={20} />
            </motion.button>

            {/* User Avatar - ukryty na małych ekranach */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-[var(--color-border)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                JK
              </div>
              <div className="hidden md:block">
                <div className="text-[var(--color-text-primary)] font-medium text-sm">
                  Jan Kowalski
                </div>
                <div className="text-[var(--color-text-secondary)] text-xs">
                  jan.kowalski@firma.pl
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* FilterBar - wizualne wyróżnienie aktywnego stanu */}
      <div className="mb-8">
        <FilterBar />
      </div>

      {/* TodoList - mapuje zadania na TodoItem z responsywnym grid */}
      <TodoList
        todos={todos}
        filter={filter}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      {/* Floating Action Button - przycisk dodawania, responsywny */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/add-task")}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--color-primary-default)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--color-primary-hover)] transition-colors z-10"
        title="Dodaj nowe zadanie"
      >
        <Plus size={24} className="md:w-7 md:h-7" />
      </motion.button>

      {/* Linki do Design System - ukryte na małych ekranach */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="hidden md:flex fixed bottom-8 left-8 flex-col gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/design-system")}
          className="px-5 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all"
        >
          Design System
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/lab4-docs")}
          className="px-5 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md hover:shadow-lg transition-all"
        >
          Lab 4 - Dokumentacja
        </motion.button>
      </motion.div>
    </AppLayout>
  );
}
