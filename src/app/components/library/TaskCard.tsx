import React from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  status: "default" | "completed" | "overdue";
}

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  const baseStyles =
    "bg-white border border-[#D0D0D0] p-[24px] cursor-pointer hover:border-[#666666] transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

  const statusStyles = {
    default: "",
    completed: "opacity-90",
    overdue: "border-l-[4px] border-l-[#666666]",
  };

  const priorityLabels = {
    low: "Niski",
    medium: "Średni",
    high: "Wysoki",
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!onClick) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={`${baseStyles} ${statusStyles[task.status]}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`Otwórz szczegóły zadania: ${task.title}`}
    >
      <div className="flex items-start justify-between mb-[16px]">
        <h3
          className={
            task.status === "completed"
              ? "line-through text-[#4B5563]"
              : "text-[#111827]"
          }
        >
          {task.title}
        </h3>

        <span className="min-w-[64px] min-h-[24px] bg-[#E5E7EB] flex items-center justify-center text-[12px] text-[#374151]">
          {priorityLabels[task.priority]}
        </span>
      </div>

      <p className="text-[#374151] mb-[16px] line-clamp-2">
        {task.description}
      </p>

      <div className="flex items-center gap-[16px] text-[14px] text-[#374151]">
        <div className="flex items-center gap-[8px]">
          <div className="w-[16px] h-[16px] bg-[#6B7280]" aria-hidden="true" />
          <span>{task.dueDate}</span>
        </div>

        {task.status === "completed" && (
          <div className="flex items-center gap-[8px]">
            <div
              className="w-[16px] h-[16px] bg-[#047857]"
              aria-hidden="true"
            />
            <span>Ukończone</span>
          </div>
        )}

        {task.status === "overdue" && (
          <div className="flex items-center gap-[8px]">
            <div
              className="w-[16px] h-[16px] bg-[#B91C1C]"
              aria-hidden="true"
            />
            <span>Przeterminowane</span>
          </div>
        )}
      </div>
    </article>
  );
}
