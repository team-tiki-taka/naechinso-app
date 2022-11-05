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
import {TextInput} from 'react-native';
import colors from '@constants/color';
import {Text, Typography} from '@components/text';
import {Controller, useForm} from 'react-hook-form';
import {withSuspense} from '@hocs/withSuspense';

const meetType = {
  family: '친족',
  school: '초/중/고 친구',
  university: '대학교 친구',
  business: '회사 친구',
  '': '기타',
};

const meetList = ['family', 'school', 'university', 'business', ''] as const;

export const Input만난계기Screen = withSuspense(() => {
  const navigation = useOnboardingNavigation();
  const controls = useForm({
    mode: 'all',
  });
  const {control} = controls;

  const isDisabled = Boolean(!controls.watch('meet'));
  const isEtc = !(
    controls.watch('meet') === 'family' ||
    controls.watch('meet') === 'school' ||
    controls.watch('meet') === 'university' ||
    controls.watch('meet') === 'business'
  );

  const handleCTAPress = () => {
    navigation.navigate('Input만난기간');
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'어떻게 만난 사이야?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <Controller
          control={control}
          name="meet"
          render={({field: {value, onChange}}) => {
            return (
              <AutoScrollView>
                <StyledInnerContainer>
                  {meetList.map((meet, idx) => (
                    <React.Fragment key={idx}>
                      <ToggleButton
                        type="brownMain"
                        active={value === meet || (idx === 4 && isEtc)}
                        onPress={() => {
                          onChange(meet);
                        }}>
                        {meetType[meet]}
                      </ToggleButton>
                      <Spacing height={16} />
                    </React.Fragment>
                  ))}
                  <Spacing height={4} />
                  {isEtc && (
                    <Flex direction="row">
                      <Text
                        typography={Typography.Subtitle_2_M}
                        color={colors.brown}>
                        {': '}
                      </Text>
                      <TextInput
                        value={value}
                        onChangeText={text => onChange(text)}
                        placeholder={'그러면 어떻게 만났어?'}
                        placeholderTextColor={colors.black20}
                      />
                    </Flex>
                  )}
                </StyledInnerContainer>
              </AutoScrollView>
            );
          }}
        />
        <Spacing height={41} />
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
});
