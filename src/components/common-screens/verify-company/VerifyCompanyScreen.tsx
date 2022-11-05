import {useJobCache} from '@atoms/onboarding';
import {Badge} from '@components/Badge';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {sendImage} from '@remotes/image';
import {updateJobInfo} from '@remotes/user';
import {first} from 'lodash';
import React, {useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';

export function CommonVerifyCompanyScreen({onSubmit}: {onSubmit: () => void}) {
  const [image, setImage] = useState<Image>();
  const [jobInfo, setJobInfo] = useJobCache();

  const handleImageSelect = async (image?: Image) => {
    if (!image) {
      return;
    }
    setImage(image);
    try {
      const res = await sendImage({images: image, dir: 'job'});
      const data = {...jobInfo, jobImage: first(res)};
      setJobInfo(data);
      await updateJobInfo(data);
    } catch {
      setJobInfo({
        ...jobInfo,
        jobImage: '',
      });
    }
  };

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
        <Flex.Center>
          <StyledImage source={require('@assets/images/img_id_card.png')} />
          <Spacing height={31} />
          <ImagePicker value={image} onChange={handleImageSelect} />
        </Flex.Center>
      </ContentContainer>
      <BottomCTAButton disabled={!image} onPress={onSubmit}>
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
