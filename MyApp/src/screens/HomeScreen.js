import React from 'react';
import {Text, View} from 'react-native';
import HomeScreenStyles from './styles/HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={HomeScreenStyles.container}>
      <Text onPress={() => alert('home page')} style={HomeScreenStyles.text}>
        hello
      </Text>
    </View>
  );
};

export default HomeScreen;
