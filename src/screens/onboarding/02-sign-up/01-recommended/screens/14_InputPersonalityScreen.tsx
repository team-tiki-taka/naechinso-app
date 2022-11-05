import React, {useState} from 'react';
import {useNavigation} from '@hooks/navigation';
import {CommonInputPersonalityScreen as CommonInputPersonalityScreen} from '@components/common-screens/personality';
import {ParamList} from '../routes-types';
import {useSignUpFlowCache} from '@atoms/onboarding';
import {useAsyncCallback} from '@hooks/common';

export function InputPersonalityScreen() {
  const navigation = useNavigation<ParamList>();
  const {data, append} = useSignUpFlowCache();
  console.log(data);

  const [selectedList, setSelectedList] = useState<string[]>([]);

  const onCTAPress = useAsyncCallback(async () => {
    // api personality type이 string[]이 아니라 string이라서 우선 이렇게 해놓음
    append({userInfo: {...data.userInfo, personalities: selectedList}});
    navigation.navigate('SelfIntro');
  });

  return (
    <CommonInputPersonalityScreen
      value={selectedList}
      onChange={setSelectedList}
      onConfirm={onCTAPress.callback}
    />
  );
}
