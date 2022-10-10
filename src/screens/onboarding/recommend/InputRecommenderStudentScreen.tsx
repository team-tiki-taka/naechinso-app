import React, {useEffect, useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';
import {useBooleanState} from '@hooks/common';

export const InputRecommenderStudentScreen = () => {
  const navigation = useOnboardingNavigation();
  const [school, setSchool] = useState<string>('');
  const [schoolType, setSchoolType] = useState<
    '대학교' | '고등학교' | '중학교'
  >('대학교');
  const [major, setMajor] = useState<string>('');
  const [buttonIsActive, setButtonIsActiveTrue, setButtonIsActiveFalse] =
    useBooleanState();

  useEffect(() => {
    if (schoolType === '대학교') {
      school && major ? setButtonIsActiveTrue() : setButtonIsActiveFalse();
    } else {
      school ? setButtonIsActiveTrue() : setButtonIsActiveFalse();
    }
  }, [school, major]);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🏫\n최종 학력을 적어줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex direction="row" justify="space-between">
            <TextField
              containerStyle={{minWidth: '45%'}}
              label={'학교명'}
              value={school}
              onChangeText={setSchool}
            />
            <Spacing width={12} />
            <TextField label={'학교'} value={schoolType} />
          </Flex>
          {schoolType === '대학교' && (
            <>
              <Spacing height={16} />
              <TextField label={'전공'} value={major} onChangeText={setMajor} />
            </>
          )}
        </StyledInnerContainer>
        <BottomCTAButton
          disabled={!buttonIsActive}
          onPress={() => {
            navigation.navigate('VerifyRecommenderStudent');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
