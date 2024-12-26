import React from 'react';
import { FIBS } from '../../constants/fibonacci';
import { COLORS } from '../../themes/default';

type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary';
type ButtonIndication = 'success' | 'warning' | 'error';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  indication?: ButtonIndication;
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

const getStyles = (variant: ButtonProps['variant'], size: ButtonSize = 'medium', indication?: ButtonIndication) => {
  let backgroundColor = variant === 'primary' ? COLORS.primary.main : COLORS.secondary.main;
  let hoverColor = variant === 'primary' ? COLORS.primary.light : COLORS.secondary.light;
  let activeColor = variant === 'primary' ? COLORS.primary.dark : COLORS.secondary.dark;
  let textColor = variant === 'primary' ? COLORS.primary.contrast : COLORS.secondary.contrast;
  if (indication) {
    backgroundColor = COLORS[indication].main as string;
    hoverColor = COLORS[indication].light as string;
    activeColor = COLORS[indication].dark as string;
    textColor = COLORS[indication].contrast as string;
  }

  return {
    ...sizes[size],
    border: 'none',
    cursor: 'pointer',
    backgroundColor,
    color: textColor,
    transition: 'all 0.1s ease-in-out',
    fontFamily: 'inherit',
    lineHeight: '1.5',
    textAlign: 'center' as const,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: hoverColor,
    },
    '&:active': {
      backgroundColor: activeColor,
    }
  };
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
  size = 'medium',
  indication
}: ButtonProps) => {
  return (
    <button
      style={getStyles(variant, size, indication)}
      onClick={onClick}
      onMouseOver={(e) => {
        const target = e.currentTarget;
        if (indication) {
          target.style.backgroundColor = COLORS[indication].light;
        } else {
          target.style.backgroundColor = variant === 'primary' ? COLORS.primary.light : COLORS.secondary.light;
        }
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget;
        if (indication) {
          target.style.backgroundColor = COLORS[indication].main;
        } else {
          target.style.backgroundColor = variant === 'primary' ? COLORS.primary.main : COLORS.secondary.main;
        }
      }}
    >
      {children}
    </button>
  );
};
