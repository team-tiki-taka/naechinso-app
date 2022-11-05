import React, {useState} from 'react';
import {BottomCTAButton} from '@components/button';
import {AppBar} from '@components/common';
import {Spacing} from '@components/common/Spacing';
import {FormGroup, TextField} from '@components/form';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import colors from '@constants/color';
import {useStep} from '@hooks/common';
import {ScrollView} from 'react-native';
import {UpdateJobInfoPayload} from '@remotes/user';
import {sleep} from '@utils/sleep';
import {range, reverse} from 'lodash';

// value끼리 동기화 되는 문제가 해결이 안됨

const fields = [
  {
    label: '직장',
    placeholder: '현재 재직중인 회사명을 적어줘',
    returnKeyType: 'next',
    key: 'jobName',
  },
  {
    label: '직무',
    placeholder: '무슨 일을 하고 있어?',
    returnKeyType: 'next',
    key: 'jobPart',
  },
  {
    label: '직장위치',
    placeholder: '시/구 까지만 적어줘',
    returnKeyType: 'done',
    key: 'jobLocation',
  },
] as const;

export function CommonInputCompanyScreen({
  onSubmit,
}: {
  onSubmit: (data: Omit<UpdateJobInfoPayload, 'jobImage'>) => void;
}) {
  const step = useStep(1, fields.length);
  const [data, setData] = useState({jobLocation: '', jobPart: '', jobName: ''});
  const isDisabled = range(0, step.value).some(idx => !data[fields[idx].key]);

  const onChangeInput = (key: string, text: string) => {
    setData({...data, [key]: text});
  };

  const handleCTAPress = () => {
    if (isDisabled) {
      return;
    }
    if (step.value < fields.length) {
      step.next();
      return;
    }
    onSubmit(data);
  };

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'💼\n어떤 일을 해?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <ScrollView>
            <FormGroup>
              {reverse([...fields]).map((field, idx) => {
                return fields.length - idx <= step.value ? (
                  <TextField
                    label={field.label}
                    placeholder={field.placeholder}
                    returnKeyType={field.returnKeyType}
                    onSubmitEditing={e => {
                      e.preventDefault();
                      sleep(10).then(step.next);
                    }}
                    selectionColor={colors.orange}
                    value={data[field.key]}
                    onChangeText={text => {
                      onChangeInput(field.key, text.replace(/\n/g, ''));
                    }}
                    ref={el => {
                      if (el && fields.length - idx === step.value) {
                        el.focus();
                      }
                    }}
                  />
                ) : undefined;
              })}
            </FormGroup>
          </ScrollView>
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          {step.value < fields.length ? '다음' : '완료'}
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
