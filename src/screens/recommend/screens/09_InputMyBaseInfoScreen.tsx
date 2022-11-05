import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {submitRecommend} from '@remotes/recommend';
import {startSignUp} from '@remotes/sign-up';
import React from 'react';
import {useForm} from 'react-hook-form';
import {RecommendParamList} from '..';

export const InputMyBaseInfoScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const [, update] = useRecommendFlowCache();
  const [recommend] = useRecommendFlowCache();
  const [user, reload] = useUser();
  const submit = async (data: UserBaseInfo) => {
    update(prev => ({...prev, info: data}));
    if (!user) {
      await startSignUp({
        acceptsInfo: true,
        acceptsLocation: true,
        acceptsMarketing: true,
        acceptsReligion: true,
        acceptsService: true,
        age: data.age,
        gender: data.gender,
        name: data.name,
      });
      await reload();
    }

    const friendInfo = recommend.friendInfo!;
    await submitRecommend({
      age: Number(friendInfo.age),
      appeals: recommend.friendPersonality ?? [],
      appealDetail: recommend.friendPersonalityDetail!,
      gender: friendInfo.gender,
      meet: recommend.만난계기!,
      name: friendInfo.name,
      period: recommend.만난기간!,
      phone: recommend.friendPhoneNumber!,
    });
    navigation.navigate('SelectVerifyMethod');
  };

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'너에 대해서도 살짝 소개해줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm
            controls={controls}
            namePlaceholder={'이름 가운데는 *처리돼'}
            agePlaceholder={'나이는 공개되지 않아'}
          />
        </StyledInnerContainer>
        <BottomCTAButton
          disabled={!controls.formState.isValid}
          onPress={controls.handleSubmit(submit)}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
