import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface TabBarBackgroundProps {
  style?: ViewStyle;
  colors?: string[];
}

const TabBarBackground: React.FC<TabBarBackgroundProps> = ({
  style,
  colors = ['#6C63FF', '#8A84FF'],
}) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'transparent',
  },
  gradient: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default TabBarBackground;