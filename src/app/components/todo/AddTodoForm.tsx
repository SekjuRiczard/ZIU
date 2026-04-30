import React, { useId, useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useTodos } from "../../context/TodoContext";
import { ButtonHiFi } from "../library/ButtonHiFi";
import { InputHiFi } from "../library/InputHiFi";

interface AddTodoFormProps {
  onSuccess?: () => void;
}

export function AddTodoForm({ onSuccess }: AddTodoFormProps) {
  const { dispatch } = useTodos();
  const descriptionId = useId();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [category, setCategory] = useState("");

  const [errors, setErrors] = useState<{ title?: string; dueDate?: string }>(
    {},
  );

  const [touched, setTouched] = useState<{
    title?: boolean;
    dueDate?: boolean;
  }>({});

  const validateTitle = (value: string): string => {
    if (!value.trim()) {
      return "Tytuł zadania jest wymagany";
    }

    if (value.trim().length < 3) {
      return "Tytuł musi mieć minimum 3 znaki";
    }

    return "";
  };

  const handleTitleBlur = () => {
    setTouched((previousTouched) => ({ ...previousTouched, title: true }));
    setErrors((previousErrors) => ({
      ...previousErrors,
      title: validateTitle(title),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const titleError = validateTitle(title);

    if (titleError) {
      setErrors({ title: titleError });
      setTouched({ title: true, dueDate: true });
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate || undefined,
        priority,
        category: category.trim() || undefined,
      },
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");
    setCategory("");
    setErrors({});
    setTouched({});

    onSuccess?.();
  };

  return (
    <motion.form
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit}
      className="w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-card)] p-4 shadow-[var(--shadow-md)] sm:p-6 lg:p-10"
    >
      <div className="space-y-6">
        <InputHiFi
          label="Tytuł zadania *"
          placeholder="np. Przygotować prezentację projektu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleTitleBlur}
          error={touched.title ? errors.title : ""}
          required
        />

        <div>
          <label
            htmlFor={descriptionId}
            className="mb-2 block text-[var(--color-text-primary)]"
          >
            Opis zadania
          </label>

          <textarea
            id={descriptionId}
            className="min-h-[140px] w-full resize-y rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-input-background)] px-4 py-3 text-[var(--color-text-primary)] transition-all placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-border-focus)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
            placeholder="Szczegółowy opis zadania, kontekst i wymagania..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InputHiFi
            label="Termin wykonania"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <InputHiFi
            label="Kategoria"
            placeholder="np. Frontend, Backend"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <fieldset>
          <legend className="mb-4 block text-[var(--color-text-primary)]">
            Priorytet *
          </legend>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: "low" as const, label: "Niski" },
              { value: "medium" as const, label: "Średni" },
              { value: "high" as const, label: "Wysoki" },
            ].map((priorityOption) => (
              <motion.label
                key={priorityOption.value}
                whileHover={{ scale: 1.02 }}
                className="min-w-0 cursor-pointer"
              >
                <input
                  type="radio"
                  name="priority"
                  value={priorityOption.value}
                  checked={priority === priorityOption.value}
                  onChange={(e) =>
                    setPriority(e.target.value as "low" | "medium" | "high")
                  }
                  className="sr-only"
                />

                <span
                  className={`flex min-h-[44px] w-full items-center justify-center rounded-[var(--radius-lg)] border-2 px-4 py-3 text-center transition-all ${
                    priority === priorityOption.value
                      ? "border-[var(--color-primary-default)] bg-[var(--color-primary-default)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary-default)]"
                  }`}
                >
                  {priorityOption.label}
                </span>
              </motion.label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 flex flex-col border-t border-[var(--color-border)] pt-6 sm:items-end">
        <ButtonHiFi
          type="submit"
          variant="primary"
          size="medium"
          icon={Plus}
          className="w-full sm:w-auto"
        >
          Dodaj zadanie
        </ButtonHiFi>
      </div>
    </motion.form>
  );
}
