import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Moon, Plus, Settings, Sun } from "lucide-react";
import { FilterBar } from "../components/todo/FilterBar";
import { TodoList } from "../components/todo/TodoList";
import { useTheme } from "../context/ThemeContext";
import { useTodos } from "../context/TodoContext";
import StatsGrid from "../../components/dashboard/StatsGrid";

export function Lab4Dashboard() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { activeTodosCount, todos, filter, dispatch } = useTodos();

  const handleToggle = (id: string) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--color-surface-background)] px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <header className="mb-8 border-b border-[var(--color-border)] pb-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[var(--color-text-primary)]">
                  Zarządzanie Zadaniami
                </h1>

                <p className="mt-2 text-[var(--color-text-secondary)]">
                  Masz {activeTodosCount} aktywnych{" "}
                  {activeTodosCount === 1 ? "zadanie" : "zadań"} z{" "}
                  {todos.length} ogółem
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-[var(--color-surface-card)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-muted)]"
                  aria-label={isDark ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
                  title={isDark ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
                >
                  {isDark ? (
                    <Sun size={20} aria-hidden="true" />
                  ) : (
                    <Moon size={20} aria-hidden="true" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/settings")}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-[var(--color-surface-card)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-muted)]"
                  aria-label="Przejdź do ustawień"
                  title="Ustawienia"
                >
                  <Settings size={20} aria-hidden="true" />
                </button>

                <div className="hidden h-10 w-px bg-[var(--color-border)] md:block" />

                <div className="hidden items-center gap-3 md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-default)] font-semibold text-white">
                    JK
                  </div>

                  <div>
                    <p className="font-semibold text-[var(--color-text-primary)]">
                      Jan Kowalski
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      jan.kowalski@firma.pl
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-8">
            <StatsGrid />
          </section>

          <section className="mb-8" aria-label="Filtrowanie zadań">
            <FilterBar />
          </section>

          <section aria-labelledby="todo-list-heading">
            <h2 id="todo-list-heading" className="sr-only">
              Lista zadań
            </h2>

            <TodoList
              todos={todos}
              filter={filter}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          </section>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/add-task")}
        className="fixed bottom-4 right-4 z-10 flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[var(--color-primary-default)] text-white shadow-lg transition-colors hover:bg-[var(--color-primary-hover)] md:bottom-8 md:right-8 md:min-h-16 md:min-w-16"
        aria-label="Dodaj nowe zadanie"
        title="Dodaj nowe zadanie"
      >
        <Plus size={24} className="md:h-7 md:w-7" aria-hidden="true" />
      </motion.button>
    </>
  );
}
