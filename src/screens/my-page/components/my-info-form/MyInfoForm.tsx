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
import {myPersonalities} from '@constants/personalities';
import {User} from '@models/User';

export function MyInfoForm({
  controls: {control},
}: {
  controls: UseFormReturn<User>;
}) {
  const openDrink = useBottomSelectList({
    title: '음주여부',
    items: ['전혀 마시지 못해', '가끔', '어느 정도?', '술자리를 좋아해'],
  });
  const openSmoke = useBottomSelectList({
    title: '흡연여부',
    items: ['비흡연자야', '흡연자야', '전자담배 펴'],
  });
  const openReligion = useBottomSelectList({
    title: '종교',
    items: ['무교', '기독교', '천주교', '불교', '기타'],
  });
  const openPersonalities = useBottomSelectList({
    title: '성격',
    items: myPersonalities,
  });

  return (
    <List divider={<Spacing height={16} />}>
      <Controller
        control={control}
        name="height"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="키"
            value={value.toString()}
            onChangeText={onChange}
          />
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
        name="jobLocation"
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
        name="drink"
        render={({field: {value, onChange}}) => {
          const setDrink = async () => {
            const value = await openDrink();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'음주여부'}
              value={value}
              onPress={() => {
                setDrink();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="smoke"
        render={({field: {value, onChange}}) => {
          const setSmoke = async () => {
            const value = await openSmoke();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'흡연여부'}
              value={value}
              onPress={() => {
                setSmoke();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="mbti"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField label="MBTI" value={value} onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="personalities"
        render={({field: {value, onChange}}) => {
          const setPersonalities = async () => {
            const value = await openPersonalities();
            onChange(value);
          };
          return (
            <MyInfoButton
              label={'성격'}
              value={value}
              onPress={() => {
                setPersonalities();
              }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="introduce"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="남들보다 이건 내가 좀 낫지"
            value={value}
            onChangeText={onChange}
            height={130}
          />
        )}
      />
      <Controller
        control={control}
        name="hobby"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="취미/관심사"
            value={value}
            onChangeText={onChange}
            height={130}
          />
        )}
      />
      <Controller
        control={control}
        name="style"
        render={({field: {value, onChange}}) => (
          <MyInfoTextField
            label="어떤 연애를 하고 싶어?"
            value={value}
            onChangeText={onChange}
            height={130}
          />
        )}
      />
    </List>
  );
}

function MyInfoTextField({
  label,
  value,
  onChangeText,
  height,
}: {
  label: string;
  value: string;
  onChangeText: () => void;
  height?: number;
}) {
  return (
    <TextField
      multiline
      containerStyle={{height: height ? height : 82}}
      typography={Typography.Body_1_M}
      autoFocus={false}
      label={label}
      value={value}
      onChangeText={onChangeText}
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
