import {Flex} from '@components/layout';
import colors from '@constants/color';
import React from 'react';
import styled from 'styled-components/native';
import {IconButton} from './IconButton';
import {Spacing} from '@components/common';

export function MyPageHeader() {
  const handleRecommendFriendPress = () => {};

  const handleNoticePress = () => {};

  const handleSettingPress = () => {};

  return (
    <Container>
      <Flex.CenterVertical direction="row" justify="flex-end">
        <IconButton
          onPress={handleRecommendFriendPress}
          source={require('@assets/icons/ic_check_white.png')}
        />
        <Spacing width={24} />
        <IconButton
          onPress={handleNoticePress}
          source={require('@assets/icons/ic_check_white.png')}
        />
        <Spacing width={24} />
        <IconButton
          onPress={handleSettingPress}
          source={require('@assets/icons/ic_check_white.png')}
        />
      </Flex.CenterVertical>
      <Spacing height={25} />
    </Container>
  );
}

const Container = styled(Flex)`
  padding-top: 17px;
  padding-horizontal: 24px;
  background-color: ${colors.white};
`;
