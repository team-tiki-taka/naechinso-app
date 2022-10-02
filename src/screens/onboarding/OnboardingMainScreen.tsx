import {useAlertSheet} from '@components/interaction/AlertSheet';
import {Button} from '@components/button';
import {FormGroup, TextField} from '@components/form';
import {useOnboardingNavigation} from '@hooks/navigation';
import React from 'react';
import {Text, View} from 'react-native';

export default function OnboardingScreen() {
  const navigation = useOnboardingNavigation();
  const open = useAlertSheet();
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text>onBoarding</Text>
      <Button
        onPress={() => {
          open(
            '인증번호 입력 시간이\n초과되었어 ⏰',
            '같은 번호로 다시 보내줄테니까\n확인하고 다시 입력해줘!',
            '다시 받기',
          );
        }}>
        다음
      </Button>
      <View style={{padding: 24}}>
        <FormGroup>
          <TextField label="가나다라" placeholder="asf" />
          <TextField label="가나다라" placeholder="asf" />
        </FormGroup>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('VerifyCompany');
        }}>
        다음
      </Button>
    </View>
  );
}
