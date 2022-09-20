import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import color from '../constants/color';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: () => void;
  style?: any;
  children: string;
};

const TextButton: React.FC<Props> = ({
  width = 335,
  height = 56,
  borderRadius = 16,
  backgroundColor = color.orange,
  textColor = color.white,
  borderColor = color.orange,
  onClick,
  style,

  children,
}) => {
  return (
    <View>
      <Root
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={onClick}
        style={style}>
        <InnerText textColor={textColor}>{children}</InnerText>
      </Root>
    </View>
  );
};

type RootProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  borderColor?: string;
};

const Root = styled.TouchableOpacity<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${props => `width: ${props.width}px;`}
  ${props => `height: ${props.height}px;`}
  ${props => `border-radius: ${props.borderRadius}px;`}
  ${props => `background-color: ${props.backgroundColor};`}
  ${props => `border: ${props.borderColor};`}
`;

type InnerTextProps = {
  textColor: string;
};

const InnerText = styled.Text<InnerTextProps>`
  ${props => `color: ${props.textColor};`}
`;

export default TextButton;
