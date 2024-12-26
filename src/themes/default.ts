export const COLORS = {
  // Primary colors
  primary: {
    main: '#0379B1',
    light: '#0294D7',
    dark: '#076995',
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
    main: '#22BABB',
    light: '#4BCBCC', // Reduced contrast with main color
    dark: '#348888',
    contrast: '#FFFFFF'
  },
  // Warning colors
  warning: {
    main: '#FA7F08',
    light: '#FB9939',
    dark: '#C66406',
    contrast: '#FFFFFF'
  },
  // Error colors
  error: {
    main: '#F24405',
    light: '#F46937',
    dark: '#C13604',
    contrast: '#FFFFFF'
  },
  // Neutral colors
  neutral: {
    50: '#F5F9F9',
    100: '#E6F0F0',
    200: '#D1E3E3',
    300: '#B3D1D1',
    400: '#8CB8B8',
    500: '#348888',
    600: '#286666',
    700: '#1B4444',
    800: '#0D2222',
    900: '#041111'
  },
  // Common colors
  common: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  }
} as const;

export type ThemeColors = typeof COLORS;
