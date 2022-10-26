import React, {useState} from 'react';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {AppBar, Spacing} from '@components/common';
import {PageHeader} from '@components/PageHeader';
import {TextArea} from '@components/form';
import {BottomCTAButton} from '@components/button';
import {useNavigation} from '@hooks/navigation';
import {ParamList} from '../routes-types';

export function SelfIntroScreen() {
  const navigation = useNavigation<ParamList>();
  const [personalityMore, setPersonalityMore] = useState<string>();
  const handleCTAPress = () => {
    navigation.navigate('InputMemberHobby');
  };
  const isDisabled = Boolean(!personalityMore);
  return (
    <Screen>
      <AppBar />
      <PageHeader title={'남들보다 내가 이건 좀 낫지!\n하는 게 있을까?😎 '} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <StyledInnerContainer>
          <TextArea
            value={personalityMore}
            onChangeText={setPersonalityMore}
            placeholder={
              '- 난 고민을 잘 들어줘\n- 옷을 잘 입는 편이야\n- 맛집을 잘 알아'
            }
            maxLength={300}
          />
        </StyledInnerContainer>
        <BottomCTAButton disabled={isDisabled} onPress={handleCTAPress}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
}
