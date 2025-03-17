import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconSymbolProps {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  const getIconName = (name: string) => {
    switch (name) {
      case '🔔':
        return 'notifications-outline';
      case '♡':
        return 'heart-outline';
      default:
        return 'help-outline';
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Ionicons name={getIconName(name)} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontFamily: 'System',
  },
});

export default IconSymbol;