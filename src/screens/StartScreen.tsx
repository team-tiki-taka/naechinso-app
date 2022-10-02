import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/button';
import {Flex} from '../components/Flex';
import Screen from '../components/Screen';
import {Text, Typography} from '../components/text';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Flex align="center">
        <Button
          onPress={() => {
            navigation.navigate('signIn');
          }}
          type="primary"
          width={335}
          height={56}>
          내친소 시작하기
        </Button>
        <Text typography={Typography.Caption_2_M}>
          😎 내 친구를 소개하고 싶어
        </Text>
      </Flex>
    </Screen>
  );
};

const StartContainer = styled.View``;

export default StartScreen;
