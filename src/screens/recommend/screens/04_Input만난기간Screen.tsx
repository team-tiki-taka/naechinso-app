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
import {useRecommendFlowCache} from '@atoms/onboarding';

export const Input만난기간Screen = () => {
  const meetTermType = {
    '1down': '1년 이하',
    '1to3': '1-3년',
    '3to5': '3-5년',
    '5up': '5년 이상',
  };

  const navigation = useOnboardingNavigation();
  const controls = useForm<{term: string}>({
    mode: 'all',
  });
  const {control} = controls;

  const [, update] = useRecommendFlowCache();

  const submit = (data: {term: string}) => {
    update(prev => ({...prev, 만난기간: data.term}));
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
          name="term"
          rules={{required: true}}
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
        <BottomCTAButton
          disabled={!controls.formState.isValid}
          onPress={controls.handleSubmit(submit)}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
