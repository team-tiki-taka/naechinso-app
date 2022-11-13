import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import {TouchableOpacity} from 'react-native';

import colors from '@constants/color';
import {useUser} from '@hooks/useUser';
import {first} from 'lodash';
import React, {useMemo} from 'react';
import styled from 'styled-components/native';

import ic_chevron_right_black from '@assets/icons/ic_chevron_right_black.png';

import {useNavigation} from '@hooks/navigation';
import {getImageUrl} from '@utils/getImageUrl';
import {useMyRecommend} from '@hooks/useMyRecommend';

export function ProfileHeader() {
  const navigation = useNavigation();
  const [user] = useUser();
  const [recommend] = useMyRecommend();
  const name = user?.name;
  const recommenderName = useMemo(
    () => recommend?.recommendReceived?.find(i => i.senderName)?.senderName,
    [recommend],
  );

  return (
    <>
      <Container direction="row">
        <StyledProfileImage source={{uri: getImageUrl(first(user?.images))}} />
        <Spacing width={20} />
        <Flex>
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Flex.CenterVertical direction="row">
              <Text typography={Typography.Headline_1_B}>{name}</Text>
              <Spacing width={17} />
              <StyledModifyMyProfileButton source={ic_chevron_right_black} />
            </Flex.CenterVertical>
          </TouchableOpacity>
          {Boolean(recommenderName) && (
            <Text typography={Typography.Body_1_M} color={colors.black64}>
              추천인: {recommenderName}
            </Text>
          )}
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
  background: ${colors.black20};
`;

const StyledModifyMyProfileButton = styled.Image`
  width: 7px;
  height: 14px;
`;
