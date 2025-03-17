import React from 'react';
import { ScrollView, Animated, ViewStyle, StyleSheet, Dimensions } from 'react-native';

interface ParallaxScrollViewProps {
  style?: ViewStyle;
  children: React.ReactNode;
  parallaxHeight?: number;
  headerContent?: React.ReactNode;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  style,
  children,
  parallaxHeight = SCREEN_HEIGHT * 0.3,
  headerContent,
}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, parallaxHeight],
    outputRange: [0, -parallaxHeight / 2],
    extrapolate: 'clamp',
  });

  return (
    <ScrollView
      style={[styles.container, style]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    >
      <Animated.View
        style={[
          styles.headerContainer,
          { height: parallaxHeight },
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        {headerContent}
      </Animated.View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
});

export default ParallaxScrollView;