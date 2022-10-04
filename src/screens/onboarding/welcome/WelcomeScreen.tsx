import {FadeAnimation} from '@components/animation';
import {Spacing} from '@components/common';
import {Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import layout from '@constants/layout';
import {useStep} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import {sleep} from '@utils/sleep';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import styled from 'styled-components/native';

export function WelcomeScreen() {
  const step = useStep(0, 1);
  const navigation = useOnboardingNavigation();
  const next = async (visible: boolean) => {
    if (!visible) {
      return;
    }
    await sleep(2500);
    if (step.value === 1) {
      navigation.goBack();
      return;
    }
    step.next();
  };

  return (
    <Screen>
      <Container>
        <StyledFadeAnimation
          visible={step.value === 0}
          initialVisible={false}
          onFinish={next}>
          <AnimatedLottieView
            source={{
              uri: 'https://assets10.lottiefiles.com/packages/lf20_0znepsti.json',
            }}
            style={{
              width: layout.window.width,
              height: layout.window.width,
              position: 'absolute',
              marginBottom: 50,
            }}
            autoPlay
            loop={false}
          />
          <ProfileImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/87538540?v=4',
            }}
          />
          <Spacing height={32} />
          <Text typography={Typography.Headline_1_B} center>
            너의 멋진{'\n'}프로필이 완성됐어!
          </Text>
        </StyledFadeAnimation>
        <StyledFadeAnimation
          visible={step.value === 1}
          initialVisible={false}
          onFinish={next}
          delay={{fadeIn: 1000}}>
          <Text typography={Typography.Headline_1_B} center>
            이제 너만큼 멋진 사람들을{'\n'}만나러 가볼까?
          </Text>
        </StyledFadeAnimation>
      </Container>
    </Screen>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 130px;
`;

const StyledFadeAnimation = styled(FadeAnimation)`
  position: absolute;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
