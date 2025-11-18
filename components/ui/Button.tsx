import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-saint-blood text-white hover:bg-saint-blood-hover border-saint-blood shadow-[0_0_15px_rgba(138,28,28,0.3)] hover:shadow-[0_0_25px_rgba(138,28,28,0.5)]",
    outline: "bg-transparent border-saint-bone text-saint-bone hover:bg-saint-bone hover:text-saint-black",
    ghost: "bg-transparent text-saint-muted hover:text-saint-bone hover:pl-10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
