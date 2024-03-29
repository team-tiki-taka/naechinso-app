import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import {useBooleanState} from '@hooks/common';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from './common';
import {Flex} from './layout';
import {Text, Typography} from './text';

import ic_chevron_down_black from '@assets/icons/ic_chevron_down_black.png';

interface Props {
  isCollapsibleBoxOpened?: boolean;
  title: string | ReactNode;
  children: ReactNode;
}

export function CollapsibleBox({
  isCollapsibleBoxOpened = false,
  title,
  children,
}: Props) {
  const [isOpened, , , toggle] = useBooleanState(isCollapsibleBoxOpened);

  const Wrapper = isOpened
    ? React.Fragment
    : withProps(TouchableOpacity, {activeOpacity: 0.8, onPress: toggle});

  return (
    <Wrapper>
      <Container>
        <TouchableOpacity activeOpacity={0.8} onPress={toggle}>
          <TitleContainer direction="row">
            {typeof title === 'string' ? (
              <Text typography={Typography.Body_2_B}>{title}</Text>
            ) : (
              title
            )}
            <Spacing flex={1} />
            <Icon
              style={isOpened ? {} : {transform: [{rotate: '180deg'}]}}
              source={ic_chevron_down_black}
            />
          </TitleContainer>
        </TouchableOpacity>
        {isOpened && <ContentContainer>{children}</ContentContainer>}
      </Container>
    </Wrapper>
  );
}

const Container = styled.View`
  background: ${colors.neural};
  border-radius: 16px;
  padding-top: 20px;
`;

const TitleContainer = styled(Flex.CenterVertical)`
  padding-horizontal: 16px;
  padding-bottom: 18px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const ContentContainer = styled.View`
  padding-bottom: 16px;
  padding-top: 12px;
  padding-horizontal: 8px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
`;
