import {useSchoolInfo} from '@atoms/onboarding';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {SchoolType} from '@models/SchoolType';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ParamList} from '../routes-types';

export const InputMySchoolScreen = () => {
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

  const submit = useAsyncCallback(async () => {
    const values = controls.getValues();
    setSchoolInfo({
      eduName: values.eduName,
      eduLevel: values.eduLevel,
      eduMajor: values.eduMajor,
    });
    navigation.navigate('VerfyMySchool');
  });

  return (
    <CommonInputSchoolScreen controls={controls} onConfirm={submit.callback} />
  );
};
