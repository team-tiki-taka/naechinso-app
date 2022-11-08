import {BottomCTAButton, ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {withProps} from '@hocs/withProps';
import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, ScrollView} from 'react-native';

const personalities = [
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
];

interface Props {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  onConfirm: () => void;
}

export const CommonInputPersonalityScreen = ({
  value: selectedList = [],
  onChange: setSelectedList,
  onConfirm,
}: Props) => {
  return (
    <Screen>
      <AppBar />
      <PageHeader
        title={'네가 생각하는\n친구의 매력을 골라줘! '}
        subtitle={'(최대 3개)'}
      />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
        <ScrollView>
          <StyledInnerContainer>
            <FlatList
              data={personalities}
              numColumns={2}
              columnWrapperStyle={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={withProps(Spacing, {height: 16})}
              renderItem={item => (
                <ToggleButton
                  style={{width: '47%'}}
                  type="brownMain"
                  size="big"
                  padding
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
          </StyledInnerContainer>
        </ScrollView>
        <Spacing height={41} />
        <BottomCTAButton disabled={selectedList.length < 3} onPress={onConfirm}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
