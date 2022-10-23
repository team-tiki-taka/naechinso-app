import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import styled from 'styled-components/native';
import colors from '@constants/color';
import {Text, Typography} from '@components/text';
import {useWheelPickerSheet} from '@hooks/form';

const SCHOOL_TYPE = {
  univ: {
    typeName: '대학교',
  },
  high: {
    typeName: '고등학교',
  },
  mid: {
    typeName: '중학교',
  },
};

export function CommonInputSchoolScreen({
  handleCTAPress,
}: {
  handleCTAPress: () => void;
}) {
  const [data, setData] = useState<{
    school: string;
    schoolType: 'univ' | 'high' | 'mid';
    major: string;
  }>({
    school: '',
    schoolType: 'univ',
    major: '',
  });

  const buttonIsActive =
    data.schoolType === 'univ' ? data.school && data.major : !!data.school;

  const open = useWheelPickerSheet(
    '타이틀', //타이틀
    [
      // 선택지
      {label: SCHOOL_TYPE.univ.typeName, value: 'univ'},
      {label: SCHOOL_TYPE.high.typeName, value: 'high'},
      {label: SCHOOL_TYPE.mid.typeName, value: 'mid'},
    ],
    'univ', // 기본값
  );

  const setSchoolType = async () => {
    const value = await open();
    setData({...data, schoolType: value});
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🏫\n최종 학력을 적어줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex direction="row" justify="space-between">
            <TextField
              containerStyle={{minWidth: '50%'}}
              label={'학교명'}
              value={data.school}
              onChangeText={text => {
                setData({...data, school: text});
              }}
            />
            <Spacing width={12} />
            <StyledSchoolTypeContainer
              onPress={() => {
                setSchoolType();
              }}>
              <Text typography={Typography.Body_1_M} color={colors.black40}>
                학교
              </Text>
              <Flex.CenterVertical direction="row">
                <Text typography={Typography.Subtitle_1_B} color={colors.black}>
                  {SCHOOL_TYPE[data.schoolType].typeName}
                </Text>
                <Spacing width={24} />
                <Icon
                  style={{transform: [{rotate: '180deg'}]}}
                  source={require('@assets/icons/ic_chevron_down_black.png')}
                />
              </Flex.CenterVertical>
            </StyledSchoolTypeContainer>
          </Flex>
          {data.schoolType === 'univ' && (
            <>
              <Spacing height={16} />
              <TextField
                label={'전공'}
                value={data.major}
                onChangeText={text => {
                  setData({...data, major: text});
                }}
              />
            </>
          )}
        </StyledInnerContainer>
        <BottomCTAButton disabled={!buttonIsActive} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
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
