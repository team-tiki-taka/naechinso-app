import {useSchoolCache} from '@atoms/onboarding';
import {CommonInputSchoolScreen} from '@components/common-screens/verify-student';
import {useAsyncCallback} from '@hooks/common';
import {useNavigation} from '@hooks/navigation';
import {EduLevelType} from '@models/EduLevelType';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ParamList} from '../routes-types';

export const InputMySchoolScreen = () => {
  const navigation = useNavigation<ParamList>();
  const [, update] = useSchoolCache();

  const controls = useForm({
    mode: 'all',
    defaultValues: {
      eduName: '',
      eduLevel: EduLevelType.UNIV,
      eduMajor: '',
    },
  });

  const submit = useAsyncCallback(async () => {
    const values = controls.getValues();
    update({
      eduName: values.eduName,
      eduLevel: values.eduLevel,
      eduMajor: values.eduMajor,
    });
    navigation.navigate('VerifyMySchool');
  });

  return (
    <CommonInputSchoolScreen controls={controls} onConfirm={submit.callback} />
  );
};
