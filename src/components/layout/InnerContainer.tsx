import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface Props extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
}

export function InnerContainer({children, ...props}: Props) {
  return <StyledInnerContainer>{children}</StyledInnerContainer>;
}

const StyledInnerContainer = styled.View`
  padding-horizontal: 24px;
`;
