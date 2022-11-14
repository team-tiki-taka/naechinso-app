import {useJobCache} from '@atoms/onboarding';
import {Badge} from '@components/Badge';
import {BottomCTAButton, BottomCTAContainer, Button} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {CrossPlatformImage} from '@components/form/image-picker/SelectImageButton';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {updateJobInfo} from '@remotes/user';
import {ConsultingButton} from '@screens/recommend/screens/10_SelectVerifyMethodScreen';
import React, {useState} from 'react';
import styled from 'styled-components/native';

import ic_shield_blue from '@assets/icons/ic_shield_blue.png';
import img_id_card from '@assets/images/img_id_card.png';

export function CommonVerifyCompanyScreen({onSubmit}: {onSubmit: () => void}) {
  const [image, setImage] = useState<CrossPlatformImage>();
  const [jobInfo, setJobInfo] = useJobCache();

  const selectImage = useAsyncCallback(async (image?: CrossPlatformImage) => {
    if (!image) {
      return;
    }
    setImage(image);
    try {
      const url = await image.getUrl();
      const data = {...jobInfo, jobImage: url};
      setJobInfo(data);
      await updateJobInfo(data);
    } catch {
      setJobInfo({
        ...jobInfo,
        jobImage: '',
      });
    }
  });

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
          icon={ic_shield_blue}
          title="인증자료는 절대로 외부에 공개되지 않으니 안심해"
        />
        <Spacing height={24} />
        <Flex.Center>
          <StyledImage source={img_id_card} />
          <Spacing height={31} />
          <ImagePicker
            value={image}
            onChange={selectImage.callback}
            type="job"
          />
        </Flex.Center>
      </ContentContainer>
      <StyledInnerContainer>
        <ConsultingButton />
        <Spacing height={32} />
        <BottomCTAContainer>
          <Button
            rounded
            disabled={!image}
            loading={selectImage.isLoading}
            onPress={onSubmit}>
            완료
          </Button>
        </BottomCTAContainer>
      </StyledInnerContainer>
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
