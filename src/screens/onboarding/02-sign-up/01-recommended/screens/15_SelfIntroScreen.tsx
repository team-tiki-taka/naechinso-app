import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextArea} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useAsyncCallback} from '@hooks/common';

export function SelfIntroScreen() {
  const navigation = useNavigation<ParamList>();
  const {data, append} = useSignUpFlowCache();
  const [introduce, setIntroduce] = useState<string>();
  const handleCTAPress = useAsyncCallback(async () => {
    append({userInfo: {...data.userInfo, introduce: introduce}});

    navigation.navigate('InputHobby');
  });

  const isDisabled = Boolean(!introduce);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'남들보다 내가 이건 좀 낫지!\n하는 게 있을까?😎 '} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextArea
            value={introduce}
            onChangeText={setIntroduce}
            placeholder={
              '- 난 고민을 잘 들어줘\n- 옷을 잘 입는 편이야\n- 맛집을 잘 알아'
            }
            maxLength={300}
          />
        </StyledInnerContainer>
        <BottomCTAButton
          disabled={isDisabled}
          onPress={handleCTAPress.callback}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
