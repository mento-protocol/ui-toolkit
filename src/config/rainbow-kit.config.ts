import { type Theme, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';

const defaultThemeOptions = {
  accentColor: 'rgb(var(--primary))',
  accentColorForeground: 'rgb(var(--primary-foreground))',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
} as const;

export const rainbowKitTheme = {
  lightMode: lightTheme(defaultThemeOptions),
  darkMode: darkTheme(defaultThemeOptions),
} satisfies { lightMode: Theme; darkMode: Theme }; 