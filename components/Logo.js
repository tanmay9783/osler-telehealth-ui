import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plusContainer}>
        <View style={[styles.bar, styles.horizontal]} />
        <View style={[styles.bar, styles.vertical]} />
      </View>
      {/* Small dots as seen in the design logo */}
      <View style={[styles.dot, styles.dotTop]} />
      <View style={[styles.dot, styles.dotBottom]} />
      <View style={[styles.dot, styles.dotLeft]} />
      <View style={[styles.dot, styles.dotRight]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  plusContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    position: 'absolute',
  },
  horizontal: {
    width: 28,
    height: 10,
  },
  vertical: {
    width: 10,
    height: 28,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    opacity: 0.6,
  },
  dotTop: { top: 0 },
  dotBottom: { bottom: 0 },
  dotLeft: { left: 0 },
  dotRight: { right: 0 },
});

export default Logo;
