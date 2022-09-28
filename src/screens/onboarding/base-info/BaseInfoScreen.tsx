import {Flex} from '@components/Flex';
import Screen from '@components/Screen';
import {Spacing} from '@components/Spacing';
import {Text, Typography} from '@components/text';
import {TextField} from '@components/TextField';
import {ToggleButton} from '@components/ToggleButton';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styled from 'styled-components/native';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export function BaseInfoScreen() {
  const {control} = useForm({mode: 'all'});

  return (
    <Screen>
      <Spacing height={52} />
      <InnerContainer>
        <Text typography={Typography.Headline_1_B}>
          추천사 부탁 전에{'\n'}너의 정보를 살짝 알려줄래? 👀
        </Text>
        <Spacing height={24} />
        <Controller
          control={control}
          name="name"
          render={({field}) => (
            <TextField
              label="이름"
              placeholder="이름을 입력해주세요"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Spacing height={16} />
        <Controller
          control={control}
          name="age"
          render={({field}) => (
            <TextField
              label="나이"
              placeholder="25-33살만 이용 가능해"
              keyboardType="number-pad"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Spacing height={16} />
        <Controller
          control={control}
          name="male"
          render={({field}) => (
            <Flex.CenterVertical direction="row">
              <StyledToggleButton
                active={field.value === Gender.MALE}
                center
                onPress={() => field.onChange(Gender.MALE)}>
                <StyledIcon
                  source={
                    field.value === Gender.MALE
                      ? require('../../../assets/icons/ic_men_white.png')
                      : require('../../../assets/icons/ic_men_black40.png')
                  }
                />
                <Spacing width={4} />
                남자
              </StyledToggleButton>
              <Spacing width={15} />
              <StyledToggleButton
                active={field.value === Gender.FEMALE}
                center
                onPress={() => field.onChange(Gender.FEMALE)}>
                <StyledIcon
                  source={
                    field.value === Gender.FEMALE
                      ? require('../../../assets/icons/ic_women_white.png')
                      : require('../../../assets/icons/ic_women_black40.png')
                  }
                />
                <Spacing width={4} />
                여자
              </StyledToggleButton>
            </Flex.CenterVertical>
          )}
        />
      </InnerContainer>
    </Screen>
  );
}

const InnerContainer = styled.View`
  padding-horizontal: 24px;
`;

const StyledToggleButton = styled(ToggleButton)`
  flex: 1;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
