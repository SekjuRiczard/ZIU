import React from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Calendar,
  FolderOpen,
  Clock,
} from "lucide-react";
import { ButtonHiFi } from "../components/library/ButtonHiFi";
import { realTasks } from "../data/realTasks";

export function TaskDetailsHiFi() {
  const navigate = useNavigate();
  const { id } = useParams();

  const task = realTasks.find((item) => item.id === id);

  if (!task) {
    return (
      <main
        id="main-content"
        className="min-h-screen bg-[var(--color-surface-background)] flex items-center justify-center"
        aria-labelledby="task-not-found-title"
        tabIndex={-1}
      >
        <section className="text-center" role="status" aria-live="polite">
          <div
            className="w-[120px] h-[120px] mx-auto mb-[24px] rounded-full bg-[var(--color-muted)] flex items-center justify-center"
            aria-hidden="true"
          >
            <FolderOpen
              size={48}
              className="text-[var(--color-text-secondary)]"
              aria-hidden="true"
              focusable="false"
            />
          </div>

          <h1
            id="task-not-found-title"
            className="text-[var(--color-text-primary)] mb-[8px]"
          >
            Zadanie nie znalezione
          </h1>

          <ButtonHiFi variant="primary" onClick={() => navigate("/")}>
            Wróć do Dashboard
          </ButtonHiFi>
        </section>
      </main>
    );
  }

  const priorityColors = {
    low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  const priorityLabels = {
    low: "Niski",
    medium: "Średni",
    high: "Wysoki",
  };

  const statusColors = {
    active: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  const statusLabels = {
    active: "Aktywne",
    completed: "Ukończone",
    overdue: "Przeterminowane",
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--color-surface-background)]"
      aria-labelledby="task-details-title"
      tabIndex={-1}
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[var(--color-surface-card)] border-b border-[var(--color-border)]"
      >
        <section className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <div className="flex items-center gap-[16px]">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              aria-label="Wróć do dashboardu"
              className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-surface-background)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-muted)] transition-colors"
            >
              <ArrowLeft size={20} aria-hidden="true" focusable="false" />
            </motion.button>

            <section>
              <h1
                id="task-details-title"
                className="text-[var(--color-text-primary)]"
              >
                Szczegóły Zadania
              </h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                Pełna informacja o zadaniu
              </p>
            </section>
          </div>
        </section>
      </motion.header>

      <section
        className="max-w-[1440px] mx-auto px-[80px] py-[40px]"
        aria-label="Widok szczegółów zadania"
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-[32px] flex items-center gap-[8px] text-[14px]"
          aria-label="Ścieżka nawigacji"
        >
          <button
            type="button"
            className="text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-primary-default)] transition-colors bg-transparent border-0 p-0"
            onClick={() => navigate("/")}
          >
            Dashboard
          </button>

          <span
            className="text-[var(--color-text-secondary)]"
            aria-hidden="true"
          >
            /
          </span>

          <span
            className="text-[var(--color-text-primary)] font-medium"
            aria-current="page"
          >
            Szczegóły
          </span>
        </motion.nav>

        <article
          className="max-w-[900px]"
          aria-labelledby="selected-task-title"
        >
          {task.hasImage && task.imageUrl && (
            <motion.figure
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-[32px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]"
            >
              <img
                src={task.imageUrl}
                alt={`Ilustracja zadania: ${task.title}`}
                className="w-full h-[400px] object-cover"
              />
            </motion.figure>
          )}

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[40px] mb-[24px]"
            aria-describedby="selected-task-description"
          >
            <header className="mb-[32px] pb-[24px] border-b border-[var(--color-border)]">
              <section className="flex items-start gap-[16px] mb-[16px]">
                <h2
                  id="selected-task-title"
                  className={`flex-1 ${
                    task.status === "completed"
                      ? "line-through text-[var(--color-text-secondary)]"
                      : "text-[var(--color-text-primary)]"
                  }`}
                >
                  {task.title}
                </h2>
              </section>

              <ul
                className="flex items-center gap-[12px] list-none p-0"
                aria-label="Status i priorytet zadania"
              >
                <li
                  className={`px-[16px] py-[6px] rounded-[var(--radius-lg)] text-[14px] font-medium ${
                    statusColors[task.status]
                  }`}
                >
                  Status: {statusLabels[task.status]}
                </li>

                <li
                  className={`px-[16px] py-[6px] rounded-[var(--radius-lg)] text-[14px] font-medium ${
                    priorityColors[task.priority]
                  }`}
                >
                  Priorytet: {priorityLabels[task.priority]}
                </li>
              </ul>
            </header>

            <section
              className="mb-[32px]"
              aria-labelledby="task-metadata-title"
            >
              <h3 id="task-metadata-title" className="visually-hidden">
                Metadane zadania
              </h3>

              <dl className="grid grid-cols-2 gap-[24px]">
                <div className="flex items-start gap-[12px]">
                  <dt>
                    <span
                      className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Calendar
                        size={20}
                        className="text-[var(--color-text-secondary)]"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <span className="visually-hidden">Termin wykonania</span>
                  </dt>
                  <dd className="m-0">
                    <p className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">
                      Termin wykonania
                    </p>
                    <p className="text-[var(--color-text-primary)] font-medium">
                      {task.dueDate}
                    </p>
                  </dd>
                </div>

                <div className="flex items-start gap-[12px]">
                  <dt>
                    <span
                      className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Clock
                        size={20}
                        className="text-[var(--color-text-secondary)]"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <span className="visually-hidden">Data utworzenia</span>
                  </dt>
                  <dd className="m-0">
                    <p className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">
                      Data utworzenia
                    </p>
                    <p className="text-[var(--color-text-primary)] font-medium">
                      15 marca 2026
                    </p>
                  </dd>
                </div>

                {task.category && (
                  <div className="flex items-start gap-[12px]">
                    <dt>
                      <span
                        className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-[var(--color-muted)] flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <FolderOpen
                          size={20}
                          className="text-[var(--color-text-secondary)]"
                          aria-hidden="true"
                          focusable="false"
                        />
                      </span>
                      <span className="visually-hidden">Kategoria</span>
                    </dt>
                    <dd className="m-0">
                      <p className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">
                        Kategoria
                      </p>
                      <p className="text-[var(--color-text-primary)] font-medium">
                        {task.category}
                      </p>
                    </dd>
                  </div>
                )}

                <div className="flex items-start gap-[12px]">
                  <dt>
                    <span
                      className="w-[40px] h-[40px] rounded-[var(--radius-lg)] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold"
                      aria-hidden="true"
                    >
                      JK
                    </span>
                    <span className="visually-hidden">Przypisane do</span>
                  </dt>
                  <dd className="m-0">
                    <p className="text-[var(--color-text-secondary)] text-[14px] mb-[4px]">
                      Przypisane do
                    </p>
                    <p className="text-[var(--color-text-primary)] font-medium">
                      Jan Kowalski
                    </p>
                  </dd>
                </div>
              </dl>
            </section>

            <section
              className="mb-[32px]"
              aria-labelledby="task-description-title"
            >
              <h3
                id="task-description-title"
                className="text-[var(--color-text-primary)] mb-[12px]"
              >
                Opis zadania
              </h3>
              <p
                id="selected-task-description"
                className="text-[var(--color-text-secondary)] leading-relaxed"
              >
                {task.description}
              </p>
            </section>

            <aside
              className="pt-[24px] border-t border-[var(--color-border)]"
              aria-labelledby="task-notes-title"
            >
              <h3
                id="task-notes-title"
                className="text-[var(--color-text-primary)] mb-[12px]"
              >
                Notatki
              </h3>
              <section className="bg-[var(--color-muted)] rounded-[var(--radius-lg)] p-[20px]">
                <p className="text-[var(--color-text-secondary)] italic">
                  Pamiętaj o koordynacji z zespołem przed rozpoczęciem
                  implementacji. Sprawdź dostępność zasobów i zależności od
                  innych zadań.
                </p>
              </section>
            </aside>
          </motion.section>

          <motion.footer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-[16px]"
            aria-label="Akcje dla wybranego zadania"
          >
            <ButtonHiFi
              variant="secondary"
              icon={ArrowLeft}
              onClick={() => navigate("/")}
            >
              Powrót
            </ButtonHiFi>

            <ButtonHiFi
              variant="primary"
              icon={Edit}
              onClick={() => alert("Funkcja edycji - w wersji demo")}
            >
              Edytuj
            </ButtonHiFi>

            <ButtonHiFi
              variant="danger"
              icon={Trash2}
              onClick={() => {
                if (confirm("Czy na pewno chcesz usunąć to zadanie?")) {
                  navigate("/");
                }
              }}
            >
              Usuń
            </ButtonHiFi>
          </motion.footer>
        </article>
      </section>
    </main>
  );
}
