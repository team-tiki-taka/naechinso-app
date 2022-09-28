import Button from '@components/Button';
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const onBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>onBoarding</Text>
      <Button
        onPress={() => {
          navigation.navigate('smsAuth', {text: 'hi'});
        }}>
        다음
      </Button>
    </View>
  );
};

export default onBoardingScreen;
