import React, {useState} from 'react';
import {AppBar, Spacing} from '@components/common';
import {AutoScrollView, Flex, InnerContainer, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {BottomCTAButton, ToggleButton} from '@components/button';
import {useOnboardingNavigation} from '@hooks/navigation';
import {Controller, useForm} from 'react-hook-form';
import {FlatList, View} from 'react-native';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';

export const InputFriendPersonalityScreen = () => {
  const navigation = useOnboardingNavigation();

  const [personalities, setPersonalities] = useState<string[]>([
    '패션센스 🧥',
    '자기관리 🏊🏻‍♀️',
    '사랑꾼 💗',
    '일잘러 🤓',
    '애교쟁이 😘',
    '실물파 👀',
    '귀여워 🐹',
    '다정다감 💪🏻',
    '섬세해 🪡',
    '유머러스 😜',
    '뇌섹 🧠',
    '인성갑 😇',
    '차분해 🍵 ',
    '화목한 가정 👨‍👩‍👦',
    '🚗가 있어 ',
    '핫바디 💪🏻',
    '🍯성대',
    '여유있지 💰',
  ]);

  const [selectedList, setSelectedList] = useState<string[]>([]);

  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'네가 생각하는\n친구의 매력을 골라줘! '}
        subtitle={'(최대 3개)'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <AutoScrollView>
          <InnerContainer>
            <FlatList
              data={personalities}
              numColumns={2}
              columnWrapperStyle={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={<Spacing height={16} />}
              renderItem={item => (
                <ToggleButton
                  style={{width: '47%'}}
                  type="brownMain"
                  active={selectedList.includes(item.item)}
                  onPress={() => {
                    selectedList.includes(item.item)
                      ? setSelectedList(prev =>
                          prev.filter(value => value !== item.item),
                        )
                      : selectedList.length < 3 &&
                        setSelectedList([...selectedList, item.item]);
                  }}>
                  {item.item}
                </ToggleButton>
              )}
            />
          </InnerContainer>
        </AutoScrollView>
        <Spacing height={41} />
        <BottomCTAButton
          onPress={() => {
            navigation.navigate('InputFriendPersonality');
          }}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
