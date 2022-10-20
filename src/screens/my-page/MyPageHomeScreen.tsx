import React from 'react';
import {Screen, StyledInnerContainer} from '@components/layout';
import colors from '@constants/color';
import {ProfileCard} from '@components/ProfileCard';
import {Gender} from '@models/Gender';
import {Spacing} from '@components/common';
import {ScrollView} from 'react-native';
import {MyPageHeader} from '@screens/my-page/components/my-page-header/MyPageHeader';
import styled from 'styled-components/native';
import {useMainNavigation} from '@hooks/navigation';

export function MyPageHomeScreen() {
  const navigation = useMainNavigation();
  const handlePress = () => {
    navigation.navigate('MyProfile');
  };
  return (
    <Screen>
      <MyPageHeader handlePress={handlePress} />
      <InnerContainer>
        <ScrollView>
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
          <ProfileCard gender={Gender.FEMALE} />
          <Spacing height={24} />
        </ScrollView>
      </InnerContainer>
    </Screen>
  );
}

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.blueBac};
`;
