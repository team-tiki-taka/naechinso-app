import React from 'react';
import {BottomCTAButton, BottomCTAContainer} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Screen, StyledInnerContainer} from '@components/layout';
import {S3_URL} from '@constants/url';
import {MainStackScreenProps} from '@navigations/main';
import {fetchMatchingProfile} from '@remotes/card/fetchMathcingProfile';
import {first} from 'lodash';
import {ScrollView, View} from 'react-native';
import {BaseInfoSection, InfoListSection, RecommendText} from './components';
import {StyledImage} from './components/StyledImage';

import {withSuspense} from '@hocs/withSuspense';
import {MatchingCard} from '@models/MatchingCard';
import {useQuery} from 'react-query';
import {ReportButton} from './ReportButton';

import styled from 'styled-components/native';
import {acceptMatch, rejectReceivedMatch} from '@remotes/matching';
import {BottomToggleButton} from '@components/button/BottomToggleButton';

export const OtherProfileScreen = withSuspense(function OtherProfileScreen({
  route,
}: MainStackScreenProps<'Profile'>) {
  const menu = route.params.menu;
  const id = route.params.id;
  const targetMemberId = route.params.targetMemberId;

  // 호감 받기
  const onReceiveHeart = () => {
    acceptMatch(id).then(res => {
      console.log(res);
    });
  };

  // 호감 거절하기
  const onRejectHeart = () => {
    rejectReceivedMatch(id).then(res => {
      console.log(res);
    });
  };

  const {data: user} = useQuery<MatchingCard>(
    ['other-profile', id],
    () => fetchMatchingProfile(targetMemberId),
    {
      suspense: true,
      refetchOnMount: true,
    },
  );

  if (!user) {
    return <View />;
  }

  return (
    <Screen>
      <AppBar right={<ReportButton id={id} />} />
      <ScrollView>
        <StyledImage
          source={{
            uri: `${S3_URL}${first(user?.images)}`,
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfoSection user={user} />
          <RecommendText recommend={user?.recommend} />
          <InfoListSection user={user} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      {menu === '받은 호감' ? (
        <BottomCTAContainer backgrounded>
          <BottomToggleButton
            reject={{text: '정중히 거절', onPress: onRejectHeart}}
            accept={{text: '호감 받기', onPress: onReceiveHeart}}
          />
        </BottomCTAContainer>
      ) : menu === '보낸 호감' ? (
        <BottomCTAButton onPress={() => {}} disabled backgrounded>
          호감을 전달했어
        </BottomCTAButton>
      ) : (
        <BottomCTAContainer backgrounded>
          <BottomCTAButton onPress={() => {}}>번호 오픈 🔒</BottomCTAButton>
        </BottomCTAContainer>
      )}
    </Screen>
  );
});
