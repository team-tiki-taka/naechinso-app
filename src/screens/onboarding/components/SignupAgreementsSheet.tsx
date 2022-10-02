import {BottomCTAButton} from '@components/button/BottomCTAButton';
import CheckBox from '@components/form/CheckBox';
import {Flex} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {ReactNode, useCallback, useState} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';

export function useSignupAgreementsSheet() {
  const {open, close} = useBottomSheet();

  return useCallback(() => {
    return new Promise<string[]>(resolve => {
      open(<AgreementsSheet onConfirm={resolve} />);
    });
  }, [open, close]);
}

export function AgreementsSheet({
  onConfirm,
}: {
  onConfirm: (items: string[]) => void;
}) {
  const [agreedItems, setAgreedItmes] = useState<string[]>([]);
  const toggleAgree = (id: string) => {
    setAgreedItmes(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const isAgreeAll = agreedItems.length === AGREEMENTS.length;
  const toggleAgreeAll = () => {
    setAgreedItmes(isAgreeAll ? [] : AGREEMENTS.map(i => i.id));
  };
  const isDisabled = AGREEMENTS.some(
    i => !agreedItems.includes(i.id) && !i.isOptional,
  );

  return (
    <View>
      <Spacing height={30} />
      <Text typography={Typography.Headline_1_B} center>
        내친소 이용 약관 동의
      </Text>
      <Spacing height={20} />
      <AgreementRowContainer onPress={toggleAgreeAll}>
        <CheckBox type="circle" checked={isAgreeAll} />
        <Spacing width={8} />
        <Text typography={Typography.Subtitle_1_B}>
          내친소 이용약관에 모두 동의하기
        </Text>
      </AgreementRowContainer>
      <Spacing height={4} />
      {AGREEMENTS.map(item => (
        <AgreementItem
          url={item.url}
          title={item.title}
          checked={agreedItems.includes(item.id)}
          onPress={() => toggleAgree(item.id)}
        />
      ))}
      <Spacing height={36} />
      <BottomCTAButton
        onPress={() => onConfirm(agreedItems)}
        disabled={isDisabled}>
        확인
      </BottomCTAButton>
    </View>
  );
}

const AGREEMENTS = [
  {url: '', title: '서비스 이용약관전체동의', id: 'termsOfService'},
  {url: '', title: '개인정보 처리 동의', id: 'personalInformation'},
  {url: '', title: '종교정보 제공 동의', id: 'religious'},
  {
    url: '',
    title: '위치정보 제공 동의 (선택)',
    id: 'location',
    isOptional: true,
  },
  {
    url: '',
    title: '마케팅 정보 수신 동의 (선택)',
    id: 'marketing',
    isOptional: true,
  },
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
      <CheckBox checked={checked} type="light" />
      <Spacing width={8} />
      <Text
        typography={Typography.Subtitle_2_M}
        color={checked ? colors.black : colors.black40}>
        {title}
      </Text>
      <Spacing flex={1} />
      <TouchableOpacity
        style={{padding: 4}}
        onPress={() => Linking.openURL(url)}>
        <Text
          typography={Typography.Caption_1_M}
          color={checked ? colors.orange : colors.black20}>
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
        style={{paddingHorizontal: 24, paddingVertical: 5}}>
        {children}
      </Flex.CenterVertical>
    </TouchableOpacity>
  );
}
