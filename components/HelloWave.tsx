import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface HelloWaveProps {
  name?: string;
  style?: any;
}

const HelloWave: React.FC<HelloWaveProps> = ({ name = '', style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.greeting}>Hello{name ? `, ${name}` : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 8,
  },
});

export default HelloWave;