import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {Flex, Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';
import {PageHeader} from '../../../components/PageHeader';

export function VerifyCompanyScreen() {
  const [image, setImage] = useState<Image>();

  return (
    <Screen>
      <AppBar back />
      <PageHeader
        title="회사 인증을 부탁해"
        subtitle={
          '내친소는 신뢰 기반의 서비스라 인증이 필요해.\n사원증, 명함 또는 사업자등록증을 첨부해줘!'
        }
      />
      <ContentContainer>
        <Spacing height={12} />
        <Badge
          icon={require('@assets/icons/ic_shield_blue.png')}
          title="인증자료는 절대로 외부에 공개되지 않으니 안심해"
        />
        <Spacing height={24} />
        <ImagePicker value={image} onChange={setImage} />
      </ContentContainer>
    </Screen>
  );
}

const ContentContainer = styled.View`
  padding: 0 24px;
`;

function Badge({icon, title}: {icon: ImageSourcePropType; title: string}) {
  return (
    <Container>
      <Icon source={icon} />
      <Spacing width={4} />
      <Text typography={Typography.Body_2_M} color={colors.blue}>
        {title}
      </Text>
    </Container>
  );
}

const Container = styled(withProps(Flex.CenterVertical, {direction: 'row'}))`
  padding: 8px 12px;
  background-color: ${colors.blueBac};
  border-radius: 8px;
`;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;
