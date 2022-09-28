import Button from '@components/Button';
import CheckBox from '@components/CheckBox';
import {Flex} from '@components/layout';
import {Spacing} from '@components/Spacing';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import {range} from 'lodash';
import React, {ReactNode, useCallback, useState} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';

export function useAgreementsSheet() {
  const {open, close} = useBottomSheet();

  return useCallback(() => {
    return new Promise<void>(resolve => {
      open(<AgreementsSheet onConfirm={resolve} />);
    });
  }, [open, close]);
}

export function AgreementsSheet({onConfirm}: {onConfirm: () => void}) {
  const [agreedItems, setAgreedItmes] = useState<number[]>([]);
  const toggleAgree = (idx: number) => {
    setAgreedItmes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx],
    );
  };

  const isAgreeAll = agreedItems.length == AGREEMENTS.length;
  const toggleAgreeAll = () => {
    setAgreedItmes(isAgreeAll ? [] : range(0, AGREEMENTS.length));
  };

  return (
    <View>
      <Text typography={Typography.Headline_1_B}>내친소 이용 약관 동의</Text>
      <Spacing height={20} />
      <AgreementRowContainer onPress={toggleAgreeAll}>
        <CheckBox type="circle" checked={isAgreeAll} />
        <Text typography={Typography.Subtitle_1_B}>
          내친소 이용약관에 모두 동의하기
        </Text>
      </AgreementRowContainer>
      {AGREEMENTS.map((item, idx) => (
        <AgreementItem
          url={item.url}
          title={item.title}
          checked={agreedItems.includes(idx)}
          onPress={() => toggleAgree(idx)}
        />
      ))}
      <Spacing height={36} />
      <Button onPress={onConfirm}>확인</Button>
    </View>
  );
}

const AGREEMENTS = [
  {url: '', title: '서비스 이용약관전체동의'},
  {url: '', title: '개인정보 처리 동의'},
  {url: '', title: '종교정보 제공 동의'},
  {url: '', title: '위치정보 제공 동의 (선택)'},
  {url: '', title: '마케팅 정보 수신 동의 (선택)'},
];

function AgreementItem({
  checked,
  url,
  title,
  onPress,
}: {
  checked?: boolean;
  url: string;
  title: string;
  onPress?: () => void;
}) {
  return (
    <AgreementRowContainer onPress={onPress}>
      <CheckBox checked={checked} />
      <Text typography={Typography.Subtitle_2_M}>{title}</Text>
      <Spacing flex={1} />
      <TouchableOpacity
        style={{padding: 4}}
        onPress={() => Linking.openURL(url)}>
        <Text typography={Typography.Caption_1_M} color={colors.black20}>
          보기
        </Text>
      </TouchableOpacity>
    </AgreementRowContainer>
  );
}

function AgreementRowContainer({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Flex.CenterVertical
        direction="row"
        style={{paddingHorizontal: 24, paddingVertical: 24}}>
        {children}
      </Flex.CenterVertical>
    </TouchableOpacity>
  );
}
