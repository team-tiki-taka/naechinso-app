import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {Screen} from '@components/layout';
import {List} from '@components/layout/List';
import React, {useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';
import {Badge} from '../../../components/Badge';
import {PageHeader} from '../../../components/PageHeader';

export function ProfileImageScreen() {
  const [images, setImages] = useState<Image[]>([]);

  const handleCTAPress = () => {};

  return (
    <Screen>
      <AppBar back />
      <PageHeader title={'너의 매력이 듬뿍 담긴\n사진을 3장 올려줘!'} />
      <ContentContainer>
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
      </ContentContainer>
      <BottomCTAButton disabled={images.length < 3} onPress={handleCTAPress}>
        다음
      </BottomCTAButton>
    </Screen>
  );
}

const ContentContainer = styled.View`
  padding: 0 24px;
  flex: 1;
`;
