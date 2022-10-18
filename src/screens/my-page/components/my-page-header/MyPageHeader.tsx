import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useMainNavigation} from '@hooks/navigation';
import React from 'react';
import styled from 'styled-components/native';
import {Spacing} from '../../../../components/common/Spacing';
import {TouchableOpacity} from 'react-native';
import {IconButton} from './IconButton';
import {ToggleMenu} from './ToggleMenu';

export function MyPageHeader() {
  const navigation = useMainNavigation();
  const name = '박채영';
  const recommender = '황*현';

  const handlePress = () => {
    navigation.navigate('ModifyMyProfile');
  };

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
      <Flex.CenterVertical direction="row">
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
      </Flex.CenterVertical>
      <Spacing height={20} />
      <ToggleMenu />
    </Container>
  );
}

const Container = styled(Flex)`
  padding-top: 17px;
  padding-horizontal: 24px;
  background-color: ${colors.white};
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
