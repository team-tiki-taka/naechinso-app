import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';
import {SmokingType} from '@models/SmokingType';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useAsyncCallback} from '@hooks/common';

export function InputSmokingScreen() {
  const navigation = useNavigation<ParamList>();

  const fields = ['비흡연자야', '흡연자야', '전자담배 펴'] as const;
  const [smoking, setSmoking] = useState<SmokingType>();

  const {data, append} = useSignUpFlowCache();

  const handleCTAButton = useAsyncCallback(async () => {
    append({userInfo: {...data.userInfo, smoke: smoking}});
    navigation.navigate('InputMBTI');
  });

  const isDisabled = Boolean(smoking === undefined);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🚬\n담배는?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex>
            {fields.map((value, idx) => (
              <React.Fragment key={idx}>
                <ToggleButton
                  type="brownMain"
                  padding
                  size="big"
                  active={smoking === value}
                  onPress={() => {
                    setSmoking(value);
                  }}>
                  {value}
                </ToggleButton>
                <Spacing height={16} />
              </React.Fragment>
            ))}
          </Flex>
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
