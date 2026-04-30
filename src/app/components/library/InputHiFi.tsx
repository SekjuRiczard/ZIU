import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle } from "lucide-react";

interface InputHiFiProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  state?: "default" | "focused" | "error" | "disabled";
}

export function InputHiFi({
  label,
  helperText,
  error,
  state,
  className = "",
  disabled,
  id,
  ...props
}: InputHiFiProps) {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();

  const inputId = id ?? generatedId;
  const helperTextId = `${inputId}-helper`;

  const hasError = Boolean(error || state === "error");
  const isDisabled = Boolean(disabled || state === "disabled");
  const currentState = isDisabled
    ? "disabled"
    : hasError
      ? "error"
      : isFocused
        ? "focused"
        : "default";

  const baseStyles =
    "w-full px-[16px] py-[12px] h-[48px] rounded-[var(--radius-lg)] transition-all duration-200 bg-[var(--color-input-background)]";

  const stateStyles = {
    default:
      "border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none",
    focused:
      "border-2 border-[var(--color-border-focus)] text-[var(--color-text-primary)] shadow-[0_0_0_3px_rgba(30,64,175,0.1)] outline-none",
    error:
      "border-2 border-[var(--color-semantic-error)] text-[var(--color-text-primary)] focus:outline-none",
    disabled:
      "border border-[var(--color-border)] text-[#555555] opacity-100 cursor-not-allowed bg-[var(--color-muted)]",
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-[8px] text-[var(--color-text-primary)]"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          className={`${baseStyles} ${stateStyles[currentState]} ${hasError ? "pr-[40px]" : ""}`}
          disabled={isDisabled}
          aria-invalid={hasError}
          aria-describedby={helperText || error ? helperTextId : undefined}
          onFocus={() => !isDisabled && setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {hasError && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-[12px] top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <AlertCircle
              size={20}
              className="text-[var(--color-semantic-error)]"
            />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {(helperText || error) && (
          <motion.div
            id={helperTextId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`mt-[6px] text-[12px] ${
              hasError ? "text-[var(--color-semantic-error)]" : "text-[#374151]"
            }`}
          >
            {error || helperText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
