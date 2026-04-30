import React from "react";
import { motion } from "motion/react";
import { Calendar, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export interface TaskHiFi {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  status: "active" | "completed" | "overdue";
  category?: string;
  hasImage?: boolean;
  imageUrl?: string;
}

interface TaskCardHiFiProps {
  task: TaskHiFi;
  onClick?: () => void;
}

export function TaskCardHiFi({ task, onClick }: TaskCardHiFiProps) {
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

  const statusIcons = {
    active: Clock,
    completed: CheckCircle2,
    overdue: AlertCircle,
  };

  const StatusIcon = statusIcons[task.status];
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
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-[var(--color-surface-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] cursor-pointer overflow-hidden transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`Otwórz szczegóły zadania: ${task.title}`}
    >
      {task.hasImage && task.imageUrl && (
        <div className="w-full h-[160px] overflow-hidden">
          <img
            src={task.imageUrl}
            alt={task.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-[24px]">
        {/* Header */}
        <div className="flex items-start justify-between mb-[12px]">
          <h3
            className={`flex-1 ${task.status === "completed" ? "line-through text-[var(--color-text-secondary)]" : "text-[var(--color-text-primary)]"}`}
          >
            {task.title}
          </h3>
          <span
            className={`px-[12px] py-[4px] rounded-[6px] text-[12px] font-medium ml-[12px] ${priorityColors[task.priority]}`}
          >
            {priorityLabels[task.priority]}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] body-2 mb-[16px] line-clamp-2">
          {task.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-[16px] border-t border-[var(--color-border)]">
          <div className="flex items-center gap-[6px] text-[var(--color-text-secondary)] text-[14px]">
            <Calendar size={16} aria-hidden="true" />
            <span>{task.dueDate}</span>
          </div>

          <div
            className={`flex items-center gap-[6px] text-[14px] ${
              task.status === "completed"
                ? "text-[var(--color-semantic-success)]"
                : task.status === "overdue"
                  ? "text-[var(--color-semantic-error)]"
                  : "text-[var(--color-text-secondary)]"
            }`}
          >
            <StatusIcon size={16} aria-hidden="true" />
            <span>
              {task.status === "completed"
                ? "Ukończone"
                : task.status === "overdue"
                  ? "Przeterminowane"
                  : "Aktywne"}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
