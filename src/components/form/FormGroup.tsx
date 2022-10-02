import {Divider} from '@components/common';
import {List} from '@components/layout/List';
import colors from '@constants/color';
import React, {ComponentProps} from 'react';
import styled from 'styled-components/native';

export function FormGroup(props: Omit<ComponentProps<typeof List>, 'divider'>) {
  return (
    <Container
      {...props}
      divider={<Divider color={'#D9D9D9'} marginHorizontal={20} />}
    />
  );
}

const Container = styled(List)`
  background: ${colors.neural};
  border-radius: 16px;
`;
