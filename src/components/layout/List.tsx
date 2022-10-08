import {Divider} from '@components/common/Divider';
import {flattenDeep} from 'lodash';
import React, {ComponentProps, ReactNode} from 'react';
import {View} from 'react-native';

interface Props extends ComponentProps<typeof View> {
  children: ReactNode;
  divider?: boolean | ReactNode;
}

export function List({divider, children, ...props}: Props) {
  const getDivider = () => {
    if (typeof divider === 'boolean') {
      return <Divider marginHorizontal={28} />;
    }
    return divider;
  };
  return (
    <View {...props}>
      {Array.isArray(children)
        ? flattenDeep(children)
            .filter(item => !!item)
            .map((item, idx) => (
              <React.Fragment key={getKey(item) ?? idx}>
                {item}
                {Boolean(idx < children.length) && getDivider()}
              </React.Fragment>
            ))
        : children}
    </View>
  );
}

List.Horizontal = function (props: Props) {
  return (
    <List
      divider={<Divider width={1} style={{height: '100%'}} />}
      {...props}
      style={[{flexDirection: 'row'}, props.style]}
    />
  );
};

function getKey(item: ReactNode) {
  if (item != null && typeof item === 'object' && 'key' in item) {
    return item.key;
  }
}
