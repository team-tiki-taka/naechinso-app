import {useSchoolCache} from '@atoms/onboarding';
import {Badge} from '@components/Badge';
import {BottomCTAButton, BottomCTAContainer, Button} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {CrossPlatformImage} from '@components/form/image-picker/SelectImageButton';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {updateEduInfo} from '@remotes/user';
import React, {useState} from 'react';
import styled from 'styled-components/native';

import ic_shield_blue from '@assets/icons/ic_shield_blue.png';
import img_student_card from '@assets/images/img_student_card.png';
import {useAsyncCallback} from '@hooks/common';
import {ConsultingButton} from '@screens/recommend/screens/10_SelectVerifyMethodScreen';
import {ScrollView} from 'react-native';

export function CommonVerifySchoolScreen({
  onSubmit: handleCTAPress,
}: {
  onSubmit: () => void;
}) {
  const [image, setImage] = useState<CrossPlatformImage>();
  const [schoolInfo, setSchoolInfo] = useSchoolCache();

  const selectImage = useAsyncCallback(async (image?: CrossPlatformImage) => {
    if (!image) {
      const data = {...schoolInfo, eduImage: ''};
      setSchoolInfo(data);
      await updateEduInfo(data);
      return;
    }
    setImage(image);
    try {
      const url = await image.getUrl();
      const data = {...schoolInfo, eduImage: url ? url : ''};
      setSchoolInfo(data);
      await updateEduInfo(data);
    } catch {
      const data = {...schoolInfo, eduImage: ''};
      setSchoolInfo(data);
      await updateEduInfo(data);
    }
  });

  return (
    <Screen>
      <AppBar back />
      <ScrollView>
        <PageHeader
          title="학교 인증을 부탁해"
          subtitle={
            '내친소는 신뢰 기반의 서비스라 인증이 필요해.\n학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!!'
          }
        />
        <ContentContainer>
          <Spacing height={12} />
          <Badge
            icon={ic_shield_blue}
            title="인증자료는 절대로 외부에 공개되지 않으니 안심해"
          />
          <Spacing height={24} />
          <Flex.Center>
            <StyledImage source={img_student_card} />
            <Spacing height={31} />
            <ImagePicker
              value={image}
              onChange={selectImage.callback}
              type="edu"
            />
          </Flex.Center>
        </ContentContainer>
        <Spacing height={12} />
        <ConsultingButton />
        <Spacing height={90} />
      </ScrollView>
      <BottomCTAButton
        rounded
        floating
        disabled={!image}
        loading={selectImage.isLoading}
        onPress={handleCTAPress}>
        완료
      </BottomCTAButton>
    </Screen>
  );
}

const ContentContainer = styled.View`
  padding: 0 24px;
`;

const StyledImage = styled.Image`
  height: 183px;
  resize-mode: contain;
`;
