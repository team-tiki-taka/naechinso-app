import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {Flex, Screen} from '@components/layout';
import React, {useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';
import {Badge} from '../../../components/Badge';
import {PageHeader} from '../../../components/PageHeader';

export function CommonVerifySchoolScreen({
  handleCTAPress,
}: {
  handleCTAPress: () => void;
}) {
  const [image, setImage] = useState<Image>();

  return (
    <Screen>
      <AppBar back />
      <PageHeader
        title="학교 인증을 부탁해"
        subtitle={
          '내친소는 신뢰 기반의 서비스라 인증이 필요해.\n학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!!'
        }
      />
      <ContentContainer>
        <Spacing height={12} />
        <Badge
          icon={require('@assets/icons/ic_shield_blue.png')}
          title="인증자료는 절대로 외부에 공개되지 않으니 안심해"
        />
        <Spacing height={24} />
        <Flex.Center>
          <StyledImage
            source={require('@assets/images/img_student_card.png')}
          />
          <Spacing height={31} />
          <ImagePicker value={image} onChange={setImage} />
        </Flex.Center>
      </ContentContainer>
      <BottomCTAButton disabled={!image} onPress={handleCTAPress}>
        완료
      </BottomCTAButton>
    </Screen>
  );
}

const ContentContainer = styled.View`
  padding: 0 24px;
  flex: 1;
`;

const StyledImage = styled.Image`
  height: 183px;
  resize-mode: contain;
`;
