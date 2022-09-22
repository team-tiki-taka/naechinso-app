import React from 'react';

import {StyleSheet, Text} from 'react-native';
import Screen from '../components/Screen';
import {TextField} from '../components/TextField';
import useTextField from '../hooks/useTextField';

const HomeScreen = () => {
  const {value, setValue, timeLimit} = useTextField();

  return (
    <Screen>
      <Text>Home</Text>
      <TextField
        value={value}
        setValue={setValue}
        title="레이블"
        placeholder="010 0000 0000"
        timeLimit={timeLimit}
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
