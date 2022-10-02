import Button from '@components/Button';
import React from 'react';
import {Text, View} from 'react-native';
import {useAgreementsSheet} from './onboarding/components/AgreementsSheet';

export default function OnboardingScreen() {
  const open = useAgreementsSheet();
  return (
    <View>
      <Text>onBoarding</Text>
      <Button
        onPress={() => {
          open();
        }}>
        다음
      </Button>
    </View>
  );
}
