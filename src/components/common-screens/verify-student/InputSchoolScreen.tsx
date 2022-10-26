import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useWheelPickerSheet} from '@hooks/form';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styled from 'styled-components/native';
import {SchoolType} from '../../../models/SchoolType';

const SCHOOL_TYPE = {
  [SchoolType.UNIV]: '대학교',
  [SchoolType.HIGH]: '고등학교',
  [SchoolType.MID]: '중학교',
};

interface SchoolInfo {
  name: string;
  type: SchoolType;
  major: string;
}

export function CommonInputSchoolScreen({
  onConfirm,
}: {
  onConfirm: (data: SchoolInfo) => void;
}) {
  const {control, formState, watch, handleSubmit} = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      type: SchoolType.UNIV,
      major: '',
    },
  });

  const selectSchoolType = usePickSchoolType();
  const schoolType = watch('type');

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🏫\n최종 학력을 적어줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex direction="row" justify="space-between">
            <Controller
              control={control}
              name="name"
              rules={{required: true}}
              render={({field}) => (
                <TextField
                  containerStyle={{minWidth: '50%'}}
                  label={'학교명'}
                  value={field.value}
                  onChangeText={field.onChange}
                />
              )}
            />
            <Spacing width={12} />

            <Controller
              control={control}
              name="type"
              rules={{required: true}}
              render={({field}) => (
                <StyledSchoolTypeContainer
                  onPress={() => selectSchoolType().then(field.onChange)}>
                  <Text typography={Typography.Body_1_M} color={colors.black40}>
                    학교
                  </Text>
                  <Flex.CenterVertical direction="row">
                    <Text
                      typography={Typography.Subtitle_1_B}
                      color={colors.black}>
                      {SCHOOL_TYPE[field.value]}
                    </Text>
                    <Spacing width={24} />
                    <Icon
                      style={{transform: [{rotate: '180deg'}]}}
                      source={require('@assets/icons/ic_chevron_down_black.png')}
                    />
                  </Flex.CenterVertical>
                </StyledSchoolTypeContainer>
              )}
            />
          </Flex>
          {schoolType === SchoolType.UNIV && (
            <Controller
              control={control}
              name="major"
              rules={{required: true}}
              render={({field}) => (
                <React.Fragment>
                  <Spacing height={16} />
                  <TextField
                    label={'전공'}
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                </React.Fragment>
              )}
            />
          )}
        </StyledInnerContainer>
        <BottomCTAButton
          disabled={!formState.isValid}
          onPress={handleSubmit(onConfirm)}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}

function usePickSchoolType() {
  return useWheelPickerSheet(
    '최종 학력을 선택해줘',
    Object.values(SchoolType).map(type => ({
      label: SCHOOL_TYPE[type],
      value: type,
    })),
    SchoolType.UNIV,
  );
}

const StyledSchoolTypeContainer = styled.TouchableOpacity`
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

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
