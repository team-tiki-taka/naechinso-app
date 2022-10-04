import React, {useState} from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen} from '@components/layout';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import styled from 'styled-components/native';
import {Text, Typography} from '@components/text';
import {Alert, Share, TouchableOpacity} from 'react-native';
import colors from '@constants/color';
import Clipboard from '@react-native-community/clipboard';
import {Spacing} from '@components/common';

export const ShareLinkScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const [shareLink, setShareLink] = useState<string>(
    'https://naechinso-admin-web.vercel.app/',
  );

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '추천사 작성하러 가기',
        url: 'https://naechinso-admin-web.vercel.app/',
        title: 'https://naechinso-admin-web.vercel.app/',
      });
      console.log(result.action);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(result.activityType);
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Screen>
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
