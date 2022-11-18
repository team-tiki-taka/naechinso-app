import {ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import styled from 'styled-components/native';

import img_verify_text from '@assets/images/img_verify_text.png';
import {Linking, TouchableOpacity} from 'react-native';

import img_consulting from '@assets/images/img_consulting.png';
import {RecommendParamList} from '..';

export const SelectVerifyMethodScreen = () => {
  const navigation = useNavigation<RecommendParamList>();

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
      <StyledInnerContainer>
        <Flex>
          <Flex>
            <ToggleButton
              type="brownMain"
              size="big"
              padding
              onPress={() => {
                navigation.navigate('InputMyCompany');
              }}>
              명함/사원증/사업자등록증
            </ToggleButton>
            <Spacing height={16} />
            <ToggleButton
              type="brownMain"
              size="big"
              padding
              onPress={() => {
                navigation.navigate('InputMySchool');
              }}>
              학생증/졸업증명서
            </ToggleButton>
          </Flex>
          <Spacing height={278} />
          <ConsultingButton />
        </Flex>
      </StyledInnerContainer>
    </Screen>
  );
};

export function ConsultingButton() {
  return (
    <Flex.CenterVertical direction="row" justify="flex-end">
      <StyledVerifyText source={img_verify_text} />
      <Spacing width={10} />
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('http://pf.kakao.com/_CnQnxj/chat');
        }}>
        <StyledImage source={img_consulting} />
      </TouchableOpacity>
    </Flex.CenterVertical>
  );
}

const StyledVerifyText = styled.Image`
  width: 128px;
  height: 17px;
`;

const StyledImage = styled.Image`
  width: 72px;
  height: 72px;
`;
