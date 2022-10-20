import {Button, ToggleButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, StyledInnerContainer} from '@components/layout';
import {List} from '@components/layout/List';
import {Text, Typography} from '@components/text';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export function useBottomSelectList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const {open, close} = useBottomSheet();

  return useCallback(() => {
    return new Promise(resolve =>
      open(
        <BottomSelectList
          title={title}
          items={items}
          onConfirm={value => resolve(value)}
        />,
      ),
    ).finally(close);
  }, []);
}

export function BottomSelectList({
  title,
  items,
  onConfirm,
}: {
  title: string;
  items: string[];
  onConfirm: (value: string | string[]) => void;
}) {
  const [value, setValue] = useState<string>();
  const [selectedList, setSelectedList] = useState<string[]>([]);
  if (title === '성격') {
    return (
      <Container>
        <Flex.CenterVertical>
          <Text typography={Typography.Headline_1_B}>{title}</Text>
          <Text typography={Typography.Body_1_M}>3개를 골라줘</Text>
        </Flex.CenterVertical>
        <Spacing height={16} />
        <StyledScrollView>
          <FlatList
            data={items}
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
        </StyledScrollView>
        <Spacing height={34} />
        <InnerContainer>
          <Button
            rounded
            onPress={() => selectedList && onConfirm(selectedList)}>
            완료
          </Button>
        </InnerContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <InnerContainer>
          <Flex.CenterVertical>
            <Text typography={Typography.Headline_1_B}>{title}</Text>
          </Flex.CenterVertical>
          <Spacing height={16} />
          <List divider={<Spacing height={16} />}>
            {items.map((item, idx) => (
              <ToggleButton
                key={idx}
                type="brownMain"
                active={value === item}
                onPress={() => {
                  setValue(item);
                }}>
                {item}
              </ToggleButton>
            ))}
          </List>
          <Spacing height={34} />
          <Button rounded onPress={() => value && onConfirm(value)}>
            완료
          </Button>
        </InnerContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  padding-top: 32px;
  padding-bottom: 35px;
  max-height: 612px;
`;

const StyledScrollView = styled.ScrollView`
  padding-horizontal: 20px;
`;

const InnerContainer = styled.View`
  padding-horizontal: 20px;
`;
