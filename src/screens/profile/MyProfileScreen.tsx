import {BottomCTA, BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {withSuspense} from '@hocs/withSuspense';
import {useMainNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {BaseInfo, PersonalityBadge} from './components';

export interface UserInfo {
  name: string;
  age: string;
  address: string;
  company: string;
  jobName: string;
  school: string;
  major: string;
  personality: string[];
  religion: string;
  height: string;
  smoking: string;
  alcohol: string;
  MBTI: string;
  hobby: string;
  personalityMore: string;
  romanticStyle: string;
}

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
  MBTI: 'ENFP',
  hobby:
    '나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어나는 이런 취미를 가지고 있어',
  personalityMore:
    '이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어이런 이런 매력 포인트가 있어',
  romanticStyle:
    '나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어나는 이런 연애를 하고 싶어',
};

export const MyProfileScreen = withSuspense(function MyProfileScreen() {
  const navigation = useMainNavigation();
  const [user] = useUser(true);

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
          source={{
            uri: 'https://avatars.githubusercontent.com/u/87538540?v=4',
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfo user={user} />

          <Spacing height={36} />
          <ShortInfo
            title="성격"
            spacing={27}
            content={user.personality.map((value, idx) => (
              <React.Fragment key={idx}>
                <PersonalityBadge>{value}</PersonalityBadge>
                <Spacing width={10} />
              </React.Fragment>
            ))}
          />
          <ShortInfo title="종교" spacing={36} content={userInfo.religion} />
          <ShortInfo title="키(cm)" spacing={19} content={userInfo.height} />
          <ShortInfo title="흡연여부" spacing={12} content={userInfo.smoking} />
          <ShortInfo title="음주여부" spacing={12} content={userInfo.alcohol} />
          <Spacing height={42} />
          <LongInfo title="취미/관심사" spacing={4} content={userInfo.hobby} />
          <Spacing height={32} />
          <LongInfo
            title="남들보다 이건 내가 좀 낫지"
            spacing={4}
            content={userInfo.personalityMore}
          />
          <Spacing height={32} />
          <LongInfo
            title="어떤 연애를 하고 싶어?"
            spacing={4}
            content={userInfo.romanticStyle}
          />
          <Spacing height={54} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      <BottomCTA>
        <BottomCTAButton onPress={handleCTAPress} backgrounded>
          내 프로필 수정
        </BottomCTAButton>
      </BottomCTA>
    </Screen>
  );
});

const StyledImage = styled.Image`
  width: 100%;
  height: 375px;
`;

function ShortInfo({
  title,
  spacing,
  content,
}: {
  title: string;
  spacing: number;
  content: ReactNode | string;
}) {
  return (
    <>
      <Flex direction="row" align="center">
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {title}
        </Text>
        <Spacing width={spacing} />
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

function LongInfo({
  title,
  spacing,
  content,
}: {
  title: string;
  spacing: number;
  content: ReactNode | string;
}) {
  return (
    <>
      <Flex direction="column" justify="center">
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {title}
        </Text>
        <Spacing height={spacing} />
        <Text typography={Typography.Body_1_M}>{content}</Text>
      </Flex>
      <Spacing height={10} />
    </>
  );
}
