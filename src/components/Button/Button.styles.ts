import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'primary'
      ? `
    background-color: #007bff;
    color: white;
    `
      : `
    background-color: #6c757d;
    color: white;
    `}
`;
