import {Badge} from '@components/Badge';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {List} from '@components/layout/List';
import {PageHeader} from '@components/PageHeader';
import colors from '@constants/color';
import {useOnboardingNavigation} from '@hooks/navigation';
import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

export function ProfileImageScreen() {
  const navigation = useOnboardingNavigation();
  const [images, setImages] = useState<Image[]>([]);

  const handleCTAPress = () => {
    navigation.navigate('Welcome');
  };

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
                key={[img.sourceURL, idx].join()}
                value={img}
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
            onPress={handleCTAPress}>
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
