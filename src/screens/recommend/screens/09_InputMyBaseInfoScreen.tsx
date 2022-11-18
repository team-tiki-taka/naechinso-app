import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {startSignUp} from '@remotes/sign-up';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView} from 'react-native';
import {RecommendParamList} from '..';
import {useFinishRecommend} from '../hooks/useFinishRecommend';

export const InputMyBaseInfoScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const [user, reload] = useUser();
  const finish = useFinishRecommend();

  const submit = useAsyncCallback(async (data: UserBaseInfo) => {
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
      }).catch(() => {
        navigation.navigate('SelectVerifyMethod');
      });
      await reload();
    }
    if (!user?.eduAccepted && !user?.jobAccepted) {
      navigation.navigate('SelectVerifyMethod');
      return;
    }
    await finish();
  });

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <ScrollView>
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
        </Flex>
        <Spacing height={100} />
      </ScrollView>
      <BottomCTAButton
        floating
        disabled={!controls.formState.isValid}
        loading={submit.isLoading}
        onPress={controls.handleSubmit(submit.callback)}>
        다음
      </BottomCTAButton>
    </Screen>
  );
};
