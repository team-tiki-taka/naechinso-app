import React from 'react';
import {View} from 'react-native';
import {Flex} from '../components/Flex';
import Screen from '../components/Screen';
import {Text, Typography} from '../components/text';

const SignInScreen = () => {
  return (
    <Screen>
      <Flex>
        <Text typography={Typography.Headline_1_B}>🏃🏻‍♀️🏃🏻</Text>
        <Text typography={Typography.Headline_1_B}>가보자고~</Text>
        <Text typography={Typography.Headline_1_B}>휴대폰 번호를 적어줘!</Text>
      </Flex>
    </Screen>
  );
};

export default SignInScreen;
