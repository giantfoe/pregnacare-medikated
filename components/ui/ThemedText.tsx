import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface ThemedTextProps {
  style?: TextStyle;
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  color?: string;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  children,
  variant = 'body',
  color,
}) => {
  return (
    <Text style={[styles[variant], color && { color }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'System',
  },
  body: {
    fontSize: 16,
    color: '#222222',
    fontFamily: 'System',
  },
  caption: {
    fontSize: 14,
    color: '#444444',
    fontFamily: 'System',
  },
});

export default ThemedText;