import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const getStyles = (variant: 'primary' | 'secondary') => ({
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
  color: 'white',
});

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button style={getStyles(variant)} onClick={onClick}>
      {children}
    </button>
  );
};
