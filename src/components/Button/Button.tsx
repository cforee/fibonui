import React from 'react';
import { FIBS } from '../../constants/fibonacci';
import { COLORS } from '../../themes/default';

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
    padding: `${FIBS.MD}px ${FIBS.XXL}px ${FIBS.MD+1}px ${FIBS.XXL}px`,
    fontSize: `${FIBS.XXL-4}px`,
    borderRadius: `${FIBS.SM}px`,
    minWidth: `${FIBS.XL * FIBS.LG}px`
  }
};

const getStyles = (variant: ButtonProps['variant'], size: ButtonSize = 'medium') => ({
  ...sizes[size],
  border: 'none',
  cursor: 'pointer',
  backgroundColor: variant === 'primary' ? COLORS.primary.main : COLORS.secondary.main,
  color: variant === 'primary' ? COLORS.primary.contrast : COLORS.secondary.contrast,
  transition: 'all 0.1s ease-in-out',
  fontFamily: 'inherit',
  lineHeight: '1.5',
  textAlign: 'center' as const,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: variant === 'primary' ? COLORS.primary.light : COLORS.secondary.light,
  },
  '&:active': {
    backgroundColor: variant === 'primary' ? COLORS.primary.dark : COLORS.secondary.dark,
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
        target.style.backgroundColor = variant === 'primary' ? COLORS.primary.light : COLORS.secondary.light;
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget;
        target.style.backgroundColor = variant === 'primary' ? COLORS.primary.main : COLORS.secondary.main;
      }}
    >
      {children}
    </button>
  );
};
