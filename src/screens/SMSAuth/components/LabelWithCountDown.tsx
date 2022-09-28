import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import useTimeLimit from '@hooks/useTimeLimit';
import React from 'react';

type Props = {
  title: string;
  isTimeLimit?: boolean;
};

export const Label: React.FC<Props> = ({title, isTimeLimit = false}) => {
  const {timeLimit} = useTimeLimit();

  const minute = parseInt(timeLimit / 60);
  const second = timeLimit % 60;
  if (isTimeLimit === false) {
    return (
      <Text typography={Typography.Caption_1_M} color={colors.orange}>
        {title}{' '}
      </Text>
    );
  }

  return (
    <Flex direction="row">
      <Text typography={Typography.Caption_1_M} color={colors.orange}>
        {title}{' '}
      </Text>
      {minute < 10 ? (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {minute.toString().padStart(2, '0')}
        </Text>
      ) : (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {minute}
        </Text>
      )}
      <Text typography={Typography.Caption_1_M} color={colors.orange}>
        :
      </Text>
      {second < 10 ? (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {second.toString().padStart(2, '0')}
        </Text>
      ) : (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {second}
        </Text>
      )}
    </Flex>
  );
};
