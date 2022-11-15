import {Button, ToggleButton} from '@components/button';
import {Spacing} from '@components/common';
import {Flex, StyledInnerContainer} from '@components/layout';
import {List} from '@components/layout/List';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useBottomSheet} from '@contexts/PopupProvider';
import {withProps} from '@hocs/withProps';
import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
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
          <Text typography={Typography.Body_1_M} color={colors.black40}>
            3개를 골라줘
          </Text>
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
            ItemSeparatorComponent={withProps(Spacing, {height: 16})}
            renderItem={item => (
              <ToggleButton
                style={{
                  width: '45%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                type="brownMain"
                typography={Typography.Subtitle_2_M}
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
        <StyledInnerContainer paddingHorizontal={20}>
          <Button
            rounded
            onPress={() => selectedList && onConfirm(selectedList)}>
            완료
          </Button>
        </StyledInnerContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <StyledInnerContainer paddingHorizontal={20}>
          <Flex.CenterVertical>
            <Text typography={Typography.Headline_1_B}>{title}</Text>
          </Flex.CenterVertical>
          <Spacing height={16} />
          <List divider={<Spacing height={16} />}>
            {items.map((item, idx) => (
              <ToggleButton
                style={{display: 'flex', justifyContent: 'center'}}
                key={idx}
                type="brownMain"
                typography={Typography.Subtitle_2_M}
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
        </StyledInnerContainer>
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
