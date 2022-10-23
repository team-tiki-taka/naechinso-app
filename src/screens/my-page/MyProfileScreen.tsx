import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useMainNavigation} from '@hooks/navigation';
import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export function MyProfileScreen() {
  const navigation = useMainNavigation();
  const userInfo = {
    name: '박*영',
    age: '00년생',
    address: '서울시 성동구',
    company: '직장명(위치)',
    jobName: '직무명',
    school: '학교이름',
    major: '전공명',
    personality: ['유머있는 🥸', '낙천적인 😇', '4차원인 👽'],
    religion: '무교',
    height: '182',
    smoking: '비흡연',
    alcohol: '어느 정도 즐김',
    hobby:
      '나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어',
    personalityMore:
      '이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어',
    romanticStyle:
      '나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어',
  };

  const handleCTAPress = () => {
    navigation.navigate('ModifyMyProfile');
  };

  return (
    <Screen>
      <AppBar
        title={
          <Flex.CenterHorizontal direction="row">
            <Text typography={Typography.Body_1_B}>내 프로필</Text>
            <Spacing width={40} />
          </Flex.CenterHorizontal>
        }
      />
      <ScrollView>
        <StyledImage
          source={{uri: 'https://avatars.githubusercontent.com/u/87538540?v=4'}}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <Flex.CenterVertical direction="row">
            <Text typography={Typography.Headline_1_B}>{userInfo.name}</Text>
            <Spacing width={12} />
            <Text typography={Typography.Body_1_M} color={colors.black40}>
              {userInfo.age}, {userInfo.address}
            </Text>
          </Flex.CenterVertical>
          <Spacing height={18} />
          <Flex>
            <VerifyText>
              {userInfo.company} / {userInfo.jobName}
            </VerifyText>
            <VerifyText>
              {userInfo.school} / {userInfo.major}
            </VerifyText>
          </Flex>
          <Spacing height={36} />
          <SimpleInfo
            title="성격"
            spacing={27}
            content={userInfo.personality.map((value, idx) => (
              <React.Fragment key={idx}>
                <PersonalityWrapper>
                  <Text typography={Typography.Body_2_M}>{value}</Text>
                </PersonalityWrapper>
                <Spacing width={10} />
              </React.Fragment>
            ))}
          />
          <SimpleInfo title="종교" spacing={36} content={userInfo.religion} />
          <SimpleInfo title="키(cm)" spacing={19} content={userInfo.height} />
          <SimpleInfo
            title="흡연여부"
            spacing={12}
            content={userInfo.smoking}
          />
          <SimpleInfo
            title="음주여부"
            spacing={12}
            content={userInfo.alcohol}
          />
          <Spacing height={42} />
          <SimpleInfo
            title="취미/관심사"
            spacing={4}
            content={userInfo.hobby}
            type="complex"
          />
          <Spacing height={32} />
          <SimpleInfo
            title="남들보다 이건 내가 좀 낫지"
            spacing={4}
            content={userInfo.personalityMore}
            type="complex"
          />
          <Spacing height={32} />
          <SimpleInfo
            title="어떤 연애를 하고 싶어?"
            spacing={4}
            content={userInfo.romanticStyle}
            type="complex"
          />
          <Spacing height={54} />
        </StyledInnerContainer>
      </ScrollView>
      <StyledLinearGradient colors={['rgba(255,255,255,0.5)', '#ffffff']} />
      <BottomCTAButton onPress={handleCTAPress}>내 프로필 수정</BottomCTAButton>
    </Screen>
  );
}

const StyledImage = styled.Image`
  width: 100%;
  height: 375px;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

function VerifyText({children}: {children: ReactNode}) {
  return (
    <Flex direction="row">
      <StyledIcon source={require('@assets/images/img_check_yellow.png')} />
      <Spacing width={8} />
      <Text typography={Typography.Body_1_M} color={colors.black64}>
        {children}
      </Text>
    </Flex>
  );
}

function SimpleInfo({
  title,
  spacing,
  content,
  type = 'simple',
}: {
  title: string;
  spacing: number;
  content: ReactNode | string;
  type?: 'simple' | 'complex';
}) {
  return (
    <>
      <Flex
        direction={type === 'simple' ? 'row' : 'column'}
        justify={type === 'complex' ? 'center' : undefined}
        align={type === 'simple' ? 'center' : undefined}>
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {title}
        </Text>
        {type === 'simple' ? (
          <Spacing width={spacing} />
        ) : (
          <Spacing height={spacing} />
        )}

        {typeof content === 'string' ? (
          <Text typography={Typography.Body_1_M}>{content}</Text>
        ) : (
          content
        )}
      </Flex>
      <Spacing height={10} />
    </>
  );
}

const PersonalityWrapper = styled(Flex.Center)`
  width: 78px;
  height: 28px;
  background-color: ${colors.neural};
  border-radius: 6px;
`;

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;

const Gradation = styled.View`
  height: 24px;
  background-color: linear-gradient(to top, transparent, white 10%, white);
`;
