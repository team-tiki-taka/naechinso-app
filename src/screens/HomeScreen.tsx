import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {useBottomSheet} from '../contexts/PopupProvider';

const HomeScreen = () => {
  const {open} = useBottomSheet();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate('chat');
  }, []);

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
