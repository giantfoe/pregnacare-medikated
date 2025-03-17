import React from 'react';
import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

interface HapticTabProps {
  onPress: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
  hapticStyle?: 'light' | 'medium' | 'heavy';
}

const HapticTab: React.FC<HapticTabProps> = ({
  onPress,
  style,
  children,
  hapticStyle = 'light',
}) => {
  const handlePress = () => {
    switch (hapticStyle) {
      case 'light':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case 'medium':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case 'heavy':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
    }
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.tab, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HapticTab;