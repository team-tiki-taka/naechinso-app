import React from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import styled from 'styled-components/native';
import {Text, Typography} from '@components/text';
import {Button} from '@components/button';
import colors from '@constants/color';
import {CheckBox} from '@components/form';
import {useBooleanState} from '@hooks/common';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useNavigation} from '@hooks/navigation';
import {RootStackParamList} from '@navigations/RootRouteTypes';
import {clearAccessToken} from '@remotes/access-token';
import {useUser} from '@hooks/useUser';

export function DeleteAccountScreen() {
  const rootNavigation = useNavigation<RootStackParamList>();
  const {clear} = useSignUpFlowCache();

  const [, reload] = useUser();

  const handleCTAPress = async () => {
    await clearAccessToken();
    clear();
    reload();
    rootNavigation.navigate('Start');
  };

  const [isChecked, , , toggle] = useBooleanState();
  return (
    <Screen>
      <AppBar />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex.CenterVertical direction="row">
            <StyledImage
              source={require('@assets/images/img_crying_sun.png')}
            />
            <PageHeader title={'..우리 정말..꼭..\n헤어져야만 할까..?'} />
          </Flex.CenterVertical>
          <Spacing height={28} />
          <WarningText>
            {
              '탈퇴 시 너의 멋진 프로필, 추천인이 너를 위해 \n적어준 정성어린 추천사,너의 모든 기록이 삭제 돼.\n삭제 후에는 다시 되돌릴 수 없어..'
            }
          </WarningText>
          <Spacing height={16} />
          <WarningText>
            {
              '네가 작성한 추천사는 친구의 성공적인 만남을\n 위해 그대로 유지돼..'
            }
          </WarningText>
          <Spacing height={16} />
          <WarningText>
            {
              '결제한 금액, 기타 혜택 등은 모두 소멸되어 환불\n이 불가능해. 재가입을 하더라도 복구되지 않아..'
            }
          </WarningText>
        </StyledInnerContainer>
        <StyledInnerContainer>
          <Flex direction="row">
            <CheckBox type="square" checked={isChecked} onPress={toggle} />
            <Spacing width={8} />
            <Text typography={Typography.Body_1_M} color={colors.black40}>
              계정 삭제 안내 사항을 모두 확인했고, 동의해
            </Text>
          </Flex>
          <Spacing height={32} />
          <Button onPress={handleCTAPress} rounded>
            계정 삭제
          </Button>
        </StyledInnerContainer>
      </Flex>
    </Screen>
  );
}

function WarningText({children}: {children: string}) {
  return (
    <Flex direction="row">
      <StyledIcon
        source={require('@assets/icons/ic_exclaimation_circle_error_transparent.png')}
      />
      <Spacing width={4} />
      <Text typography={Typography.Body_1_M}>{children}</Text>
    </Flex>
  );
}

const StyledImage = styled.Image`
  width: 72px;
  height: 72px;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
