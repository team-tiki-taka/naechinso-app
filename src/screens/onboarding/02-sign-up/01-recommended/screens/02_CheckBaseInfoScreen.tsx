import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAContainer, ToggleButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {fetchMyRecommend} from '@remotes/recommend';
import {startSignUp} from '@remotes/sign-up/startSignUp';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';
import {ParamList} from '../routes-types';

import ic_men_white from '@assets/icons/ic_men_white.png';
import ic_men_black40 from '@assets/icons/ic_men_black40.png';

import ic_women_white from '@assets/icons/ic_women_white.png';
import ic_women_black40 from '@assets/icons/ic_women_black40.png';
import {Gender} from '@models/Gender';

export const CheckBaseInfoScreen = () => {
  const navigation = useNavigation<ParamList>();

  const [user] = useUser();
  const {data, append} = useSignUpFlowCache();

  const [userBaseInfo, setUserBaseInfo] = useState<UserBaseInfo>();

  useEffect(() => {
    fetchMyRecommend().then(res => {
      setUserBaseInfo({
        name: res.recommendReceived[0].name,
        age: res.recommendReceived[0].age,
        gender: res.recommendReceived[0].gender,
      });
      console.log(res.recommendReceived);
    });
  }, []);

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
    defaultValues: {
      name: userBaseInfo?.name,
      age: userBaseInfo?.age,
      gender: userBaseInfo?.gender,
    },
  });

  const {getValues} = controls;

  const submit = useAsyncCallback(async (info: UserBaseInfo) => {
    if (!user) {
      await startSignUp({...info, ...data.agreeState});
    }
    navigation.navigate('InputHeight');
    const values = getValues();
    console.log('values : ', values);
    append({
      userInfo: {
        ...data.userInfo,
        name: userBaseInfo?.name,
        age: userBaseInfo?.age,
        gender: userBaseInfo?.gender,
      },
    });
  });

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
          {/* <UserBaseInfoForm controls={controls} /> */}
          <StyledAgeContainer>
            <Text typography={Typography.Body_1_M} color={colors.black40}>
              이름
            </Text>
            <Text typography={Typography.Subtitle_1_B} color={colors.black}>
              {userBaseInfo?.name}
            </Text>
          </StyledAgeContainer>
          <Spacing height={16} />
          <StyledAgeContainer>
            <Text typography={Typography.Body_1_M} color={colors.black40}>
              나이
            </Text>
            <Text typography={Typography.Subtitle_1_B} color={colors.black}>
              {userBaseInfo?.age}
            </Text>
          </StyledAgeContainer>

          <Spacing height={16} />
          <Flex.CenterVertical direction="row">
            <StyledToggleButton
              type="brownBlack"
              size="medium"
              active={userBaseInfo?.gender === Gender.MALE}
              center>
              <StyledIcon
                source={
                  userBaseInfo?.gender === Gender.MALE
                    ? ic_men_white
                    : ic_men_black40
                }
              />
              <Spacing width={4} />
              남자
            </StyledToggleButton>
            <Spacing width={15} />
            <StyledToggleButton
              type="brownBlack"
              size="medium"
              active={userBaseInfo?.gender === Gender.FEMALE}
              center>
              <StyledIcon
                source={
                  userBaseInfo?.gender === Gender.FEMALE
                    ? ic_women_white
                    : ic_women_black40
                }
              />
              <Spacing width={4} />
              여자
            </StyledToggleButton>
          </Flex.CenterVertical>
        </StyledInnerContainer>
        <BottomCTAContainer>
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
              loading={submit.isLoading}
              onPress={controls.handleSubmit(submit.callback)}>
              맞아
            </ToggleButton>
          </Flex>
        </BottomCTAContainer>
      </Flex>
    </Screen>
  );
};

const StyledToggleButton = styled(ToggleButton)`
  flex: 1;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const StyledAgeContainer = styled.View`
  display: flex;
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  border-width: 1px;
  border-color: ${colors.neural};
`;
