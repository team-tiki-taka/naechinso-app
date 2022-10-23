import React from 'react';
import {AppBar, Spacing} from '@components/common';
import {
  AutoScrollView,
  Flex,
  Screen,
  StyledInnerContainer,
} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';
import {Controller, useForm} from 'react-hook-form';

export const Input만난기간Screen = () => {
  const meetTermType = {
    '1down': '1년 이하',
    '1to3': '1-3년',
    '3to5': '3-5년',
    '5up': '5년 이상',
  };

  const navigation = useOnboardingNavigation();
  const controls = useForm({
    mode: 'all',
  });
  const {control} = controls;

  const handleCTAPress = () => {
    navigation.navigate('InputFriendPersonality');
  };

  const meetTermList = ['1down', '1to3', '3to5', '5up'] as const;

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'알고 지낸 지는 얼마나 됐어?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <Controller
          control={control}
          name="meetTerm"
          render={({field: {value, onChange}}) => (
            <AutoScrollView>
              <StyledInnerContainer>
                {meetTermList.map((meetTerm, idx) => (
                  <React.Fragment key={idx}>
                    <ToggleButton
                      type="brownMain"
                      active={value === meetTerm}
                      onPress={() => {
                        onChange(meetTerm);
                      }}>
                      {meetTermType[meetTerm]}
                    </ToggleButton>
                    <Spacing height={16} />
                  </React.Fragment>
                ))}
              </StyledInnerContainer>
            </AutoScrollView>
          )}
        />
        <BottomCTAButton onPress={handleCTAPress}>다음</BottomCTAButton>
      </Flex>
    </Screen>
  );
};
