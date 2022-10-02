import Button from '@components/Button';
import React from 'react';
import {Text, View} from 'react-native';
import {useSignupAgreementsSheet} from './onboarding/components/SignupAgreementsSheet';

export default function OnboardingScreen() {
  const open = useSignupAgreementsSheet();
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
