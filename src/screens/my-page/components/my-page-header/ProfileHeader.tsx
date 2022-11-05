import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import {TouchableOpacity} from 'react-native';

import colors from '@constants/color';
import {S3_URL} from '@constants/url';
import {useUser} from '@hooks/useUser';
import {fetchMyRecommend} from '@remotes/recommend';
import {first} from 'lodash';
import React from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';

export function ProfileHeader({handlePress}: {handlePress: () => void}) {
  const [user] = useUser();
  const [recommend] = useMyRecommend();
  const name = user?.name;
  const recommender = first(recommend?.recommendReceived)?.name;

  return (
    <>
      <Container direction="row">
        <StyledProfileImage source={{uri: `${S3_URL}${first(user?.images)}`}} />
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
  background: ${colors.black20};
`;

const StyledModifyMyProfileButton = styled.Image`
  width: 7px;
  height: 14px;
`;

function useMyRecommend() {
  const query = useQuery('my-recommend', async () => fetchMyRecommend());
  return [query.data, query.refetch] as const;
}
