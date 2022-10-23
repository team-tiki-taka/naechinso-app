import {BottomCTAButton} from '@components/button/BottomCTAButton';
import {Spacing} from '@components/common/Spacing';
import CheckBox from '@components/form/CheckBox';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {ReactNode, useCallback, useState} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';

interface AgreementState {
  acceptsInfo: boolean;
  acceptsLocation: boolean;
  acceptsMarketing: boolean;
  acceptsReligion: boolean;
  acceptsService: boolean;
}

function createAgreementState(state = false) {
  return {
    acceptsInfo: state,
    acceptsLocation: state,
    acceptsMarketing: state,
    acceptsReligion: state,
    acceptsService: state,
  };
}

export function useSignUpAgreementsSheet() {
  const {open, close} = useBottomSheet();

  return useCallback(() => {
    return new Promise<AgreementState>((resolve, reject) => {
      open(<AgreementsSheet onConfirm={resolve} />, {onClose: reject});
    }).finally(close);
  }, [open, close]);
}

export function AgreementsSheet({
  onConfirm,
}: {
  onConfirm: (data: AgreementState) => void;
}) {
  const [agreedItems, setAgreedItmes] = useState<AgreementState>(
    createAgreementState(false),
  );
  const toggleAgree = (id: keyof AgreementState) => {
    setAgreedItmes(prev => ({...prev, [id]: !prev[id]}));
  };

  const isAgreeAll = Object.entries(agreedItems).every(([, state]) => state);
  const toggleAgreeAll = () => {
    setAgreedItmes(createAgreementState(true));
  };
  const isDisabled = AGREEMENTS.some(i => !agreedItems[i.id] && !i.isOptional);

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
          checked={agreedItems[item.id]}
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

const AGREEMENTS: Array<{
  url: string;
  title: string;
  id: keyof AgreementState;
  isOptional?: boolean;
}> = [
  {url: '', title: '서비스 이용약관전체동의', id: 'acceptsService'},
  {url: '', title: '개인정보 처리 동의', id: 'acceptsInfo'},
  {url: '', title: '종교정보 제공 동의', id: 'acceptsReligion'},
  {
    url: '',
    title: '위치정보 제공 동의 (선택)',
    id: 'acceptsLocation',
    isOptional: true,
  },
  {
    url: '',
    title: '마케팅 정보 수신 동의 (선택)',
    id: 'acceptsMarketing',
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
