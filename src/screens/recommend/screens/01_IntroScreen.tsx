import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import React from 'react';
import styled from 'styled-components/native';
import {RecommendParamList} from '..';

export const IntroScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const [user] = useUser();

  const handleCTAPress = () => {
    if (user) {
      navigation.navigate('InputFriendBaseInfo');
    } else {
      navigation.navigate('Auth', {
        screen: 'InputPhoneNum',
        params: {to: 'InputFriendBaseInfo'},
      });
    }
  };

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={52} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <Text typography={Typography.Headline_1_B}>
            {'어떤 친구인지 너무 기대돼 🥰'}
          </Text>
          <Spacing height={20} />
          <Text typography={Typography.Headline_1_B}>
            {'내친소는 친구의 추천사가 있는\n사람만 이용이 가능하거든'}
          </Text>
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>
          추천사 쓰러가기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;
