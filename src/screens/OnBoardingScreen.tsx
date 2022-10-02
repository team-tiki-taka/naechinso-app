import Button from '@components/Button';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import {Text, View} from 'react-native';

export default function OnboardingScreen() {
  const navigation = useOnboardingNavigation();
  return (
    <View>
      <Text>onBoarding</Text>
      <Button
        onPress={() => {
          navigation.navigate('smsAuth', {text: 'hi'});
        }}>
        다음
      </Button>
    </View>
  );
}
