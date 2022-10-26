import React from 'react';
import {Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {ScrollView} from 'react-native';
import {StyledImage} from './components/profile/StyledImage';
import {BaseInfo, InfoList, RecommendText} from './components/profile';
import {BottomCTA, BottomCTAButton} from '@components/button';
import {BottomToggleButton} from '@components/button/BottomToggleButton';
import {recommend, UserInfoType} from './ReceiveHeartScreen';

const userInfo: UserInfoType = {
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

export function SendHeartScreen() {
  return (
    <Screen>
      <AppBar />
      <ScrollView>
        <StyledImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/87538540?v=4',
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfo userInfo={userInfo} />
          <RecommendText recommend={recommend} />
          <InfoList userInfo={userInfo} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      <BottomCTA backgrounded>
        <BottomCTAButton onPress={() => {}} disabled>
          호감을 전달했어
        </BottomCTAButton>
      </BottomCTA>
    </Screen>
  );
}
