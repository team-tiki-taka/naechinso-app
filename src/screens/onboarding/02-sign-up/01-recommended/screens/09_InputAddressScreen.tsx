import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextField} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useAsyncCallback} from '@hooks/common';

export function InputAddressScreen() {
  const navigation = useNavigation<ParamList>();
  const {data, append} = useSignUpFlowCache();
  console.log(data);
  const [address, setAddress] = useState<string>('');

  const handleCTAPress = useAsyncCallback(async () => {
    append({userInfo: {...data.userInfo, address: address}});

    navigation.navigate('InputReligion');
  });

  const isDisabled = Boolean(!address);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'📍\n거주 지역은 어디야?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextField
            label={'거주지'}
            placeholder="시/구 까지만 적어줘"
            value={address}
            onChangeText={setAddress}
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
