import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error" | "disabled";
  label?: string;
}

export function Input({
  variant = "default",
  label,
  className = "",
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const baseStyles =
    "w-full px-[16px] py-[12px] min-h-[48px] bg-white transition-all";

  const variantStyles = {
    default:
      "border border-[#D0D0D0] text-[#333333] focus:outline-none focus:border-[#666666]",
    error:
      "border-2 border-[#CC0000] text-[#333333] focus:outline-none focus:border-[#990000]",
    disabled:
      "bg-[#F5F5F5] border border-[#A3A3A3] text-[#555555] opacity-100 cursor-not-allowed",
  };

  const isDisabled = variant === "disabled" || props.disabled;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block mb-[8px] text-[#333333]">
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        disabled={isDisabled}
        {...props}
      />
    </div>
  );
}
