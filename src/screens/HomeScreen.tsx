import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {Label} from './SMSAuth/components/LabelWithCountDown';
import Screen from '../components/Screen';
import {TextField} from '../components/TextField';

const HomeScreen = () => {
  return (
    <Screen>
      <Text>Home</Text>

      <TextField
        value={value}
        setValue={setValue}
        label={({active}) => <Label title="hi" isTimeLimit />}
        placeholder="160"
        fixedText="CM"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
