import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import Toast from './Toast';

export namespace SimpleToast {
  export function show(
    message: string,
    options?: Parameters<typeof Toast.show>[1] & {
      icon?: ReactNode;
      backgroundColor?: string;
    },
  ) {
    Toast.show(
      <Flex.CenterVertical direction="row">
        {options?.icon && (
          <>
            {options.icon}
            <Spacing width={10} />
          </>
        )}
        <Text typography={Typography.Body_1_M} color={colors.white}>
          {message}
        </Text>
      </Flex.CenterVertical>,
      {
        backgroundColor: options?.backgroundColor ?? colors.black64,
        opacity: 1,
        shadow: false,
        position: -50,
        containerStyle: {paddingHorizontal: 16},
        ...options,
      },
    );
  }
  export function error(
    message: string,
    options?: Parameters<typeof Toast.show>[1],
  ) {
    show(message, {
      icon: (
        <IconImage
          source={require('@assets/icons/ic_exclaimation_circle_white.png')}
        />
      ),
      ...options,
      backgroundColor: colors.error,
    });
  }
}

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;
