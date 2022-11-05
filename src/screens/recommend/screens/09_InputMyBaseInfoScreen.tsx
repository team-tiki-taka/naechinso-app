import {BottomCTAButton} from '@components/button';
import {Spacing} from '@components/common';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useNavigation} from '@hooks/navigation';
import {UserBaseInfo} from '@models/UserBaseInfo';
import React from 'react';
import {useForm} from 'react-hook-form';
import {RecommendParamList} from '..';

export const InputMyBaseInfoScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const handleCTAPress = () => {
    navigation.navigate('SelectVerifyMethod');
  };

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader title={'너에 대해서도 살짝 소개해줘!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm
            controls={controls}
            namePlaceholder={'이름 가운데는 *처리돼'}
            agePlaceholder={'나이는 공개되지 않아'}
          />
        </StyledInnerContainer>
        <BottomCTAButton onPress={handleCTAPress}>다음</BottomCTAButton>
      </Flex>
    </Screen>
  );
};
