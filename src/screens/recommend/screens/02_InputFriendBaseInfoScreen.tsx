import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useOnboardingNavigation} from '@hooks/navigation';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';

export const InputFriendBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();
  const [info, update] = useRecommendFlowCache();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const submit = (data: UserBaseInfo) => {
    update(prev => ({...prev, friendInfo: data}));
    navigation.navigate('Input만난계기');
  };

  useEffect(() => {
    if (info.uuid) {
      navigation.reset({index: 0, routes: [{name: 'Input만난계기'}]});
    }
  }, []);

  if (info.uuid) {
    return <View />;
  }

  return (
    <Screen>
      <Spacing height={56} />
      <ScrollView>
        <PageHeader title={'소개할 친구의 정보를\n살짝 알려줄래?'} />
        <Spacing height={24} />
        <Flex justify="space-between" style={{flex: 1}}>
          <StyledInnerContainer>
            <UserBaseInfoForm controls={controls} />
          </StyledInnerContainer>
        </Flex>
        <Spacing height={100} />
      </ScrollView>

      <BottomCTAButton
        floating
        disabled={!controls.formState.isValid}
        onPress={controls.handleSubmit(submit)}>
        다음
      </BottomCTAButton>
    </Screen>
  );
};
