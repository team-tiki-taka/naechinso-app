import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {Spacing} from '@components/common/Spacing';
import {FormGroup, TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import colors from '@constants/color';
import {useStep} from '@hooks/common';
import {useOnboardingNavigation} from '@hooks/navigation';
import React, {useRef, useState} from 'react';
import {ScrollView} from 'react-native';

const fields = [
  {
    label: '직장위치',
    placeholder: '시/구 까지만 적어줘',
    returnKeyType: 'done',
    key: 'location',
  },
  {
    label: '직무',
    placeholder: '무슨 일을 하고 있어?',
    returnKeyType: 'next',
    key: 'roleName',
  },
  {
    label: '직장',
    placeholder: '현재 재직중인 회사명을 적어줘',
    returnKeyType: 'next',
    key: 'companyName',
  },
] as const;

export function InputCompanyScreen({
  handleCTAPress,
}: {
  handleCTAPress: () => void;
}) {
  const step = useStep(1, fields.length);

  const [data, setData] = useState<{
    location?: string;
    roleName?: string;
    companyName?: string;
  }>({location: '', roleName: '', companyName: ''});

  const isDisabled = fields.some(fields => !data[fields.key]);

  function onChangeInput(key, text) {
    console.log(key);

    setData({...data, [key]: text});
  }
  console.log(data);

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'💼\n어떤 일을 해?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <ScrollView>
            <FormGroup>
              {fields.map((field, idx) => {
                return fields.length - idx <= step.value ? (
                  <TextField
                    label={field.label}
                    placeholder={field.placeholder}
                    returnKeyType={field.returnKeyType}
                    onSubmitEditing={() => {
                      step.next();
                    }}
                    selectionColor={colors.orange}
                    value={data[field.key]}
                    onChange={e => {
                      console.log(field.key, data[field.key]);
                      onChangeInput(field.key, e.nativeEvent.text);
                      // console.log(e.type);
                      // console.log(e.currentTarget);
                    }}
                    onChangeText={text => {
                      // onChangeInput(field.key, text);
                      // console.log('---------');
                      // console.log(text);
                      // console.log('*********');
                      // // console.log(field.key, data[field.key]);
                      // setData(prev => ({...prev, [field.key]: text}));
                    }}
                    autoFocus={fields.length - idx === step.value}
                  />
                ) : undefined;
              })}
            </FormGroup>
          </ScrollView>
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}