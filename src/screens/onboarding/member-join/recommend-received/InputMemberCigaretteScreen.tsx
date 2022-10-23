import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberCigaretteScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAButton = () => {
    navigation.navigate('InputMemberMBTI');
  };
  type CigaretteType = '비흡연자야' | '흡연자야' | '전자담배 펴';

  const fields = ['비흡연자야', '흡연자야', '전자담배 펴'] as const;
  const [cigarette, setCigarette] = useState<CigaretteType>();

  const isDisabled = Boolean(cigarette === undefined);

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
                  active={cigarette === value}
                  onPress={() => {
                    setCigarette(value);
                  }}>
                  {value}
                </ToggleButton>
                <Spacing height={16} />
              </React.Fragment>
            ))}
          </Flex>
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAButton}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
