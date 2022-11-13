import React from 'react';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import {S3_URL} from '@constants/url';
import {withSuspense} from '@hocs/withSuspense';
import {useMainNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {first} from 'lodash';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {BaseInfoSection, InfoListSection} from './components/Info';

export const MyProfileScreen = withSuspense(function MyProfileScreen() {
  const navigation = useMainNavigation();
  const [user] = useUser(true);

  const handleCTAPress = () => {
    navigation.navigate('ModifyMyProfile');
  };

  console.log(`${S3_URL}${first(user.images)}`);

  return (
    <Screen>
      <AppBar
        title={
          <Flex.CenterHorizontal direction="row">
            <Text typography={Typography.Body_1_B}>내 프로필</Text>
            <Spacing width={40} />
          </Flex.CenterHorizontal>
        }
      />
      <ScrollView>
        <StyledImage
          source={{
            uri: `${S3_URL}${first(user.images)}`,
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfoSection user={user} />
          <InfoListSection user={user} />
          <Spacing height={54} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      <BottomCTAButton onPress={handleCTAPress} backgrounded>
        내 프로필 수정
      </BottomCTAButton>
    </Screen>
  );
});

const StyledImage = styled.Image`
  width: 100%;
  height: 375px;
`;
