import React from 'react';
import { FIBS } from '../../constants/fibonacci';

type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
}

const sizes: Record<ButtonSize, {
  padding: string;
  fontSize: string;
  borderRadius: string;
  minWidth: string;
}> = {
  xsmall: {
    padding: `${FIBS.SM+1}px ${FIBS.LG+2}px ${FIBS.SM+2}px ${FIBS.LG+2}px`,
    fontSize: `${FIBS.LG+2}px`,
    borderRadius: `${FIBS.SM}px`,
    minWidth: `${FIBS.XL * FIBS.LG}px`
  },
  small: {
    padding: `${FIBS.SM}px ${FIBS.XL}px ${FIBS.SM+1}px ${FIBS.XL}px`,
    fontSize: `${FIBS.XL}px`,
    borderRadius: `${FIBS.SM}px`,
    minWidth: `${FIBS.XL * FIBS.MD}px`
  },
  medium: {
    padding: `${FIBS.MD}px ${FIBS.XL}px ${FIBS.MD+1}px ${FIBS.XL}px`,
    fontSize: `${FIBS.XL+2}px`,
    borderRadius: `${FIBS.SM}px`,
    minWidth: `${FIBS.XL * FIBS.XL}px`
  },
  large: {
    padding: `${FIBS.MD}px ${FIBS.XL+8}px ${FIBS.MD+1}px ${FIBS.XL+8}px`,
    fontSize: `${FIBS.XXL-2}px`,
    borderRadius: `${FIBS.SM}px`,
    minWidth: `${FIBS.XL * FIBS.XL}px`
  }
};

const getStyles = (variant: ButtonProps['variant'], size: ButtonSize = 'medium') => ({
  ...sizes[size],
  border: 'none',
  cursor: 'pointer',
  backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
  color: 'white',
  transition: 'all 0.1s ease-in-out',
  fontFamily: 'inherit',
  lineHeight: '1.5',
  textAlign: 'center' as const,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    filter: 'brightness(95%)',
  }
});

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  size = 'medium'
}: ButtonProps) => {
  return (
    <button
      style={getStyles(variant, size)}
      onClick={onClick}
      onMouseOver={(e) => {
        const target = e.currentTarget;
        target.style.filter = 'brightness(95%)';
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget;
        target.style.filter = 'none';
        target.style.transform = 'none';
        target.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
};
