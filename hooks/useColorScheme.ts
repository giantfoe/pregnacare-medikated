import { useColorScheme as _useColorScheme } from 'react-native';

export type ColorScheme = 'light' | 'dark';

export default function useColorScheme(): ColorScheme {
  const colorScheme = _useColorScheme() as ColorScheme;
  return colorScheme || 'light';
}