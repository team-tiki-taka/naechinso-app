import {useNavigation} from '@hooks/navigation';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';
import {ParamList} from '../routes-types';
import {useSchoolInfo} from '@atoms/onboarding';
import {useForm} from 'react-hook-form';
import {SchoolType} from '@models/SchoolType';
import {useAsyncCallback} from '@hooks/common';

export function InputSchoolScreen() {
  const navigation = useNavigation<ParamList>();
  const [, setSchoolInfo] = useSchoolInfo();

  const controls = useForm({
    mode: 'all',
    defaultValues: {
      eduName: '',
      eduLevel: SchoolType.UNIV,
      eduMajor: '',
    },
  });

  const handleCTAPress = useAsyncCallback(async () => {
    const values = controls.getValues();
    setSchoolInfo({
      eduName: values.eduName,
      eduLevel: values.eduLevel,
      eduMajor: values.eduMajor,
    });
    navigation.navigate('InputIsSalary');
  });

  return (
    <CommonInputSchoolScreen
      controls={controls}
      onConfirm={handleCTAPress.callback}
    />
  );
}
