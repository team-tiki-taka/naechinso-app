import React from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, InnerContainer, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {ToggleButton} from '@components/button';
import styled from 'styled-components/native';
import colors from '@constants/color';
import {useOnboardingNavigation} from '@hooks/navigation';

export const VerifyRecommenderScreen = () => {
  const navigation = useOnboardingNavigation();
  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'원하는 인증 방식을 선택해줘!'}
        subtitle={
          '너의 소속을 인증하면 친구에 대한 신뢰가 높아져\n번거롭겠지만 인증을 부탁해!'
        }
      />
      <Spacing height={24} />
      <InnerContainer>
        <Flex>
          <Flex>
            <ToggleButton
              type="brownMain"
              onPress={() => {
                navigation.navigate('InputRecommenderCompany');
              }}>
              명함/사원증/사업자등록증
            </ToggleButton>
            <Spacing height={16} />
            <ToggleButton type="brownMain" onPress={() => {}}>
              학생증/졸업증명서
            </ToggleButton>
          </Flex>
          <Spacing height={248} />
          <Flex.CenterVertical direction="row" justify="flex-end">
            <StyledVerifyText
              source={require('@assets/images/img_verify_text.png')}
            />
            <Spacing width={10} />
            <StyledButton />
          </Flex.CenterVertical>
        </Flex>
      </InnerContainer>
    </Screen>
  );
};

const StyledVerifyText = styled.Image`
  width: 128.54px;
  height: 17.71px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.black20};
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;
