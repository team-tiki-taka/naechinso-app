import {useRecommendFlowCache} from '@atoms/onboarding';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {Text, Typography, useTextStyle} from '@components/text';
import colors from '@constants/color';
import {withSuspense} from '@hocs/withSuspense';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, TextInput} from 'react-native';

export const meetType: Record<string, string> = {
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

  const textStyle = useTextStyle({typography: Typography.Subtitle_2_M});

  return (
    <Screen>
      <AppBar />
      <ScrollView>
        <PageHeader title={'어떻게 만난 사이야?'} />
        <Spacing height={24} />
        <Flex justify="space-between" style={{flex: 1}}>
          <Controller
            control={control}
            name="meet"
            rules={{required: true}}
            render={({field: {value, onChange}}) => {
              const isEtc =
                !['family', 'school', 'university', 'business'].includes(
                  value,
                ) && value !== undefined;
              return (
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
                      {idx !== 4 && <Spacing height={16} />}
                    </React.Fragment>
                  ))}
                  <Spacing height={4} />
                  {isEtc && (
                    <Flex.CenterVertical direction="row">
                      <Text
                        typography={Typography.Subtitle_1_M}
                        color={colors.brown}>
                        {': '}
                      </Text>
                      <Flex>
                        <Spacing height={4} />
                        <Flex.CenterVertical direction="row">
                          <Spacing width={20} />
                          <TextInput
                            value={value}
                            onChangeText={text => onChange(text)}
                            placeholder={'그러면 어떻게 만났어?'}
                            placeholderTextColor={colors.black20}
                            style={textStyle}
                            autoFocus
                          />
                        </Flex.CenterVertical>
                      </Flex>
                    </Flex.CenterVertical>
                  )}
                </StyledInnerContainer>
              );
            }}
          />
        </Flex>
        <Spacing height={100} />
      </ScrollView>
      <BottomCTAButton
        disabled={!controls.formState.isValid}
        onPress={handleSubmit(submit)}>
        다음
      </BottomCTAButton>
    </Screen>
  );
});
