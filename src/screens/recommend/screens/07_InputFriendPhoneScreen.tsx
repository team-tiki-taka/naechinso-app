import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {submitRecommend} from '@remotes/recommend';
import React, {useState} from 'react';
import {RecommendParamList} from '..';

export const InputFriendPhoneScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [info] = useRecommendFlowCache();

  const submit = useAsyncCallback(async () => {
    const data = {...info, friendPhoneNumber: phoneNum};
    const friendInfo = data.friendInfo!;
    await submitRecommend({
      age: friendInfo.age,
      appeals: friendInfo.personalities,
      appealDetail: data.friendPersonalityDetail!,
      gender: friendInfo.gender,
      meet: data.만난계기!,
      name: friendInfo.name,
      period: data.만난기간!,
      phone: data.friendPhoneNumber!,
    });
    navigation.navigate('StartSelfIntro');
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'친구의 휴대폰 번호를 알려줘'}
        subtitle={'추천사 작성이 완료되면\n휴대폰 번호를 통해 알림이 갈거야!'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'휴대폰 번호'}
            placeholder={'휴대폰 번호를 적어줘'}
            keyboardType="number-pad"
            value={phoneNum}
            onChangeText={setPhoneNum}
          />
        </StyledInnerContainer>

        <BottomCTAButton
          disabled={!phoneNum}
          onPress={submit.callback}
          loading={submit.isLoading}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
