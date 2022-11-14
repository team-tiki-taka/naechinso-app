import React from 'react';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import styled from 'styled-components/native';
import {Divider, Spacing} from '@components/common';
import colors from '@constants/color';
import Clipboard from '@react-native-community/clipboard';

export function PhoneNumber({phoneNum}: {phoneNum: string}) {
  const copyToClipboard = () => {
    Clipboard.setString(phoneNum);
  };

  return (
    <>
      <Spacing height={20} />
      <PhoneNumContainer direction="row" justify="space-between">
        <Text typography={Typography.Subtitle_1_B}>{phoneNum}</Text>
        <DuplicateButton onPress={copyToClipboard}>
          <ButtonInnerContainer direction="row">
            <StyledIcon
              source={require('@assets/icons/ic_duplicate_white.png')}
            />
            <Spacing width={2} />
            <Text typography={Typography.Body_2_M} color={colors.white}>
              복사
            </Text>
          </ButtonInnerContainer>
        </DuplicateButton>
      </PhoneNumContainer>
      <Divider color={colors.neural} height={2} />
    </>
  );
}

const PhoneNumContainer = styled(Flex.CenterVertical)`
  padding-bottom: 9px;
`;

const StyledIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

const DuplicateButton = styled.TouchableOpacity`
  background-color: ${colors.orange};
  width: 59px;
  height: 32px;
  border-radius: 8px;
`;

const ButtonInnerContainer = styled(Flex.Center)`
  height: 100%;
`;
