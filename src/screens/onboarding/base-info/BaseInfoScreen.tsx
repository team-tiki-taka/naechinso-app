import {useSignupBaseInfo} from '@atoms/signup';
import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common/Spacing';
import {Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {UserBaseInfoForm} from '@components/UserBaseInfoForm';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {SignupStackScreenProps} from '@navigations/onboarding/parts/signup';
import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';

export function BaseInfoScreen({
  navigation,
}: SignupStackScreenProps<'BaseInfo'>) {
  const [prevData, update] = useSignupBaseInfo();
  const controls = useForm<UserBaseInfo>({
    mode: 'all',
    defaultValues: prevData,
  });
  const submit = (data: UserBaseInfo) => {
    update(data);

    // @TODO 유저 상태에 따라 라우팅
    navigation.navigate('');
  };

  return (
    <Screen>
      <Spacing height={52} />
      <InnerContainer>
        <Text typography={Typography.Headline_1_B}>
          추천사 부탁 전에{'\n'}너의 정보를 살짝 알려줄래? 👀
        </Text>
        <Spacing height={24} />
        <UserBaseInfoForm controls={controls} />
        <Spacing height={24} />
      </InnerContainer>
      <BottomCTAButton onPress={controls.handleSubmit(submit)}>
        다음
      </BottomCTAButton>
    </Screen>
  );
}

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  flex: 1;
`;
