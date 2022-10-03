import {BottomCTAButton} from '@components/button';
import {Flex, Screen} from '@components/layout';
import {Spacing} from '@components/common';
import {Text, Typography} from '@components/text';
import {colors} from '@constants/color';
import React from 'react';
import styled from 'styled-components/native';
import {useOnboardingNavigation} from '@hooks/navigation';

export const ServiceIntroduction = ({
  titles = [],
  buttonText,
  onPress,
}: {
  titles: string[];
  buttonText: string;
  onPress: () => void;
}) => {
  const navigation = useOnboardingNavigation();

  return (
    <Screen backgroundColor={colors.white}>
      <Spacing height={52} />
      <Flex justify="space-between" align="center" style={{flex: 1}}>
        <InnerContainer style={{width: '100%'}}>
          {titles.map(title =>
            title === '' ? (
              <Spacing height={20} />
            ) : (
              <Text typography={Typography.Headline_1_B}>{title}</Text>
            ),
          )}
        </InnerContainer>
        <BottomCTAButton onPress={onPress}>{buttonText}</BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const InnerContainer = styled.View`
  padding-left: 24;
  padding-right: 24;
`;
