import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ButtonMain = () => {
  return (
    <View style={buttonMainStyles.buttonContainer}>
      <Button title="Login" />
    </View>
  );
};

const buttonMainStyles = StyleSheet.create({
  buttonContainer: {
    width: 200,
  },
});

export default ButtonMain;
