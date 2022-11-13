import {Button} from '@components/button';
import {Spacing} from '@components/common';
import {SimpleWheelPicker, SimpleWheelPickerItemType} from '@components/form';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import {useBottomSheet} from '@contexts/PopupProvider';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

export function useWheelPickerSheet<T extends string | number>(
  title: string,
  items: SimpleWheelPickerItemType<T>[],
  value?: T,
) {
  const {open, close} = useBottomSheet();
  return useCallback(() => {
    return new Promise<T>(resolve =>
      open(
        <PickerSheet
          title={title}
          items={items}
          onConfirm={value => resolve(value)}
          defaultValue={value}
        />,
      ),
    ).finally(close);
  }, [open, close, title, items, value]);
}

function PickerSheet<T extends string | number>({
  title,
  items,
  onConfirm,
  defaultValue,
}: {
  title?: string;
  items: SimpleWheelPickerItemType<T>[];
  defaultValue?: T;
  onConfirm: (value: T) => void;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <View>
      <Spacing height={32} />
      {Boolean(title) && (
        <View style={{paddingLeft: 24}}>
          <Text typography={Typography.Headline_1_B}>{title}</Text>
        </View>
      )}
      <Flex.Center>
        <SimpleWheelPicker items={items} value={value} onChange={setValue} />
      </Flex.Center>
      <View style={{paddingHorizontal: 24, paddingVertical: 12}}>
        <Button rounded onPress={() => value && onConfirm(value)}>
          확인
        </Button>
      </View>
    </View>
  );
}
