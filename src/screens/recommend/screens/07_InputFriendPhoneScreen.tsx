import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {checkValidPhoneNumber} from '@utils/checkValidPhoneNumber';
import {formatPhoneNumber} from '@utils/formatPhoneNumber';
import React, {useState} from 'react';
import {RecommendParamList} from '..';

export const InputFriendPhoneScreen = () => {
  const navigation = useNavigation<RecommendParamList>();
  const [phone, setPhone] = useState<string>('');
  const [, update] = useRecommendFlowCache();

  const submit = useAsyncCallback(async () => {
    update(prev => ({
      ...prev,
      friendPhoneNumber: phone.replace(/[^0-9]/g, ''),
    }));
    navigation.navigate('StartSelfIntro');
  });

  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'친구의 휴대폰 번호를 알려줘'}
        subtitle={'추천사 작성이 완료되면\n휴대폰 번호를 통해 알림이 갈거야!'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'휴대폰 번호'}
            placeholder={'휴대폰 번호를 적어줘'}
            keyboardType="number-pad"
            value={formatPhoneNumber(phone)}
            onChangeText={setPhone}
          />
        </StyledInnerContainer>

        <BottomCTAButton
          disabled={!checkValidPhoneNumber(phone)}
          onPress={submit.callback}
          loading={submit.isLoading}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
