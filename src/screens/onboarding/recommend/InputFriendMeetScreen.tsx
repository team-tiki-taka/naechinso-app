import React, {useState} from 'react';
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
import {useBooleanState} from '@hooks/common';
import {TextInput} from 'react-native';
import colors from '@constants/color';
import {Text, Typography} from '@components/text';
import {Controller, useForm} from 'react-hook-form';

type MeetType = 'family' | 'school' | 'university' | 'business';

export const InputFriendMeetScreen = () => {
  const navigation = useOnboardingNavigation();
  const [selected, setSelected] = useState<MeetType | string>('');
  const [isEtc, setIsEtcTrue, setIsEtcFalse] = useBooleanState(false);
  const controls = useForm({
    mode: 'all',
  });
  const {control} = controls;

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'어떻게 만난 사이야?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <Controller
          control={control}
          name="meet"
          render={({field: {value, onChange}}) => (
            <AutoScrollView>
              <StyledInnerContainer>
                <ToggleButton
                  type="brownMain"
                  active={value === 'family'}
                  onPress={() => {
                    onChange('family');
                    setIsEtcFalse();
                  }}>
                  친족
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === 'school'}
                  onPress={() => {
                    onChange('school');
                    setIsEtcFalse();
                  }}>
                  초/중/고 친구
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === 'university'}
                  onPress={() => {
                    onChange('university');
                    setIsEtcFalse();
                  }}>
                  대학교 친구
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={value === 'business'}
                  onPress={() => {
                    onChange('business');
                    setIsEtcFalse();
                  }}>
                  회사 친구
                </ToggleButton>
                <Spacing height={16} />
                <ToggleButton
                  type="brownMain"
                  active={isEtc}
                  onPress={() => {
                    setIsEtcTrue();
                    onChange('');
                  }}>
                  기타
                </ToggleButton>
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
                      onChangeText={onChange}
                      placeholder={'그러면 어떻게 만났어?'}
                      placeholderTextColor={colors.black20}
                    />
                  </Flex>
                )}
              </StyledInnerContainer>
            </AutoScrollView>
          )}
        />

        <Spacing height={41} />
        <BottomCTAButton
          onPress={() => {
            if (isEtc) {
              navigation.navigate('InputFriendMeetTerm');
            } else {
              navigation.navigate('InputFriendPersonality');
            }
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
