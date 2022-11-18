import {AppBar, Spacing} from '@components/common';
import {SelectImageButton} from '@components/form/image-picker/SelectImageButton';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import {withProps} from '@hocs/withProps';
import {withSuspense} from '@hocs/withSuspense';
import {useUser} from '@hooks/useUser';
import {getImageUrl} from '@utils/getImageUrl';
import {first} from 'lodash';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {BaseInfoSection, InfoListSection} from './components/Info';

export const MyProfileScreen = withSuspense(function MyProfileScreen() {
  const [user] = useUser(true);

  const imageUrl = first(user.images) && getImageUrl(first(user.images));

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
        {imageUrl ? (
          <StyledImage source={{uri: imageUrl}} />
        ) : (
          <EmptyBox>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri: 'https://static.renaissance.art/images/question.png',
              }}
            />
          </EmptyBox>
        )}
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfoSection user={user} />
          <InfoListSection user={user} />
          <Spacing height={54} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
    </Screen>
  );
});

const StyledImage = styled.Image`
  width: 100%;
  height: 375px;
`;

const EmptyBox = styled(withProps(Flex.Center, {direction: 'column'}))`
  width: 100%;
  height: 375px;
  background: rgba(0, 0, 0, 0.1);
`;
