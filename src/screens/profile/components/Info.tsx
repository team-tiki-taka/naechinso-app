import {Spacing} from '@components/common/Spacing';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {UserInfoType} from '@screens/profile/OtherProfileScreen';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {VerifyText} from './VerifyText';

export function BaseInfo({userInfo}: {userInfo: UserInfoType}) {
  return (
    <>
      <Flex.CenterVertical direction="row">
        <Text typography={Typography.Headline_1_B}>{userInfo.name}</Text>
        <Spacing width={12} />
        <Text typography={Typography.Body_1_M} color={colors.black40}>
          {userInfo.age}, {userInfo.address}
        </Text>
      </Flex.CenterVertical>
      <Spacing height={18} />
      <Flex>
        <VerifyText>
          {userInfo.company} / {userInfo.jobName}
        </VerifyText>
        <VerifyText>
          {userInfo.school} / {userInfo.major}
        </VerifyText>
      </Flex>
    </>
  );
}

export function InfoList({userInfo}: {userInfo: UserInfoType}) {
  return (
    <>
      <Spacing height={36} />
      <ShortInfo
        title="성격"
        spacing={27}
        content={userInfo.personality.map((value, idx) => (
          <React.Fragment key={idx}>
            <PersonalityWrapper>
              <Text typography={Typography.Body_2_M}>{value}</Text>
            </PersonalityWrapper>
            <Spacing width={10} />
          </React.Fragment>
        ))}
      />
      <ShortInfo title="종교" spacing={36} content={userInfo.religion} />
      <ShortInfo title="키(cm)" spacing={19} content={userInfo.height} />
      <ShortInfo title="흡연여부" spacing={12} content={userInfo.smoking} />
      <ShortInfo title="음주여부" spacing={12} content={userInfo.alcohol} />
      <Spacing height={42} />
      <LongInfo title="취미/관심사" spacing={4} content={userInfo.hobby} />
      <Spacing height={32} />
      <LongInfo
        title="남들보다 이건 내가 좀 낫지"
        spacing={4}
        content={userInfo.personalityMore}
      />
      <Spacing height={32} />
      <LongInfo
        title="어떤 연애를 하고 싶어?"
        spacing={4}
        content={userInfo.romanticStyle}
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
