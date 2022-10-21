import React from 'react';
import {Screen, StyledInnerContainer} from '@components/layout';
import colors from '@constants/color';
import {ProfileCard} from '@components/ProfileCard';
import {Gender} from '@models/Gender';
import {AppBar, Spacing} from '@components/common';
import {ScrollView} from 'react-native';

export function MyPageScreen() {
  return (
    <Screen backgroundColor={colors.blueBac}>
      {/* <MyPageHeader background={colors.white} /> */}
      <AppBar background={colors.white} />
      <StyledInnerContainer>
        <ScrollView>
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
        </ScrollView>
      </StyledInnerContainer>
    </Screen>
  );
}
