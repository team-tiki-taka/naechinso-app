import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export function InputMemberReligionScreen() {
  const navigation = useOnboardingNavigation();
  const handleCTAButton = () => {
    navigation.navigate('InputMemberAlcohol');
  };
  type ReligionType = '무교' | '기독교' | '천주교' | '불교' | '기타';
  const fields = ['무교', '기독교', '천주교', '불교', '기타'] as const;
  const [religion, setReligion] = useState<ReligionType>();

  const isDisabled = Boolean(religion === undefined);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🙏🏻\n종교는 뭐야? '} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex>
            {fields.map((value, idx) => (
              <React.Fragment key={idx}>
                <ToggleButton
                  type="brownMain"
                  active={religion === value}
                  onPress={() => {
                    setReligion(value);
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
