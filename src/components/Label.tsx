import React from 'react';
import colors from '../constants/color';
import useTimeLimit from '../hooks/useTimeLimit';
import {Flex} from './Flex';
import {Text} from './text';
import {Typography} from './text/useTextStyle';

type Props = {
  title: string;
  isTimeLimit?: boolean;
};

export const Label: React.FC<Props> = ({title, isTimeLimit = false}) => {
  const {timeLimit} = useTimeLimit();
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
      {timeLimit.minute < 10 ? (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {timeLimit.minute.toString().padStart(2, '0')}
        </Text>
      ) : (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {timeLimit.minute}
        </Text>
      )}
      <Text typography={Typography.Caption_1_M} color={colors.orange}>
        :
      </Text>
      {timeLimit.second < 10 ? (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {timeLimit.second.toString().padStart(2, '0')}
        </Text>
      ) : (
        <Text typography={Typography.Caption_1_M} color={colors.orange}>
          {timeLimit.second}
        </Text>
      )}
    </Flex>
  );
};
