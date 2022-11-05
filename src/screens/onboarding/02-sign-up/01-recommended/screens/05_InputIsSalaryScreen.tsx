import {ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {ParamList} from '../routes-types';

export function InputIsSalaryScreen() {
  const navigation = useNavigation<ParamList>();

  return (
    <Screen>
      <AppBar />
      <PageHeader title="나는" />
      <Spacing height={24} />
      <StyledInnerContainer>
        <ToggleButton
          style={{paddingLeft: 20}}
          type="brownMain"
          size="big"
          onPress={() => {
            navigation.navigate('InputCompany');
          }}>
          직장이 있어
        </ToggleButton>
        <Spacing height={16} />
        <ToggleButton
          style={{paddingLeft: 20}}
          type="brownMain"
          size="big"
          onPress={() => {
            navigation.navigate('VerifySchool');
          }}>
          아직 공부 중인 학생이야
        </ToggleButton>
      </StyledInnerContainer>
    </Screen>
  );
}
