import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {TextField} from '../components/TextField';
import useTextField from '../hooks/useTextField';

const HomeScreen = () => {
  const {value, setValue, timeLimit} = useTextField();

  return (
    <View style={styles.block}>
      <Text>Home</Text>
      <TextField
        value={value}
        setValue={setValue}
        title="레이블"
        placeholder="010 0000 0000"
        timeLimit={timeLimit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
