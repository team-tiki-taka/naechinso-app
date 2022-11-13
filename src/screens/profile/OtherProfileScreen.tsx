import React from 'react';
import {BottomCTAButton} from '@components/button';
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

export const OtherProfileScreen = withSuspense(function OtherProfileScreen({
  route,
}: MainStackScreenProps<'Profile'>) {
  const id = route.params.id;

  const {data: user} = useQuery<MatchingCard>(
    ['other-profile', id],
    () => fetchMatchingProfile(id),
    {
      suspense: true,
      refetchOnMount: true,
    },
  );

  if (!user) {
    return <View />;
  }

  console.log('other image', `${S3_URL}${first(user?.images)}`);

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
      {/* <BottomCTA backgrounded>
        <BottomToggleButton
          reject={{text: '정중히 거절', onPress: () => {}}}
          accept={{text: '호감 받기', onPress: () => {}}}
        />
      </BottomCTA> */}

      {/* <BottomCTA backgrounded>
        <BottomCTAButton onPress={() => {}}>번호 오픈 🔒</BottomCTAButton>
      </BottomCTA> */}

      <BottomCTAButton onPress={() => {}} disabled backgrounded>
        호감을 전달했어
      </BottomCTAButton>
    </Screen>
  );
});
