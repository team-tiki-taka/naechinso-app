import {useSignUpFlowCache} from '@atoms/onboarding';
import {Badge} from '@components/Badge';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {CrossPlatformImage} from '@components/form/image-picker/SelectImageButton';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {List} from '@components/layout/List';
import {PageHeader} from '@components/PageHeader';
import colors from '@constants/color';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {finishSignUp} from '@remotes/sign-up';
import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {ParamList} from '../routes-types';

export function InputProfileImagesScreen() {
  const navigation = useNavigation<ParamList>();
  const [images, setImages] = useState<CrossPlatformImage[]>([]);

  const {data} = useSignUpFlowCache();

  const handleCTAPress = useAsyncCallback(async () => {
    const imageUrls = await Promise.all(images.map(i => i.getUrl()));
    finishSignUp({...data.userInfo, images: imageUrls});
    navigation.navigate('Welcome');
  });

  return (
    <Screen>
      <AppBar back />
      <PageHeader title={'너의 매력이 듬뿍 담긴\n사진을 3장 올려줘!'} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Spacing height={12} />
          <Badge
            type="danger"
            icon={require('@assets/icons/ic_exclaimation_circle_error.png')}
            title="얼굴이 잘 안 보이면 사진 심사에서 반려될 수 있어"
          />
          <Spacing height={24} />
          <List.Horizontal divider={<Spacing width={12} />}>
            {images?.map((img, idx) => (
              <ImagePicker
                value={img}
                type="member"
                onChange={() =>
                  setImages(prev => {
                    const newItems = [...prev];
                    newItems.splice(idx, 1);
                    return newItems;
                  })
                }
              />
            ))}
            {images.length < 3 && (
              <ImagePicker
                type="member"
                onChange={image => setImages(prev => [...prev, image!])}
              />
            )}
          </List.Horizontal>
        </StyledInnerContainer>

        <Flex align="flex-end">
          <StyledInnerContainer>
            <Flex align="flex-end">
              <Flex align="center">
                <Image
                  source={require('@assets/images/img_profile_text.png')}
                />
                <Image
                  source={require('@assets/images/img_profile_arrow.png')}
                />
              </Flex>
              <Spacing height={10} />
              <FloatingButton />
            </Flex>
            <Spacing height={32} />
          </StyledInnerContainer>
          <BottomCTAButton
            disabled={images.length < 3}
            onPress={handleCTAPress.callback}>
            다음
          </BottomCTAButton>
        </Flex>
      </Flex>
    </Screen>
  );
}

const FloatingButton = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: ${colors.black20};
`;
