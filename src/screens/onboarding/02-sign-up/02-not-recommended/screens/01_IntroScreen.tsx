import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import styled from 'styled-components/native';
import {ParamList} from '../routes-types';

import mainImage from '@assets/images/img_take_recommend.png';
import layout from '@constants/layout';

export const IntroScreen = () => {
  const navigation = useNavigation<ParamList>();

  const handleCTAPress = () => {
    navigation.navigate('InputBaseInfo');
  };

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={56} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <Text typography={Typography.Headline_1_B}>
            {'내친소를 시작하려면\n친구에게 추천사를 받아야 해'}
          </Text>
          <Flex.Center style={{flex: 1}}>
            <StyledImage source={mainImage} />
          </Flex.Center>
          <Spacing height={56} />
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>
          추천사 부탁하기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  flex: 1;
  padding-horizontal: 24px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${layout.screen.width}px;
`;
