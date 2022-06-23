import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {CheckBox} from '@rneui/base';
import GlobalStyles from '../styles/Global';
import LoginScreenStyles from './styles/LoginScreenStyles';
import ButtonMain from '../components/ButtonMain';

let checkText = 'Terms & conditions agree';

const LoginScreen = () => {
  const [agree, setAgree] = useState(false);

  const handleCheck = () => {
    setAgree(true);
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textTitle}>Login Screen</Text>
      <View style={LoginScreenStyles.viewContainer}>
        <TextInput
          style={LoginScreenStyles.textInput}
          placeholder="Email Address"
        />
        <TextInput style={LoginScreenStyles.textInput} placeholder="Password" />
        <CheckBox title={checkText} checked={agree} onPress={handleCheck} />
        <ButtonMain />
      </View>
    </View>
  );
};

export default LoginScreen;
