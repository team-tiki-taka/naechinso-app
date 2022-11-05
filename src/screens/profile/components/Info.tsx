import {Spacing} from '@components/common/Spacing';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {User} from '@models/User';
import React, {isValidElement, ReactNode} from 'react';
import styled from 'styled-components/native';
import {VerifyText} from './VerifyText';

export const BaseInfo = function BaseInfo({user}: {user: User}) {
  return (
    <>
      <Flex.CenterVertical direction="row">
        <Text typography={Typography.Headline_1_B}>{user.name}</Text>
        <Spacing width={12} />
        <Text typography={Typography.Body_1_M} color={colors.black40}>
          {user.age}, {user.address}
        </Text>
      </Flex.CenterVertical>
      <Spacing height={18} />
      <Flex>
        <VerifyText>{`${user.job} / ${user.role}`}</VerifyText>
        <VerifyText>{`${user.school} / ${user.major}`}</VerifyText>
      </Flex>
    </>
  );
};

export function InfoList({user}: {user: User}) {
  return (
    <>
      <Spacing height={36} />
      <ShortInfo
        title="성격"
        spacing={27}
        content={user.personalities.map((value, idx) => (
          <React.Fragment key={idx}>
            <PersonalityWrapper>
              <Text typography={Typography.Body_2_M}>{value}</Text>
            </PersonalityWrapper>
            <Spacing width={10} />
          </React.Fragment>
        ))}
      />
      <ShortInfo title="종교" spacing={36} content={user.religion} />
      <ShortInfo title="키(cm)" spacing={19} content={user.height} />
      <ShortInfo title="흡연여부" spacing={12} content={user.smoke} />
      <ShortInfo title="음주여부" spacing={12} content={user.drink} />
      <Spacing height={42} />
      <LongInfo title="취미/관심사" spacing={4} content={user.hobby} />
      <Spacing height={32} />
      <LongInfo
        title="남들보다 이건 내가 좀 낫지"
        spacing={4}
        content={user.point}
      />
      <Spacing height={32} />
      <LongInfo
        title="어떤 연애를 하고 싶어?"
        spacing={4}
        content={user.style}
      />
      <Spacing height={54} />
    </>
  );
}

const PersonalityWrapper = styled(Flex.Center)`
  width: 78px;
  height: 28px;
  background-color: ${colors.neural};
  border-radius: 6px;
`;

export function ShortInfo({
  title,
  spacing,
  content,
}: {
  title: string;
  spacing: number;
  content: ReactNode | string;
}) {
  return (
    <>
      <Flex direction="row" align="center">
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {title}
        </Text>
        <Spacing width={spacing} />
        {isValidElement(content) ? (
          content
        ) : (
          <Text typography={Typography.Body_1_M}>{content}</Text>
        )}
      </Flex>
      <Spacing height={10} />
    </>
  );
}

export function LongInfo({
  title,
  spacing,
  content,
}: {
  title: string;
  spacing: number;
  content: ReactNode | string;
}) {
  return (
    <>
      <Flex direction="column" justify="center">
        <Text typography={Typography.Body_2_M} color={colors.black40}>
          {title}
        </Text>
        <Spacing height={spacing} />
        {typeof content === 'string' ? (
          <Text typography={Typography.Body_1_M}>{content}</Text>
        ) : (
          content
        )}
      </Flex>
      <Spacing height={10} />
    </>
  );
}
