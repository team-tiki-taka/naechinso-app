import {allMatchesState} from '@atoms/matching';
import {BottomCTAButton, BottomCTAContainer} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Screen, StyledInnerContainer} from '@components/layout';
import {S3_URL} from '@constants/url';
import {MainStackScreenProps} from '@navigations/main';
import {fetchMatchingProfile} from '@remotes/card/fetchMathcingProfile';
import {fetchSendedMatches} from '@remotes/matching';
import {first} from 'lodash';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {BaseInfoSection, InfoListSection, RecommendText} from './components';
import {StyledImage} from './components/StyledImage';

import {ReportButton} from './ReportButton';
import {sendedMatchState} from '../../atoms/matching/matches';
import {MatchingCard} from '@models/MatchingCard';

export function OtherProfileScreen({route}: MainStackScreenProps<'Profile'>) {
  const id = route.params.id;

  const [user, setUser] = useState<MatchingCard>();

  useEffect(() => {
    fetchMatchingProfile(id)
      .then(res => {
        setUser(res);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

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
      {/* <BottomCTA backgrounded>
        <BottomToggleButton
          reject={{text: '정중히 거절', onPress: () => {}}}
          accept={{text: '호감 받기', onPress: () => {}}}
        />
      </BottomCTA> */}

      {/* <BottomCTA backgrounded>
        <BottomCTAButton onPress={() => {}}>번호 오픈 🔒</BottomCTAButton>
      </BottomCTA> */}

      <BottomCTAContainer backgrounded>
        <BottomCTAButton onPress={() => {}} disabled>
          호감을 전달했어
        </BottomCTAButton>
      </BottomCTAContainer>
    </Screen>
  );
}
