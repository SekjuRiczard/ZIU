import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-[24px] py-[12px] min-h-[48px] cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-[#E0E0E0] text-[#333333] hover:bg-[#D0D0D0]',
    secondary: 'bg-transparent border border-[#333333] text-[#333333] hover:bg-[#F5F5F5]'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
