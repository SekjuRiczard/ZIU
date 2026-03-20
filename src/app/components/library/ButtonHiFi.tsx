import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonHiFiProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function ButtonHiFi({ 
  variant = 'primary', 
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  children, 
  className = '', 
  disabled,
  ...props 
}: ButtonHiFiProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-[8px] transition-all duration-200 rounded-[var(--radius-lg)] font-medium disabled:opacity-40 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    small: 'h-[32px] px-[16px] text-[14px]',
    medium: 'h-[40px] px-[24px] text-[16px]',
    large: 'h-[48px] px-[32px] text-[16px]'
  };

  const variantStyles = {
    primary: 'bg-[var(--color-primary-default)] text-white hover:bg-[var(--color-primary-hover)] shadow-[var(--shadow-sm)]',
    secondary: 'bg-[var(--color-surface-card)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] shadow-[var(--shadow-sm)]',
    ghost: 'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-card)]',
    danger: 'bg-[var(--color-semantic-error)] text-white hover:opacity-90 shadow-[var(--shadow-sm)]',
    disabled: 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] cursor-not-allowed'
  };

  const iconSize = {
    small: 16,
    medium: 20,
    large: 20
  };

  const isDisabled = variant === 'disabled' || disabled;

  return (
    <motion.button
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize[size]} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize[size]} />}
    </motion.button>
  );
}
