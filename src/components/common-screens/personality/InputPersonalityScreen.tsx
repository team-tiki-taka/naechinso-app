import {BottomCTAContainer, Button, ToggleButton} from '@components/button';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen} from '@components/layout';
import {PageHeader} from '@components/PageHeader';
import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  title: string;
  right?: string;
  personalities: string[];
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  onConfirm: () => void;
}

export const CommonInputPersonalityScreen = ({
  title,
  right,
  personalities,
  value: selectedList = [],
  onChange: setSelectedList,
  onConfirm,
}: Props) => {
  return (
    <Screen>
      <AppBar />
      <PageHeader title={title} right={right} />
      <Spacing height={24} />
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
          <>
            {item.index % 2 === 0 && <Spacing width={20} />}
            <ToggleButton
              style={{width: '42%', justifyContent: 'center'}}
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
            {item.index % 2 !== 0 && <Spacing width={20} />}
          </>
        )}
      />
      <View style={{paddingHorizontal: 24, backgroundColor: colors.white}}>
        <BottomCTAContainer backgrounded floating>
          <Button
            rounded
            disabled={selectedList.length < 3}
            onPress={onConfirm}>
            다음
          </Button>
        </BottomCTAContainer>
      </View>
    </Screen>
  );
};
