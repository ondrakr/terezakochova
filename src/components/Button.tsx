import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  href,
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg";
  
  const variants = {
    primary: "bg-[#8EA37F] text-white hover:bg-[#7a8c6c] disabled:bg-gray-400",
    secondary: "bg-transparent border-2 border-[#8EA37F] text-[#8EA37F] hover:bg-[#8EA37F] hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-transparent"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 