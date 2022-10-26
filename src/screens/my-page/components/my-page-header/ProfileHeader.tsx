import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import {TouchableOpacity} from 'react-native';

import React from 'react';
import colors from '@constants/color';
import styled from 'styled-components/native';

export function ProfileHeader({handlePress}: {handlePress: () => void}) {
  const name = '유다연';
  const recommender = '황*현';

  return (
    <>
      <Container direction="row">
        <StyledProfileImage
          source={{uri: 'https://avatars.githubusercontent.com/u/87538540?v=4'}}
        />
        <Spacing width={20} />
        <Flex>
          <TouchableOpacity onPress={handlePress}>
            <Flex.CenterVertical direction="row">
              <Text typography={Typography.Headline_1_B}>{name}</Text>
              <Spacing width={17} />
              <StyledModifyMyProfileButton
                source={require('@assets/icons/ic_chevron_right_black.png')}
              />
            </Flex.CenterVertical>
          </TouchableOpacity>
          <Text typography={Typography.Body_1_M} color={colors.black64}>
            추천인: {recommender}
          </Text>
        </Flex>
      </Container>
      <Spacing height={20} />
    </>
  );
}

const Container = styled(Flex.CenterVertical)`
  padding-horizontal: 24px;
`;

const StyledProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;

const StyledModifyMyProfileButton = styled.Image`
  width: 7px;
  height: 14px;
`;
