import React from 'react';
import {Text, View} from 'react-native';
import ExploreScreenStyles from './styles/ExploreScreenStyles';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={ExploreScreenStyles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={ExploreScreenStyles.text}>
        explore
      </Text>
    </View>
  );
};

export default ExploreScreen;
