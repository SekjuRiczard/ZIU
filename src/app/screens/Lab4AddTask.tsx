import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { AddTodoForm } from "../components/todo/AddTodoForm";

export function Lab4AddTask() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--color-surface-background)]"
      aria-labelledby="add-task-title"
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
                id="add-task-title"
                className="text-[var(--color-text-primary)]"
              >
                Dodaj Nowe Zadanie
              </h1>
              <p className="text-[var(--color-text-secondary)] body-2">
                Wypełnij formularz, aby utworzyć zadanie
              </p>
            </section>
          </div>
        </section>
      </motion.header>

      <section
        className="max-w-[1440px] mx-auto px-[80px] py-[40px]"
        aria-label="Widok dodawania nowego zadania"
      >
        <article className="max-w-[800px]">
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
              Dodaj zadanie
            </span>
          </motion.nav>

          <section aria-label="Formularz dodawania zadania">
            <AddTodoForm onSuccess={handleSuccess} />
          </section>
        </article>
      </section>
    </main>
  );
}
