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

type MeetType = 'family' | 'school' | 'university' | 'business';

export const InputFriendMeetTermScreen = () => {
  const navigation = useOnboardingNavigation();
  const controls = useForm({
    mode: 'all',
  });
  const {control} = controls;

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
                <ToggleButton
                  type="brownMain"
                  active={value === '1down'}
                  onPress={() => {
                    onChange('1down');
                  }}>
                  1년 이하
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === '1to3'}
                  onPress={() => {
                    onChange('1to3');
                  }}>
                  1-3년
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === '3to5'}
                  onPress={() => {
                    onChange('3to5');
                  }}>
                  3-5년
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === '5up'}
                  onPress={() => {
                    onChange('5up');
                  }}>
                  5년 이상
                </ToggleButton>
                <Spacing height={16} />
              </StyledInnerContainer>
            </AutoScrollView>
          )}
        />

        <Spacing height={41} />
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('InputFriendPersonality');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
