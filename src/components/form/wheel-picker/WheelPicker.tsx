import LinearGradient from 'react-native-linear-gradient';
import React, {PureComponent} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {
  ItemType,
  IViuPickerProps,
  IViuPickerState,
  RenderItemProps,
} from './types';
import {setAlphaColor} from './util';
import colors from '@constants/color';

export function WheelPicker(props: IViuPickerProps) {
  return <InternalWheelPicker {...props} backgroundColor={colors.white} />;
}

export class InternalWheelPicker extends PureComponent<
  IViuPickerProps,
  IViuPickerState
> {
  static defaultProps = {
    items: [],
    backgroundColor: '#FFFFFF',
    width: 150,
  };

  flatListRef = React.createRef<FlatList>();
  backgroundColor = setAlphaColor(this.props.backgroundColor as any, 1);

  state = {
    selectedIndex: 0,
    itemHeight: 40,
    listHeight: 200,
    data: [],
  };

  componentDidUpdate(prevProps: IViuPickerProps) {
    if (this.props.items?.length !== prevProps.items?.length) {
      this.setData();
    }
  }

  componentDidMount() {
    this.setData();
  }

  get gradientColor(): string {
    return Platform.select({
      ios: setAlphaColor(this.backgroundColor, 0.2),
      android: setAlphaColor(this.backgroundColor, 0.4),
    }) as string;
  }

  handleOnSelect(index: number) {
    const {items, onChange} = this.props;
    const selectedIndex = Math.abs(index);

    if (selectedIndex >= 0 && selectedIndex <= items.length - 1) {
      this.setState({selectedIndex});
      onChange && onChange({index: selectedIndex, item: items[selectedIndex]});
    }
  }

  handleOnPressItem = (index: number) => {
    if (index >= 0 && index <= this.props.items.length - 1) {
      this.flatListRef.current?.scrollToIndex({
        animated: true,
        index: index,
      });
    }
  };

  setData() {
    let {itemHeight, listHeight} = this.state;
    const {items, height} = this.props;

    if (items?.length) {
      const additionalItem = {label: '', value: null};
      const data = [
        additionalItem,
        additionalItem,
        ...items,
        additionalItem,
        additionalItem,
      ] as ItemType[];

      if (height) {
        listHeight = height;
        itemHeight = listHeight / 5;
      }

      this.setState({data, itemHeight, listHeight});
    }
  }

  onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {itemHeight} = this.state;
    let index = Math.round(event.nativeEvent.contentOffset.y / itemHeight);
    this.handleOnSelect(index);
  };

  renderItem = (options: ListRenderItemInfo<any>) => {
    const {itemHeight, selectedIndex} = this.state;
    const gap = Math.abs(options.index - (selectedIndex + 2));

    return (
      <PickerItem
        {...options}
        selected={gap === 0}
        itemHeight={itemHeight}
        onPress={this.handleOnPressItem}
        renderItem={this.props.renderItem as any}
      />
    );
  };
  getItemLayout = (_: any, index: number) => {
    const {itemHeight} = this.state;
    return {
      length: itemHeight,
      offset: index * itemHeight,
      index,
    };
  };

  keyExtractor = (_: any, index: number) => index.toString();

  render() {
    const {data, itemHeight, listHeight} = this.state;
    const {width, initialSelectedIndex, flatListProps, selectedStyle} =
      this.props;
    const gradientContainerStyle = [
      {height: 2 * itemHeight, borderColor: selectedStyle?.borderColor},
      styles.gradientContainer,
    ];

    return (
      <View
        style={{
          height: listHeight,
          width,
          backgroundColor: this.backgroundColor,
        }}>
        <FlatList
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          scrollEventThrottle={0}
          {...flatListProps}
          ref={this.flatListRef}
          initialScrollIndex={initialSelectedIndex}
          data={data}
          onScroll={this.onScroll}
          getItemLayout={this.getItemLayout}
          snapToInterval={itemHeight}
        />
        <View
          style={[
            gradientContainerStyle,
            styles.topGradient,
            {borderBottomWidth: selectedStyle?.borderWidth},
          ]}
          pointerEvents="none">
          <LinearGradient
            style={styles.linearGradient}
            colors={[this.backgroundColor, this.gradientColor]}
          />
        </View>
        <View
          style={[
            gradientContainerStyle,
            styles.bottomGradient,
            {borderTopWidth: selectedStyle?.borderWidth},
          ]}
          pointerEvents="none">
          <LinearGradient
            style={styles.linearGradient}
            colors={[this.gradientColor, this.backgroundColor]}
          />
        </View>
      </View>
    );
  }
}

function Item({fontSize, label}: RenderItemProps) {
  return <Text style={{fontSize}}>{label}</Text>;
}

const PickerItem = React.memo(
  function PickerItem({
    item,
    index,
    selected,
    itemHeight,
    onPress,
    renderItem,
  }: {
    item: any;
    index: number;
    selected: boolean;
    itemHeight: number;
    onPress: (index: number) => void;
    renderItem: (props: RenderItemProps) => JSX.Element;
  }) {
    const style = {
      fontSize: itemHeight / 2,
      height: itemHeight,
    };
    const sizeText = [style.fontSize, style.fontSize / 1.5, style.fontSize / 2];
    const fontSize = selected ? sizeText[0] : sizeText[1];

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => onPress(index - 2)}>
        <View style={[styles.listItem, style]}>
          {typeof renderItem === 'function' &&
            renderItem({fontSize, label: item.label})}
          {!renderItem && <Item fontSize={fontSize} label={item.label} />}
        </View>
      </TouchableOpacity>
    );
  },
  (prev, cur) => prev.selected === cur.selected,
);

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    position: 'absolute',
    width: '100%',
  },
  linearGradient: {flex: 1},
  topGradient: {top: 0},
  bottomGradient: {bottom: 0},
});
