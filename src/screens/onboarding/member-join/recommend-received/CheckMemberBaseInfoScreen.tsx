import React, {useState} from 'react';
import {useOnboardingNavigation} from '@hooks/navigation';
import {PageHeader} from '@components/PageHeader';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {UserBaseInfoForm} from '@components/form/UserBaseInfoForm';
import {useForm} from 'react-hook-form';
import {UserBaseInfo} from '@models/UserBaseInfo';
import {ToggleButton} from '@components/button';
import {Spacing} from '@components/common';

export const CheckMemberBaseInfoScreen = () => {
  const navigation = useOnboardingNavigation();

  const controls = useForm<UserBaseInfo>({
    mode: 'all',
  });

  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <Screen>
      <Spacing height={56} />
      <PageHeader
        title={'자기소개 전에\n친구가 네 정보를\n살짝 알려줬는데 맞아?'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <UserBaseInfoForm controls={controls} />
        </StyledInnerContainer>
        <Flex direction="row" justify="space-evenly">
          <ToggleButton
            style={{width: '40%'}}
            center
            onPress={() => {
              setIsCorrect(false);
              navigation.navigate('MemberBaseInfoIncorrect');
            }}>
            아니야
          </ToggleButton>
          <ToggleButton
            active
            style={{width: '40%'}}
            center
            onPress={() => {
              setIsCorrect(true);
              navigation.navigate('InputMemberHeight');
            }}>
            맞아
          </ToggleButton>
        </Flex>
      </Flex>
    </Screen>
  );
};
