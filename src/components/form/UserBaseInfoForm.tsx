import {ToggleButton} from '@components/button/ToggleButton';
import {TextField} from '@components/form';
import {Flex} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import {Gender} from '@models/Gender';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useWheelPickerSheet} from '@hooks/form';
import {Text, Typography} from '../text';
import colors from '@constants/color';
import {range} from 'lodash';

const year = new Date().getFullYear();
const ages = range(year - 34, year - 23).map(item => ({
  label: item.toString(),
  value: item,
}));

export function UserBaseInfoForm({
  controls: {control},
  namePlaceholder = '이름을 입력해줘',
  agePlaceholder = '88-98년생만 이용할 수 있어',
}: {
  controls: UseFormReturn<UserBaseInfo>;
  namePlaceholder?: string;
  agePlaceholder?: string;
}) {
  const open = useWheelPickerSheet(
    '태어난 년도', //타이틀
    ages,
    1998, // 기본값
  );

  return (
    <ScrollView>
      <Controller
        control={control}
        name="name"
        rules={{required: true}}
        render={({field}) => (
          <TextField
            label="이름"
            placeholder={namePlaceholder}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Spacing height={16} />
      <Controller
        control={control}
        name="age"
        rules={{required: true}}
        render={({field}) => {
          const setAge = async () => {
            const value = await open();
            field.onChange(value);
          };

          return (
            <StyledAgeContainer
              onPress={() => {
                setAge();
              }}>
              <Text typography={Typography.Body_1_M} color={colors.black40}>
                태어난 년도
              </Text>
              <Text
                typography={Typography.Subtitle_1_B}
                color={
                  field.value === undefined ? colors.black20 : colors.black
                }>
                {field.value === undefined ? agePlaceholder : field.value}
              </Text>
            </StyledAgeContainer>
          );
        }}
      />
      <Spacing height={16} />
      <Controller
        control={control}
        name="gender"
        rules={{required: true}}
        render={({field}) => (
          <Flex.CenterVertical direction="row">
            <StyledToggleButton
              type="brownBlack"
              size="medium"
              active={field.value === Gender.MALE}
              center
              onPress={() => field.onChange(Gender.MALE)}>
              <StyledIcon
                source={
                  field.value === Gender.MALE
                    ? require('@assets/icons/ic_men_white.png')
                    : require('@assets/icons/ic_men_black40.png')
                }
              />
              <Spacing width={4} />
              남자
            </StyledToggleButton>
            <Spacing width={15} />
            <StyledToggleButton
              type="brownBlack"
              size="medium"
              active={field.value === Gender.FEMALE}
              center
              onPress={() => field.onChange(Gender.FEMALE)}>
              <StyledIcon
                source={
                  field.value === Gender.FEMALE
                    ? require('@assets/icons/ic_women_white.png')
                    : require('@assets/icons/ic_women_black40.png')
                }
              />
              <Spacing width={4} />
              여자
            </StyledToggleButton>
          </Flex.CenterVertical>
        )}
      />
    </ScrollView>
  );
}

const StyledToggleButton = styled(ToggleButton)`
  flex: 1;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const StyledAgeContainer = styled.TouchableOpacity`
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
