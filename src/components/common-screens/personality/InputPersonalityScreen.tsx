import {BottomCTAButton, ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import {withProps} from '@hocs/withProps';
import React, {Dispatch, SetStateAction} from 'react';
import {FlatList} from 'react-native';

interface Props {
  title: string;
  personalities: string[];
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  onConfirm: () => void;
}

export const CommonInputPersonalityScreen = ({
  title,
  personalities,
  value: selectedList = [],
  onChange: setSelectedList,
  onConfirm,
}: Props) => {
  return (
    <Screen>
      <AppBar />
      <PageHeader title={title} />
      <Spacing height={24} />
      <Flex justify="space-between" style={{flex: 1}}>
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
            ListFooterComponent={<Spacing height={100} />}
            renderItem={item => (
              <ToggleButton
                style={{width: '47%', justifyContent: 'center'}}
                type="brownMain"
                size="big"
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
        <BottomCTAButton
          backgrounded
          disabled={selectedList.length < 3}
          onPress={onConfirm}>
          다음
        </BottomCTAButton>
      </Flex>
    </Screen>
  );
};
