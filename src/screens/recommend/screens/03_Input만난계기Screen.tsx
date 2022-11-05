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
import {useRecommendFlowCache} from '@atoms/onboarding';

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
  const controls = useForm<{meet: string}>({
    mode: 'all',
  });
  const {control, handleSubmit} = controls;
  const [, update] = useRecommendFlowCache();

  const submit = (data: {meet: string}) => {
    update(prev => ({...prev, 만난계기: data.meet}));
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
          rules={{required: true}}
          render={({field: {value, onChange}}) => {
            const isEtc =
              !['family', 'school', 'university', 'business'].includes(value) &&
              value !== undefined;
            return (
              <AutoScrollView>
                <StyledInnerContainer>
                  {meetList.map((meet, idx) => (
                    <React.Fragment key={idx}>
                      <ToggleButton
                        type="brownMain"
                        size="big"
                        padding
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
        <BottomCTAButton
          disabled={!controls.formState.isValid}
          onPress={handleSubmit(submit)}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
});
