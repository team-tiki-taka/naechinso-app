import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {Shadow} from 'react-native-shadow-2';

import img_recommend_person from '@assets/images/img_recommend_person.png';

export const StartSelfIntroScreen = () => {
  const navigation = useOnboardingNavigation();

  const handleCTAPress = () => {
    navigation.navigate('InputMyBaseInfo');
  };
  return (
    <Screen>
      <LinearGradient
        colors={['#F6F5F2', 'rgba(246, 245, 242, 0)']}
        locations={[0, 0.5]}
        style={{flex: 1}}>
        <AppBar />
        <PageHeader
          title={'친구를 정성들여\n소개해줘서 고마워 🙏🏻'}
          subtitle={
            '내친소는 신뢰를 기반으로 하고 있는데\n너에 대해서도 살짝 소개해줄래?'
          }
        />
        <Flex justify="space-between" style={{flex: 1}}>
          <StyledInnerContainer>
            <Spacing height={32} />
            <ExampleCard />
          </StyledInnerContainer>
          <BottomCTAButton onPress={handleCTAPress}>
            내 소개 하기
          </BottomCTAButton>
        </Flex>
      </LinearGradient>
    </Screen>
  );
};

function ExampleCard() {
  return (
    <StyledShadow
      startColor="#5e616a1a"
      offset={[0, 3.5]}
      distance={5}
      sides={{
        start: true,
        end: true,
        top: true,
        bottom: true,
      }}
      corners={{
        topStart: true,
        topEnd: true,
        bottomStart: true,
        bottomEnd: true,
      }}>
      {/* <StyledExampleCard> */}
      <StyledExample>
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          예시
        </Text>
      </StyledExample>
      <Spacing height={16} />
      <Flex.CenterVertical direction="row" justify="space-around">
        <Flex>
          <Flex.CenterVertical direction="row">
            <Text typography={Typography.Subtitle_1_B} color={colors.black}>
              내*소
            </Text>
            <Spacing width={6} />
            <StyledGender>
              <Text typography={Typography.Body_2_M} color={colors.white}>
                여
              </Text>
            </StyledGender>
          </Flex.CenterVertical>
          <Text typography={Typography.Body_2_M} color={colors.black40}>
            이름 가운데는 * 처리돼
          </Text>
        </Flex>
        <StyledProfileImage source={img_recommend_person} />
      </Flex.CenterVertical>
      <Spacing height={32} />
      <DashedLine
        dashLength={10}
        dashThickness={4}
        dashGap={10}
        dashColor={colors.neural}
      />
      <Spacing height={32} />
      <StyledIntroduction>
        <Text typography={Typography.Subtitle_1_B} color={colors.black}>
          {'삼성전자에서\n마케팅을 맡고 있는\n내*소 입니다.'}
        </Text>
        <Spacing height={4} />
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {'입력한 정보는 이렇게 노출돼'}
        </Text>
      </StyledIntroduction>
      {/* </StyledExampleCard> */}
    </StyledShadow>
  );
}

const StyledShadow = styled(Shadow)`
  background-color: ${colors.white};
  border-radius: 16px;
  width: 100%;
`;

const StyledExampleCard = styled.View`
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: 0px 3.5px 5px #5e616a1a;
  elevation: 3;
`;

const StyledExample = styled(Flex.Center)`
  width: 89px;
  height: 32px;
  background-color: ${colors.neural};
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const StyledGender = styled(Flex.Center)`
  width: 20px;
  height: 20px;
  background-color: ${colors.error};
  border-radius: 4px;
`;

const StyledProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

const StyledIntroduction = styled.View`
  padding-left: 32px;
  padding-bottom: 32px;
`;
