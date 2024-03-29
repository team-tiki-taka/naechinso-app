import {BottomCTAButton} from '@components/button';
import {AppBar, Divider, Spacing} from '@components/common';
import {ImagePicker} from '@components/form';
import {CrossPlatformImage} from '@components/form/image-picker/SelectImageButton';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {List} from '@components/layout/List';
import {PageHeader} from '@components/PageHeader';
import {Star} from '@components/Star';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useMainNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import {User} from '@models/User';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {MyInfoForm} from './components/my-info-form/MyInfoForm';

export function ModifyMyProfileScreen() {
  const navigation = useMainNavigation();
  const [user] = useUser();
  // const set = useSetRecoilState(userAtomState);

  const [images, setImages] = useState<CrossPlatformImage[]>([]);
  const controls = useForm<User>({
    mode: 'all',
    defaultValues: user,
  });
  const handleCTAPress = () => {
    set(controls.getValues());
    navigation.goBack();
  };

  return (
    <Screen>
      <AppBar
        title={
          <Flex.CenterHorizontal direction="row">
            <Text typography={Typography.Body_1_B}>내 프로필 수정</Text>
            <Spacing width={40} />
          </Flex.CenterHorizontal>
        }
      />
      <ScrollView>
        <PageHeader title="프로필 사진" />
        <Spacing height={24} />
        <StyledInnerContainer>
          <List.Horizontal divider={<Spacing width={16} />}>
            {images?.map((img, idx) => (
              <Flex.CenterVertical>
                {img && (
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
                )}
                <Spacing height={10} />
                {idx === 0 ? (
                  <Flex.CenterVertical direction="row">
                    <Text
                      typography={Typography.Body_1_B}
                      color={colors.black64}>
                      대표
                    </Text>
                    <Spacing width={2} />
                    <Star active />
                  </Flex.CenterVertical>
                ) : (
                  <Star />
                )}
              </Flex.CenterVertical>
            ))}
            {images.length < 3 && (
              <ImagePicker
                type="member"
                onChange={image => setImages(prev => [...prev, image!])}
              />
            )}
          </List.Horizontal>
        </StyledInnerContainer>
        <Spacing height={28} />
        <Divider height={10} color={colors.neural} />
        <Spacing height={24} />
        <PageHeader title="내 정보" />
        <Spacing height={24} />
        <StyledInnerContainer>
          <MyInfoForm controls={controls} />
        </StyledInnerContainer>
        <Spacing height={54} />
      </ScrollView>
      <StyledLinearGradient
        colors={['transparent', 'rgba(255,255,255,0.1)', 'white']}
      />
      <BottomCTAButton onPress={controls.handleSubmit(handleCTAPress)}>
        수정 완료
      </BottomCTAButton>
    </Screen>
  );
}

const StyledLinearGradient = styled(LinearGradient)`
  height: 24px;
`;
