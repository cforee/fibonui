export const COLORS = {
  // Primary colors
  primary: {
    main: '#2E5EAA',
    light: '#4B7BCA',
    dark: '#1A4088',
    contrast: '#FFFFFF'
  },
  // Secondary colors
  secondary: {
    main: '#718096',
    light: '#A0AEC0',
    dark: '#4A5568',
    contrast: '#FFFFFF'
  },
  // Success colors
  success: {
    main: '#38A169',
    light: '#48BB78',
    dark: '#2F855A',
    contrast: '#FFFFFF'
  },
  // Warning colors
  warning: {
    main: '#D69E2E',
    light: '#ECC94B',
    dark: '#B7791F',
    contrast: '#000000'
  },
  // Error colors
  error: {
    main: '#E53E3E',
    light: '#F56565',
    dark: '#C53030',
    contrast: '#FFFFFF'
  },
  // Neutral colors
  neutral: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923'
  },
  // Common colors
  common: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  }
} as const;

export type ThemeColors = typeof COLORS;
