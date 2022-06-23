import React from 'react';
import {Text, View} from 'react-native';
import ProfileScreenStyles from './styles/ProfileScreenStyles';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={ProfileScreenStyles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={ProfileScreenStyles.text}>
        profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
