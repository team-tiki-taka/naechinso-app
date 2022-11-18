import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import Clipboard from '@react-native-community/clipboard';
import React from 'react';
import {Platform, Share, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import ic_duplicate_black from '@assets/icons/ic_duplicate_black.png';
import ic_kakao_brown from '@assets/icons/ic_kakao_brown.png';

interface Props {
  onCTAPress?: () => void;
  url: string;
  message: string;
  title: string;
}

export const CommonShareLinkScreen = ({
  url: shareLink,
  onCTAPress,
  message,
  title,
}: Props) => {
  const handleShare = async () => {
    if (Platform.OS === 'web') {
      const {copyToClipboard} = require('@utils/copyToClipboard');
      copyToClipboard(shareLink);
      return;
    }
    try {
      const result = await Share.share({
        message: `${message}\n${shareLink}`,
        url: shareLink,
        title: shareLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={title} />
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
                https://naechinso.com/recommend
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(shareLink);
                }}>
                <DuplicateIcon source={ic_duplicate_black} />
              </TouchableOpacity>
            </Flex>
          </ShareLink>
          <Spacing height={16} />
          <KakaoButton onPress={handleShare}>
            <Flex direction="row" align="center" style={{height: '100%'}}>
              <KakaoIcon source={ic_kakao_brown} />
              <Spacing width={54.7} />
              <Text typography={Typography.Subtitle_2_M}>
                카카오톡으로 공유
              </Text>
            </Flex>
          </KakaoButton>
        </InnerContainer>
        {onCTAPress && (
          <BottomCTAButton onPress={onCTAPress}>완료</BottomCTAButton>
        )}
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
