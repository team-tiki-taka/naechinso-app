import {
  allCardInChatState,
  sendedMatchListState,
  useLocalMatchingFlag,
} from '@atoms/matching';
import {BottomCTAContainer} from '@components/button';
import {BottomToggleButton} from '@components/button/BottomToggleButton';
import {AppBar, Spacing} from '@components/common';
import {useConfirmDialog} from '@components/dialog';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {withProps} from '@hocs/withProps';
import {withSuspense} from '@hocs/withSuspense';
import {MainStackScreenProps} from '@navigations/main';
import {fetchCardProfile, rejectCard, resolveCard} from '@remotes/card';
import {getNewCard} from '@remotes/card/getNewCard';
import {getImageUrl} from '@utils/getImageUrl';
import {first} from 'lodash';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {useQuery} from 'react-query';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import styled from 'styled-components';
import {BaseInfoSection, InfoListSection, RecommendText} from './components';
import {StyledImage} from './components/StyledImage';
import {ReportButton} from './ReportButton';

export const OtherProfileForSendHeartScreen = withSuspense(
  function OtherProfileForSendHeartScreen({
    route,
    navigation,
  }: MainStackScreenProps<'OtherProfileForSendHeart'>) {
    try {
      const id = route.params.id;
      const list = useRecoilValue(allCardInChatState);
      const card = list.find(i => i.targetMemberId === id);
      const profile = useCardProfile();
      const open = useConfirmDialog();
      const reload = useResetRecoilState(allCardInChatState);
      const update = useLocalMatchingFlag();
      const reloadSended = useResetRecoilState(sendedMatchListState);

      if (!profile || !card) {
        return <View />;
      }

      const handleConfirmPress = async () => {
        const isConfirm = await open({
          title: '호감을 보낼래? (썬구리 N개)',
          description: '찔러보는 걸 방지하기 위해 썬구리를 받아!',
          confirmText: '호감 보내기',
          cancelText: '취소',
        });
        if (!isConfirm) {
          return;
        }
        update(id, true);
        try {
          await resolveCard();
          await getNewCard().catch();
        } finally {
          reload();
          reloadSended();
          navigation.goBack();
        }
      };

      const handleCancelPress = async () => {
        const isConfirm = await open({
          title: '다른 친구를 소개 받을래?',
          description: '이 친구의 프로필은 영영 사라지게 돼..!',
          confirmText: '다른 친구 볼래',
          cancelText: '취소',
        });

        if (!isConfirm) {
          return;
        }
        update(id, false);
        try {
          await rejectCard();
          await getNewCard().catch();
        } finally {
          reload();
          reloadSended();
          navigation.goBack();
        }
      };
      const imageUrl =
        first(profile.images) && getImageUrl(first(profile.images));

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
              <BaseInfoSection user={profile} />
              <RecommendText recommend={card.recommend} />
              <InfoListSection user={profile} />
            </StyledInnerContainer>
            <Spacing height={70} />
          </ScrollView>
          <BottomCTAContainer backgrounded>
            <BottomToggleButton
              reject={{text: '다른 친구 소개', onPress: handleCancelPress}}
              accept={{text: '친구 신청', onPress: handleConfirmPress}}
            />
          </BottomCTAContainer>
        </Screen>
      );
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
);

function useCardProfile() {
  const query = useQuery('card-profile', fetchCardProfile, {
    refetchOnMount: true,
    suspense: true,
  });
  return query.data;
}

const EmptyBox = styled(withProps(Flex.Center, {direction: 'column'}))`
  width: 100%;
  height: 375px;
  background: rgba(0, 0, 0, 0.1);
`;
