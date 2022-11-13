import {useNavigation} from '@hooks/navigation';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import React from 'react';
import {ParamList} from '../routes-types';
import {useSchoolCache} from '@atoms/onboarding';
import {useForm} from 'react-hook-form';
import {EduLevelType} from '@models/EduLevelType';
import {useAsyncCallback} from '@hooks/common';

export function InputSchoolScreen() {
  const navigation = useNavigation<ParamList>();
  const [, setSchoolInfo] = useSchoolCache();

  const controls = useForm({
    mode: 'all',
    defaultValues: {
      eduName: '',
      eduLevel: EduLevelType.UNIV,
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
