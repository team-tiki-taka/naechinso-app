import {pendingListState} from '@atoms/index';
import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {CollapsibleBox} from '@components/CollapsibleBox';
import {AppBar, Divider, Spacing} from '@components/common';
import {TextArea} from '@components/form';
import {
  AutoScrollView,
  Flex,
  Screen,
  StyledInnerContainer,
} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {withSuspense} from '@hocs/withSuspense';
import {useAsyncCallback} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import React, {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {useFinishRecommend} from '../hooks/useFinishRecommend';

export const InputFriendPersonalityDetailScreen = withSuspense(() => {
  const navigation = useOnboardingNavigation();
  const [personalityMore, setPersonalityMore] = useState<string>('');
  const [cache, update] = useRecommendFlowCache();
  const [user] = useUser();
  const pendingList = useRecoilValue(pendingListState);
  const finish = useFinishRecommend();

  const submit = useAsyncCallback(async () => {
    update(prev => ({...prev, friendPersonalityDetail: personalityMore}));
    if (!cache.uuid) {
      navigation.navigate('InputFriendPhone');
    } else if (!user || pendingList.every(i => !i.isAccepted)) {
      navigation.navigate('StartSelfIntro');
    } else {
      await finish();
      navigation.reset({index: 0, routes: [{name: 'ShareLink'}]});
    }
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'친구에 대해\n더 자랑할 게 있을까?'} />
      <Spacing height={10} />
      <Flex justify="space-between" style={{flex: 1}}>
        <AutoScrollView>
          <StyledInnerContainer>
            <CollapsibleBox title="👉🏻 어떻게 써야할지 잘 모르겠어?">
              <StyledInnerContainer paddingHorizontal={16}>
                <Flex direction="row">
                  <Text typography={Typography.Body_1_M}>❗</Text>
                  <Text typography={Typography.Body_1_M}>
                    {
                      '앞에서 선택한 친구의 매력에 대해 말해줘도\n좋고, 너만 아는 매력을 적어줘도 좋아!'
                    }
                  </Text>
                </Flex>
                <Spacing height={4} />
                <Flex direction="row">
                  <Text typography={Typography.Body_1_M}>❗</Text>
                  <Text typography={Typography.Body_1_M}>
                    {
                      '친구가 좋은 사람을 만날 수 있도록 자랑해줘.\n추천사가 친구의 매칭률에 중요한 영향을 미\n치거든'
                    }
                  </Text>
                </Flex>
                <Divider color={colors.black} marginVertical={12} />
                <Text typography={Typography.Body_1_B}>⬇️ 예시</Text>
                <Spacing height={12} />
                <Text typography={Typography.Body_1_M} color={colors.black40}>
                  {
                    '제은이는 내 전 직장 동기야!\n자기 일을 진짜 책임감 있게 잘하고 주변을 늘 먼저 생각하는 친구야. 사람한테 치이는 일이 힘들 텐데 내색하지 않고 밝게 웃는 제은이를 보면 존경스럽기까지 해!'
                  }
                </Text>
                <Spacing height={8} />
                <Text typography={Typography.Body_1_M} color={colors.black40}>
                  {
                    '그리고 제은이는 밝은 에너지를 가져서 같이 있으면 나도 덩달아 행복해지는 것 같아! 이쁜 건 말해 뭐해😌 '
                  }
                </Text>
                <Spacing height={8} />
                <Text typography={Typography.Body_1_M} color={colors.black40}>
                  {
                    '남에게 주기 너무 아깝지만 내 친구가 진짜 좋은 사람 만났으면 좋겠다!'
                  }
                </Text>
              </StyledInnerContainer>
            </CollapsibleBox>
            <Spacing height={24} />
            <TextArea
              value={personalityMore}
              onChangeText={setPersonalityMore}
              placeholder={'친구에게 말하듯 평어로 적어줘'}
            />
          </StyledInnerContainer>
        </AutoScrollView>
        <BottomCTAButton
          disabled={!personalityMore}
          loading={submit.isLoading}
          onPress={submit.callback}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
});
