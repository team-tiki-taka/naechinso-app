import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import {useBooleanState} from '@hooks/common';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from './common';
import {Flex} from './layout';
import {Text, Typography} from './text';

interface Props {
  title: string;
  children: ReactNode;
}

export function CollapsibleBox({title, children}: Props) {
  const [isOpened, , , toggle] = useBooleanState();

  const Wrapper = isOpened
    ? React.Fragment
    : withProps(TouchableOpacity, {activeOpacity: 0.8, onPress: toggle});

  return (
    <Wrapper>
      <Container>
        <TouchableOpacity activeOpacity={0.8} onPress={toggle}>
          <Flex.CenterVertical direction="row" style={{padding: 16}}>
            <Text typography={Typography.Body_1_B}>{title}</Text>
            <Spacing flex={1} />
            <Icon
              style={isOpened ? {} : {transform: [{rotate: '180deg'}]}}
              source={require('@assets/icons/ic_chevron_down_black.png')}
            />
          </Flex.CenterVertical>
        </TouchableOpacity>
        {isOpened && <ContentContainer>{children}</ContentContainer>}
      </Container>
    </Wrapper>
  );
}

const Container = styled.View`
  background: ${colors.neural};
  border-radius: 16px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const ContentContainer = styled.View`
  padding: 0 16px 16px;
`;
