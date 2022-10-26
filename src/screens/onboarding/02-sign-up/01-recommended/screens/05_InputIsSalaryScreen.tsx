import {Screen} from '@components/layout';
import {Text, Typography} from '@components/text';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {ParamList} from '../routes-types';

export function InputIsSalaryScreen() {
  const navigation = useNavigation<ParamList>();
  return (
    <Screen>
      <Text typography={Typography.Body_1_M}>나는 직장이 있어</Text>
    </Screen>
  );
}
