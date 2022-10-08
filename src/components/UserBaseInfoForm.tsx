import {ToggleButton} from '@components/button/ToggleButton';
import {TextField} from '@components/form';
import {Flex} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import {Gender} from '@models/Gender';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {View} from 'react-native';
import styled from 'styled-components/native';

export function UserBaseInfoForm({
  controls: {control},
  namePlaceholder = '이름을 입력해줘',
  agePlaceholder = '25-33살만 이용 가능해',
}: {
  controls: UseFormReturn<UserBaseInfo>;
  namePlaceholder?: string;
  agePlaceholder?: string;
}) {
  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({field}) => (
          <TextField
            label="이름"
            placeholder={namePlaceholder}
            value={field.value}
            onChangeText={field.onChange}
            error="가나다라"
          />
        )}
      />
      <Spacing height={16} />
      <Controller
        control={control}
        name="age"
        rules={{validate: i => i >= 25 && i <= 33}}
        render={({field}) => (
          <TextField
            label="나이"
            placeholder={agePlaceholder}
            keyboardType="number-pad"
            value={field.value ? String(field.value) : undefined}
            onChangeText={text =>
              field.onChange(Number(text.replace(/[^0-9]/g, '')))
            }
          />
        )}
      />
      <Spacing height={16} />
      <Controller
        control={control}
        name="gender"
        render={({field}) => (
          <Flex.CenterVertical direction="row">
            <StyledToggleButton
              type="brownBlack"
              active={field.value === Gender.MALE}
              center
              onPress={() => field.onChange(Gender.MALE)}>
              <StyledIcon
                source={
                  field.value === Gender.MALE
                    ? require('../assets/icons/ic_men_white.png')
                    : require('../assets/icons/ic_men_black40.png')
                }
              />
              <Spacing width={4} />
              남자
            </StyledToggleButton>
            <Spacing width={15} />
            <StyledToggleButton
              type="brownBlack"
              active={field.value === Gender.FEMALE}
              center
              onPress={() => field.onChange(Gender.FEMALE)}>
              <StyledIcon
                source={
                  field.value === Gender.FEMALE
                    ? require('../assets/icons/ic_women_white.png')
                    : require('../assets/icons/ic_women_black40.png')
                }
              />
              <Spacing width={4} />
              여자
            </StyledToggleButton>
          </Flex.CenterVertical>
        )}
      />
    </View>
  );
}
const StyledToggleButton = styled(ToggleButton)`
  flex: 1;
`;
const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
