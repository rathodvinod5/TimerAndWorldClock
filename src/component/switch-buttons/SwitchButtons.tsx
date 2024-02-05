import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { ZoneType } from '../../screens/world-PST-IST/types';


const SlideButton = ({
  onPressButton
}: {
  onPressButton: (text: ZoneType) => void
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnPress = (index: number) => {
    onPressButton(index === 0 ? 'PST' : 'IST');
    setActiveIndex(index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: activeIndex === 0 ? 'teal' : 'transparent' }]}
          onPress={() => handleOnPress(0)}
        >
          <Text style={[styles.buttonText, activeIndex === 0 && styles.activeButtonText]}>PST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: activeIndex === 1 ? 'teal' : 'transparent' }]}
          onPress={() => handleOnPress(1)}
        >
          <Text style={[styles.buttonText, activeIndex === 1 && styles.activeButtonText]}>IST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'gray',
    fontWeight: '600'
  },
  activeButtonText: {
    color: 'white',
  },
});

export default SlideButton;
