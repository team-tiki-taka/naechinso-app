import {BottomCTAButton, BottomCTAContainer} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {MainStackScreenProps} from '@navigations/main';
import {fetchMatchingProfile} from '@remotes/card/fetchMathcingProfile';
import {first} from 'lodash';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {
  BaseInfoSection,
  InfoListSection,
  PhoneNumber,
  RecommendText,
} from './components';
import {StyledImage} from './components/StyledImage';

import {withSuspense} from '@hocs/withSuspense';
import {MatchingCard} from '@models/MatchingCard';
import {useQuery} from 'react-query';
import {ReportButton} from './ReportButton';

import {BottomToggleButton} from '@components/button/BottomToggleButton';
import {withProps} from '@hocs/withProps';
import {useBooleanState} from '@hooks/common';
import {
  acceptMatch,
  rejectReceivedMatch,
  requestOpenPhone,
} from '@remotes/matching';
import {MenuType} from '@screens/my-page/hooks';
import {getImageUrl} from '@utils/getImageUrl';
import styled from 'styled-components';

export const OtherProfileScreen = withSuspense(function OtherProfileScreen({
  route,
}: MainStackScreenProps<'Profile'> & JSX.IntrinsicAttributes) {
  const menu = route.params.menu;
  const id = route.params.id;
  const targetMemberId = route.params.targetMemberId;

  const [phoneIsOpened, setPhoneIsOpenedTrue] = useBooleanState(false);

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

  // 번호 오픈하기
  const onOpenPhoneNumber = () => {
    requestOpenPhone(id).then(res => {
      if (res.status === 'OPEN') {
        setPhoneIsOpenedTrue();
        const targetMemberId = res.targetMemberId;
        console.log(targetMemberId);
      }
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
  const imageUrl = first(user.images) && getImageUrl(first(user.images));

  return (
    <Screen>
      <AppBar right={<ReportButton id={id} />} />
      <ScrollView>
        {imageUrl ? (
          <StyledImage source={{uri: imageUrl}} />
        ) : (
          <EmptyBox>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri: 'https://static.renaissance.art/images/question.png',
              }}
            />
          </EmptyBox>
        )}
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfoSection user={user} />
          {phoneIsOpened && <PhoneNumber phoneNum={user?.phone} />}
          <RecommendText recommend={user?.recommend} />
          <InfoListSection user={user} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      {menu === MenuType.receivedHeart ? (
        <BottomCTAContainer backgrounded>
          <BottomToggleButton
            reject={{text: '정중히 거절', onPress: onRejectHeart}}
            accept={{text: '친구 신청 받기', onPress: onReceiveHeart}}
          />
        </BottomCTAContainer>
      ) : menu === MenuType.sendedHeart ? (
        <BottomCTAButton onPress={() => {}} disabled backgrounded>
          친구를 신청했어
        </BottomCTAButton>
      ) : menu === MenuType.completeHeart && phoneIsOpened === false ? (
        <BottomCTAContainer backgrounded>
          <BottomCTAButton onPress={onOpenPhoneNumber}>
            번호 오픈 🔒
          </BottomCTAButton>
        </BottomCTAContainer>
      ) : (
        <></>
      )}
    </Screen>
  );
});

const EmptyBox = styled(withProps(Flex.Center, {direction: 'column'}))`
  width: 100%;
  height: 375px;
  background: rgba(0, 0, 0, 0.1);
`;
