import React from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/library/Button";
import { mockTasks } from "../data/mockTasks";

export function TaskDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const task = mockTasks.find((item) => item.id === id);

  if (!task) {
    return (
      <main
        id="main-content"
        className="min-h-screen bg-[#FAFAFA] flex items-center justify-center"
        aria-labelledby="task-not-found-title"
        tabIndex={-1}
      >
        <section role="status" aria-live="polite">
          <h1 id="task-not-found-title" className="text-[#999999]">
            Zadanie nie znalezione
          </h1>
        </section>
      </main>
    );
  }

  const priorityLabels = {
    low: "Niski",
    medium: "Średni",
    high: "Wysoki",
  };

  const statusLabels = {
    default: "Aktywne",
    completed: "Ukończone",
    overdue: "Przeterminowane",
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#FAFAFA]"
      aria-labelledby="task-details-title"
      tabIndex={-1}
    >
      <header className="bg-white border-b border-[#E0E0E0]">
        <section className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 id="task-details-title" className="text-[#333333]">
            Szczegóły Zadania
          </h1>
        </section>
      </header>

      <section
        className="max-w-[1440px] mx-auto px-[80px] py-[40px]"
        aria-label="Widok szczegółów zadania"
      >
        <nav
          className="mb-[32px] flex items-center gap-[8px] text-[#999999]"
          aria-label="Ścieżka nawigacji"
        >
          <button
            type="button"
            className="cursor-pointer hover:text-[#333333] bg-transparent border-0 p-0 text-[#999999]"
            onClick={() => navigate("/")}
          >
            Dashboard
          </button>

          <span aria-hidden="true">/</span>

          <span className="text-[#333333]" aria-current="page">
            Szczegóły zadania
          </span>
        </nav>

        <article
          className="max-w-[900px]"
          aria-labelledby="selected-task-title"
        >
          <section
            className="bg-white border border-[#E0E0E0] p-[40px] mb-[24px]"
            aria-describedby="selected-task-description"
          >
            <header className="flex items-start justify-between mb-[32px] pb-[24px] border-b border-[#E0E0E0]">
              <section className="flex-1">
                <h2
                  id="selected-task-title"
                  className={`mb-[8px] ${
                    task.status === "completed"
                      ? "line-through text-[#999999]"
                      : "text-[#333333]"
                  }`}
                >
                  {task.title}
                </h2>

                <ul
                  className="flex items-center gap-[16px] text-[14px] list-none p-0"
                  aria-label="Status i priorytet zadania"
                >
                  <li className="px-[12px] py-[4px] bg-[#E0E0E0] text-[#666666]">
                    Status: {statusLabels[task.status]}
                  </li>
                  <li className="px-[12px] py-[4px] bg-[#F5F5F5] text-[#666666]">
                    Priorytet: {priorityLabels[task.priority]}
                  </li>
                </ul>
              </section>
            </header>

            <section
              className="mb-[32px]"
              aria-labelledby="task-metadata-title"
            >
              <h3 id="task-metadata-title" className="visually-hidden">
                Metadane zadania
              </h3>

              <dl className="grid grid-cols-2 gap-[24px]">
                <div>
                  <dt className="text-[#999999] mb-[8px]">Termin wykonania</dt>
                  <dd className="flex items-center gap-[8px] m-0">
                    <span
                      className="w-[20px] h-[20px] bg-[#D0D0D0]"
                      aria-hidden="true"
                    />
                    <span className="text-[#333333]">{task.dueDate}</span>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#999999] mb-[8px]">Data utworzenia</dt>
                  <dd className="flex items-center gap-[8px] m-0">
                    <span
                      className="w-[20px] h-[20px] bg-[#D0D0D0]"
                      aria-hidden="true"
                    />
                    <span className="text-[#333333]">2026-03-15</span>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#999999] mb-[8px]">Kategoria</dt>
                  <dd className="flex items-center gap-[8px] m-0">
                    <span
                      className="w-[20px] h-[20px] bg-[#D0D0D0]"
                      aria-hidden="true"
                    />
                    <span className="text-[#333333]">Projekt</span>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#999999] mb-[8px]">Przypisane do</dt>
                  <dd className="flex items-center gap-[8px] m-0">
                    <span
                      className="w-[20px] h-[20px] bg-[#999999] rounded-full"
                      aria-hidden="true"
                    />
                    <span className="text-[#333333]">Jan Kowalski</span>
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
                className="text-[#999999] mb-[12px]"
              >
                Opis zadania
              </h3>
              <p
                id="selected-task-description"
                className="text-[#666666] leading-relaxed"
              >
                {task.description}
              </p>
            </section>

            <aside
              className="pt-[24px] border-t border-[#E0E0E0]"
              aria-labelledby="task-notes-title"
            >
              <h3 id="task-notes-title" className="text-[#999999] mb-[12px]">
                Notatki
              </h3>
              <p className="bg-[#F9F9F9] p-[16px] text-[#666666] italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </aside>
          </section>

          <footer
            className="flex gap-[16px]"
            aria-label="Akcje dla wybranego zadania"
          >
            <Button variant="secondary" onClick={() => navigate("/")}>
              <span className="flex items-center gap-[8px]">
                <span
                  className="w-[16px] h-[16px] bg-[#666666]"
                  aria-hidden="true"
                />
                <span>Powrót</span>
              </span>
            </Button>

            <Button
              variant="primary"
              onClick={() => alert("Funkcja edycji - w wersji demo")}
            >
              <span className="flex items-center gap-[8px]">
                <span
                  className="w-[16px] h-[16px] bg-[#333333]"
                  aria-hidden="true"
                />
                <span>Edytuj</span>
              </span>
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                if (confirm("Czy na pewno chcesz usunąć to zadanie?")) {
                  navigate("/");
                }
              }}
            >
              <span className="flex items-center gap-[8px]">
                <span
                  className="w-[16px] h-[16px] bg-[#666666]"
                  aria-hidden="true"
                />
                <span>Usuń</span>
              </span>
            </Button>
          </footer>
        </article>
      </section>
    </main>
  );
}
