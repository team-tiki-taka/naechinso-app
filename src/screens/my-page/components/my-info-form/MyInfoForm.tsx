import React from 'react';
import {TextField} from '@components/form';
import {Controller, UseFormReturn} from 'react-hook-form';
import {List} from '@components/layout/List';
import {Spacing} from '@components/common';
import {useBottomSelectList} from './BottomSelectList';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import styled from 'styled-components/native';
import {isArray} from 'lodash';
import {Flex} from '@components/layout';

export interface UserInfo {
  name: string;
  age: string;
  address: string;
  company: string;
  jobName: string;
  school: string;
  major: string;
  personality: string[];
  religion: string;
  height: string;
  smoking: string;
  alcohol: string;
  MBTI: string;
  hobby: string;
  personalityMore: string;
  romanticStyle: string;
}

export function MyInfoForm({
  controls: {control},
}: {
  controls: UseFormReturn<UserInfo>;
}) {
  const openAlcohol = useBottomSelectList({
    title: '음주여부',
    items: ['전혀 마시지 못해', '가끔', '어느 정도?', '술자리를 좋아해'],
  });
  const openSmoking = useBottomSelectList({
    title: '흡연여부',
    items: ['비흡연자야', '흡연자야', '전자담배 펴'],
  });
  const openReligion = useBottomSelectList({
    title: '종교',
    items: ['무교', '기독교', '천주교', '불교', '기타'],
  });
  const openPersonality = useBottomSelectList({
    title: '성격',
    items: [
      '패션센스 🧥',
      '자기관리 🏊🏻‍♀️',
      '사랑꾼 💗',
      '일잘러 🤓',
      '애교쟁이 😘',
      '실물파 👀',
      '귀여워 🐹',
      '다정다감 💪🏻',
      '섬세해 🪡',
      '유머러스 😜',
      '뇌섹 🧠',
      '인성갑 😇',
      '차분해 🍵 ',
      '화목한 가정 👨‍👩‍👦',
      '🚗가 있어 ',
      '핫바디 💪🏻',
      '🍯성대',
      '여유있지 💰',
    ],
  });

  return (
    <List divider={<Spacing height={16} />}>
      <Controller
        control={control}
        name="height"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField label="키" value={value} onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="거주지역"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="company"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="직장위치"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="religion"
        render={({field: {value, onChange}}) => {
          const setReligion = async () => {
            const value = await openReligion();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'종교'}
              value={value}
              onPress={() => {
                setReligion();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="address"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="거주지역"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="alcohol"
        render={({field: {value, onChange}}) => {
          const setAlcohol = async () => {
            const value = await openAlcohol();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'음주여부'}
              value={value}
              onPress={() => {
                setAlcohol();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="smoking"
        render={({field: {value, onChange}}) => {
          const setSmoking = async () => {
            const value = await openSmoking();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'흡연여부'}
              value={value}
              onPress={() => {
                setSmoking();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="MBTI"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField label="MBTI" value={value} onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="personality"
        render={({field: {value, onChange}}) => {
          const setPersonality = async () => {
            const value = await openPersonality();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'성격'}
              value={value}
              onPress={() => {
                setPersonality();
              }}
            />
          );
        }}
      />
    </List>
  );
}

function MyInfoTextField({
  label,
  value,
  onChangeText,
}: {
  label: string;
  value: string;
  onChangeText: () => void;
}) {
  return (
    <TextField
      autoFocus={false}
      label={label}
      value={value}
      onChangeText={onChangeText}
      textStyle="normal"
    />
  );
}

function MyInfoButton({
  label,
  value,
  onPress,
}: {
  label: string;
  value: string | string[];
  onPress: () => void;
}) {
  return (
    <StyledMyInfoButton onPress={onPress}>
      <Text typography={Typography.Caption_1_M} color={colors.black40}>
        {label}
      </Text>
      <Spacing height={6} />
      <Flex.CenterVertical direction="row">
        {isArray(value) ? (
          value.map((item, idx) => (
            <Text key={idx} typography={Typography.Body_1_M}>
              {item}
              {idx !== 2 && ', '}
            </Text>
          ))
        ) : (
          <Text typography={Typography.Body_1_M}>{value}</Text>
        )}
      </Flex.CenterVertical>
    </StyledMyInfoButton>
  );
}

const StyledMyInfoButton = styled.TouchableOpacity`
  height: 82px;
  background-color: ${colors.neural};
  border-radius: 16px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-horizontal: 20px;
`;
