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

export function InputHobbyScreen() {
  const navigation = useNavigation<ParamList>();
  const {data, append} = useSignUpFlowCache();
  const [hobby, setHobby] = useState<string>();
  const handleCTAPress = useAsyncCallback(async () => {
    append({userInfo: {...data.userInfo, hobby: hobby}});

    navigation.navigate('InputRomanticStyle');
  });

  const isDisabled = Boolean(!hobby);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'취미&관심사가 있다면 적어줘'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextArea
            value={hobby}
            onChangeText={setHobby}
            placeholder={'맛집탐방, 산책, 테니스, 와인 뭐든 좋아!'}
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
