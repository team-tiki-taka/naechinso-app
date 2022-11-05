import {AppBar, Spacing} from '@components/common';
import {useConfirmSheet} from '@components/interaction';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useMainNavigation, useNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {RootStackParamList} from '@navigations/RootRouteTypes';
import {clearAccessToken, clearRefreshToken} from '@remotes/access-token';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export function SettingsScreen() {
  const rootNavigation = useNavigation<RootStackParamList>();
  const mainNavigation = useMainNavigation();
  const onPressServiceIntroduction = () => {};
  const onPressAskService = () => {};
  const onPressDeleteAccount = () => {
    mainNavigation.navigate('DeleteAccount');
  };
  const confirm = useConfirmSheet();

  const [, reload] = useUser();

  const onPressLogOut = async () => {
    const status = await confirm(
      '로그아웃',
      '정말 로그아웃 할 거야 🥺 ?',
      '응 할래',
      '아니 안할래',
    );
    if (status) {
      await clearAccessToken();
      await clearRefreshToken();
      reload();
      rootNavigation.navigate('Start');
    }
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title="설정" />
      <MenuButton
        icon={<StyledBigIcon source={require('@assets/icons/ic_sun.png')} />}
        onPress={onPressServiceIntroduction}>
        내친소 서비스 소개
      </MenuButton>
      <MenuButton
        icon={<StyledBigIcon source={require('@assets/icons/ic_listen.png')} />}
        onPress={onPressAskService}>
        서비스 이용 문의
      </MenuButton>
      <MenuButton
        icon={<StyledBigIcon source={require('@assets/icons/ic_logout.png')} />}
        onPress={onPressLogOut}>
        로그아웃
      </MenuButton>
      <BottomContainer>
        <Spacing height={16} />
        <Flex direction="row" justify="flex-end">
          <TouchableOpacity onPress={onPressDeleteAccount}>
            <Text typography={Typography.Body_1_M} color={colors.black40}>
              계정 삭제
            </Text>
          </TouchableOpacity>
          <Spacing width={24} />
        </Flex>
      </BottomContainer>
    </Screen>
  );
}

const BottomContainer = styled.View`
  background-color: ${colors.neural};
  flex: 1;
`;

function MenuButton({
  icon,
  onPress,
  children,
}: {
  icon: ReactNode;
  onPress: () => void;
  children: ReactNode;
}) {
  return (
    <Container onPress={onPress}>
      <Flex.CenterVertical direction="row" justify="space-between">
        <Flex.Center direction="row">
          {icon}
          <Spacing width={12} />
          <Text typography={Typography.Subtitle_1_M}>{children}</Text>
        </Flex.Center>
        <StyledSmallIcon
          source={require('@assets/icons/ic_chevron_right_gray.png')}
        />
      </Flex.CenterVertical>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  padding-left: 24px;
  padding-right: 20px;
  padding-vertical: 18px;
`;

const StyledBigIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const StyledSmallIcon = styled.Image`
  width: 19px;
  height: 19px;
`;
