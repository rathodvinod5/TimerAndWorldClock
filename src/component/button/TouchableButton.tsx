import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React, { Children } from 'react';

const TouchableButton = ({
  buttonTitle,
  handleButtonOnPress,
  buttonStyles,
  children
}: {
  buttonTitle?: string,
  handleButtonOnPress: () => void,
  buttonStyles?: React.CSSProperties,
  children?: React.ReactElement
}) => {

  // const customButtonStyles: React.CSSProperties = buttonStyles ? { ...STYLES.button, ...buttonStyles } : STYLES.button;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyles ? buttonStyles as StyleProp<ViewStyle> : STYLES.button}
      onPress={handleButtonOnPress}
    >
      {buttonTitle ? (
        <Text style={STYLES.buttonText}>{buttonTitle}</Text>
      ) : children}
    </TouchableOpacity>
  );
}

export default TouchableButton;

const STYLES = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginBottom: 40,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600'
  }
});