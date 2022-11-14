import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {RecommendParamList} from '..';
import {ScreenProps} from '../routes-types';

import mainImage from '@assets/images/img_give_recommend.png';
import layout from '@constants/layout';

export const IntroScreen = ({route}: ScreenProps<'Intro'>) => {
  const navigation = useNavigation<RecommendParamList>();
  const [user] = useUser();
  const uuid = route.params?.uuid;
  const [, update] = useRecommendFlowCache();

  useEffect(() => {
    update({uuid});
  }, [uuid]);

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
          <Spacing height={52} />
          <Flex.CenterVertical>
            <StyledImage resizeMode={'contain'} source={mainImage} />
          </Flex.CenterVertical>
          <Spacing height={64} />
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress} floating>
          추천사 쓰러가기
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${layout.screen.width * 0.8}px;
  resize-mode: contain;
`;
