import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';

export function InputAlcoholScreen() {
  const navigation = useNavigation<ParamList>();
  const handleCTAButton = () => {
    navigation.navigate('InputMemberCigarette');
  };
  type AlcoholType =
    | '전혀 마시지 못해'
    | '가끔'
    | '어느 정도?'
    | '술자리를 좋아해';

  const fields = [
    '전혀 마시지 못해',
    '가끔',
    '어느 정도?',
    '술자리를 좋아해',
  ] as const;
  const [alcohol, setAlcohol] = useState<AlcoholType>();

  const isDisabled = Boolean(alcohol === undefined);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'🍺\n혹시 술 마셔? '} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <Flex>
            {fields.map((value, idx) => (
              <React.Fragment key={idx}>
                <ToggleButton
                  type="brownMain"
                  active={alcohol === value}
                  onPress={() => {
                    setAlcohol(value);
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
