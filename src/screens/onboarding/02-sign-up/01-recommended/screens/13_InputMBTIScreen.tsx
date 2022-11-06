import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useAsyncCallback} from '@hooks/common';

export function InputMBTIScreen() {
  const navigation = useNavigation<ParamList>();

  const [mbti, setMbti] = useState<string>('');

  const {data, append} = useSignUpFlowCache();

  const handleCTAButton = useAsyncCallback(async () => {
    append({userInfo: {...data.userInfo, mbti: mbti}});
    navigation.navigate('InputPersonality');
  });
  const isDisabled = checkIsValidMBTI(mbti);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'MBTI는 뭐야?\n모르면 PASS~!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField label={'MBTI'} value={mbti} onChangeText={setMbti} />
        </StyledInnerContainer>
        <BottomCTAButton
          disabled={isDisabled}
          onPress={handleCTAButton.callback}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}

function checkIsValidMBTI(value: string) {
  return /(I|E)(N|S)(F|T)(P|J)/.test(value);
}
