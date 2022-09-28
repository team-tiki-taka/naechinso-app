import React from 'react';
import {Button, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {useBottomSheet} from '../contexts/PopupProvider';

const HomeScreen = () => {
  const {open} = useBottomSheet();

  return (
    <Screen>
      <Text>Home2</Text>
      <Text>Home3</Text>
      <Text>Home4</Text>
      <Button
        title="test"
        onPress={() =>
          open(
            <View>
              <View style={{height: 100}} />
              <Text>asd2</Text>
              <View style={{height: 100}} />
            </View>,
          )
        }
      />
    </Screen>
  );
};

export default HomeScreen;
