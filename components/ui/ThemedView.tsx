import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ThemedViewProps {
  style?: ViewStyle;
  children: React.ReactNode;
  variant?: 'card' | 'container' | 'header';
  gradient?: boolean;
  gradientColors?: string[];
}

const ThemedView: React.FC<ThemedViewProps> = ({
  style,
  children,
  variant = 'container',
  gradient = false,
  gradientColors = ['#6C63FF', '#8A84FF'],
}) => {
  if (gradient) {
    return (
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles[variant], style]}
      >
        {children}
      </LinearGradient>
    );
  }

  return (
    <View style={[styles[variant], style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default ThemedView;