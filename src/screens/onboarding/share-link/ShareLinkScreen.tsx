import React, {useState} from 'react';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import styled from 'styled-components/native';
import {Text, Typography} from '@components/text';
import {TouchableOpacity} from 'react-native';
import colors from '@constants/color';
import Clipboard from '@react-native-community/clipboard';
import {AppBar, Spacing} from '@components/common';
import {BottomCTAButton} from '@components/button';
import {url} from '@constants/url';

export const ShareLinkScreen = ({
  onShare,
  handleCTAPress,
}: {
  onShare: () => void;
  handleCTAPress: () => void;
}) => {
  const [shareLink, setShareLink] = useState<string>(url.adminWeb);

  return (
    <Screen>
      <AppBar />
      <PageHeader title="자 이제 친구에게 공유해봐!" />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <ShareLink>
            <Text typography={Typography.Caption_1_M} color={colors.black40}>
              초대링크
            </Text>
            <Flex direction="row" justify="space-between">
              <Text
                typography={Typography.Caption_1_M}
                color={colors.black}
                style={{textDecorationLine: 'underline'}}>
                {shareLink}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(shareLink);
                }}>
                <DuplicateIcon
                  source={require('@assets/icons/ic_duplicate_black.png')}
                />
              </TouchableOpacity>
            </Flex>
          </ShareLink>
          <Spacing height={16} />
          <KakaoButton onPress={onShare}>
            <Flex direction="row" align="center" style={{height: '100%'}}>
              <KakaoIcon source={require('@assets/icons/ic_kakao_brown.png')} />
              <Spacing width={54.7} />
              <Text typography={Typography.Subtitle_2_M}>
                카카오톡으로 공유
              </Text>
            </Flex>
          </KakaoButton>
        </InnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>완료</BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 24px;
`;

const ShareLink = styled.View`
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

const DuplicateIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const KakaoButton = styled.TouchableOpacity`
  background-color: ${colors.kakao};
  height: 56px;
  border-radius: 16px;
  padding-horizontal: 20px;
`;

const KakaoIcon = styled.Image`
  width: 28.3px;
  height: 26px;
`;
