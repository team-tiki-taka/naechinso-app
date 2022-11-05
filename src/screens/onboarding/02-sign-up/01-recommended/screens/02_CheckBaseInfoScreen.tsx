import {useSignUpFlowCache} from '@atoms/onboarding';
import {ToggleButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {fetchMyRecommend} from '@remotes/recommend';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {ParamList} from '../routes-types';

export const CheckBaseInfoScreen = () => {
  const [user] = useUser();
  const navigation = useNavigation<ParamList>();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
    defaultValues: user,
  });

  const {getValues} = controls;

  const {data, append} = useSignUpFlowCache();

  const getMyRecommend = async () => {
    const {recommendReceived} = await fetchMyRecommend();

    return Promise.resolve(recommendReceived[0]);
  };

  useEffect(() => {
    getMyRecommend().then(res => {
      if (res) {
        controls.setValue('name', res?.name);
        controls.setValue('age', res?.age);
        controls.setValue('gender', res?.gender);
      }
    });
  }, []);

  const handleValidButton = () => {
    navigation.navigate('InputHeight');
    const values = getValues();
    append({
      userInfo: {
        ...data.userInfo,
        name: values.name,
        age: values.age,
        gender: values.gender,
      },
    });
  };

  const handleInValidButton = () => {
    navigation.navigate('InvalidInfo');
  };

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader
        title={'자기소개 전에\n친구가 네 정보를\n살짝 알려줬는데 맞아?'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
        <Flex direction="row" justify="space-evenly">
          <ToggleButton
            style={{width: '40%'}}
            center
            onPress={controls.handleSubmit(handleInValidButton)}>
            아니야
          </ToggleButton>
          <ToggleButton
            active
            style={{width: '40%'}}
            center
            onPress={controls.handleSubmit(handleValidButton)}>
            맞아
          </ToggleButton>
        </Flex>
      </Flex>
    </Screen>
  );
};
