import {useSignUpFlowCache} from '@atoms/onboarding';
import {BottomCTAButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import React, {useState} from 'react';
import {ParamList} from '../routes-types';

export function InputMBTIScreen() {
  const navigation = useNavigation<ParamList>();

  const [mbti, setMbti] = useState<string>('');
  const formattedMBTI = mbti.toUpperCase().replace(/[^iensftpjIENSFTPJ]/, '');

  const {data, append} = useSignUpFlowCache();

  const handleCTAButton = useAsyncCallback(async () => {
    append({
      userInfo: {...data.userInfo, mbti: mbti === '' ? mbti : formattedMBTI},
    });
    navigation.navigate('InputPersonality');
  });
  const isDisabled = !mbti || !checkIsValidMBTI(mbti);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'MBTI는 뭐야?\n모르면 PASS~!'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            placeholder={'MBTI를 적어줘'}
            label={'MBTI'}
            value={formattedMBTI}
            maxLength={4}
            onChangeText={setMbti}
          />
        </StyledInnerContainer>
        <BottomCTAButton
          onPress={handleCTAButton.callback}
          disabled={isDisabled}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}

function checkIsValidMBTI(value: string) {
  return /(I|E|i|e)(N|S|n|s)(F|T|f|t)(P|J|p|j)/.test(value);
}
