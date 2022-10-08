import React, {useRef, useState} from 'react';
import {AppBar} from '@components/common';
import {Flex, InnerContainer, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {FormGroup, TextField} from '@components/form';
import {Spacing} from '@components/common/Spacing';
import styled from 'styled-components/native';
import colors from '@constants/color';
import {Typography, useTextStyle} from '@components/text';
import {ScrollView, TextInput} from 'react-native';
import {useBooleanState} from '@hooks/common';
import {BottomCTAButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';

export const InputRecommenderCompanyScreen = () => {
  const navigation = useOnboardingNavigation();
  const companyRef = useRef<TextInput>(null);
  const jobRef = useRef<TextInput>(null);
  const locationRef = useRef<TextInput>(null);

  const inputTextStyle = useTextStyle({typography: Typography.Subtitle_1_B});

  type CompanyInputInfoType = {
    label: string;
    valueText: string;
    isVisible: boolean;
    placeholder: string;
    ref: React.RefObject<TextInput>;
    nextRef?: React.RefObject<TextInput>;
    isActive: boolean;
    returnKeyType: string;
  };

  const [companyInputInfoList, setCompanyInputInfoList] = useState<
    CompanyInputInfoType[]
  >([
    {
      label: '직장위치',
      valueText: '',
      isVisible: false,
      placeholder: '시/구 까지만 적어줘',
      ref: locationRef,
      nextRef: undefined,
      isActive: false,
      returnKeyType: 'next',
    },
    {
      label: '직무',
      valueText: '',
      isVisible: false,
      placeholder: '무슨 일을 하고 있어?',
      ref: jobRef,
      nextRef: locationRef,
      isActive: false,
      returnKeyType: 'next',
    },
    {
      label: '직장',
      valueText: '',
      isVisible: true,
      placeholder: '현재 재직중인 회사명을 적어줘',
      ref: companyRef,
      nextRef: jobRef,
      isActive: false,
      returnKeyType: 'next',
    },
  ]);

  const [isButtonActive, setIsButtonActiveTrue, setIsButtonActiveFalse] =
    useBooleanState();

  function setInputIsActive(label: string, isActive: boolean) {
    setCompanyInputInfoList(
      companyInputInfoList.map(companyInputInfo =>
        companyInputInfo.label === label
          ? {...companyInputInfo, isActive: isActive}
          : companyInputInfo,
      ),
    );
  }

  function setInputIsVisible(label: string) {
    setCompanyInputInfoList(
      companyInputInfoList.map(companyInputInfo =>
        companyInputInfo.label === label
          ? {...companyInputInfo, isVisible: true}
          : companyInputInfo,
      ),
    );
  }

  function onNextFocus(nextFocus: React.RefObject<TextInput>) {
    nextFocus.current?.focus();
  }

  function setText(label: string, text: string) {
    setCompanyInputInfoList(
      companyInputInfoList.map(companyInputInfo =>
        companyInputInfo.label === label
          ? {...companyInputInfo, valueText: text}
          : companyInputInfo,
      ),
    );
  }

  return (
    <Screen>
      <AppBar />
      <PageHeader title={'💼\n어떤 일을 해?'} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <InnerContainer>
          <ScrollView>
            <FormGroup>
              {companyInputInfoList.map((value, index) => {
                return value.isVisible ? (
                  <StyledContainer key={index}>
                    <TextField.Label active={value.isActive}>
                      {value.label}
                    </TextField.Label>
                    <StyledTextField
                      placeholder={value.placeholder}
                      ref={value.ref}
                      style={inputTextStyle}
                      returnKeyType={value.returnKeyType}
                      autoFocus={true}
                      onFocus={() => setInputIsActive(value.label, true)}
                      onBlur={() => setInputIsActive(value.label, false)}
                      onSubmitEditing={() => {
                        if (value.nextRef) {
                          setInputIsVisible(
                            companyInputInfoList[index - 1].label,
                          );
                          onNextFocus(value.nextRef);
                        }
                      }}
                      selectionColor={colors.orange}
                      value={value.valueText}
                      onChange={e => {
                        console.log(e.nativeEvent.text);
                        if (!value.nextRef) {
                          setIsButtonActiveTrue();
                        }
                        setText(value.label, e.nativeEvent.text);
                      }}
                    />
                  </StyledContainer>
                ) : undefined;
              })}
            </FormGroup>
          </ScrollView>
        </InnerContainer>
        <BottomCTAButton
          disabled={!isButtonActive}
          onPress={() => {
            navigation.navigate('VerifyCompany');
          }}>
          완료
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};

const StyledContainer = styled.View`
  display: flex;
  height: 80px;
  background-color: ${colors.neural};
  border-radius: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  border-width: 1px;
  border-color: ${colors.neural};
`;

const StyledTextField = styled.TextInput`
  padding-top: 0px;
  padding-bottom: 8px;
`;
