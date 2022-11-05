import {BottomCTAButton} from '@components/button';
import {BottomCTAContainer} from '@components/button/BottomCTAContainer';
import {AppBar, Spacing} from '@components/common';
import {Flex, Screen, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {S3_URL} from '@constants/url';
import {withSuspense} from '@hocs/withSuspense';
import {useMainNavigation} from '@hooks/navigation';
import {useUser} from '@hooks/useUser';
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {BaseInfo, PersonalityBadge} from './components';

export const MyProfileScreen = withSuspense(function MyProfileScreen() {
  const navigation = useMainNavigation();
  const [user] = useUser(true);

  console.log(user);

  const handleCTAPress = () => {
    navigation.navigate('ModifyMyProfile');
  };

  return (
    <Screen>
      <AppBar
        title={
          <Flex.CenterHorizontal direction="row">
            <Text typography={Typography.Body_1_B}>내 프로필</Text>
            <Spacing width={40} />
          </Flex.CenterHorizontal>
        }
      />
      <ScrollView>
        <StyledImage
          source={{
            uri: `${S3_URL}${user.images[0]}`,
          }}
        />
        <Spacing height={29} />
        <StyledInnerContainer>
          <BaseInfo user={user} />

          <Spacing height={36} />
          <ShortInfo
            title="성격"
            spacing={27}
            content={user.personalities.map((value, idx) => (
              <React.Fragment key={idx}>
                <PersonalityBadge>{value}</PersonalityBadge>
                <Spacing width={10} />
              </React.Fragment>
            ))}
          />
          <ShortInfo title="종교" spacing={36} content={user.religion} />
          <ShortInfo
            title="키(cm)"
            spacing={19}
            content={user.height.toString()}
          />
          <ShortInfo title="흡연여부" spacing={12} content={user.smoke} />
          <ShortInfo title="음주여부" spacing={12} content={user.drink} />
          <Spacing height={42} />
          <LongInfo title="취미/관심사" spacing={4} content={user.hobby} />
          <Spacing height={32} />
          <LongInfo
            title="남들보다 이건 내가 좀 낫지"
            spacing={4}
            content={user.introduce}
          />
          <Spacing height={32} />
          <LongInfo
            title="어떤 연애를 하고 싶어?"
            spacing={4}
            content={user.style}
          />
          <Spacing height={54} />
        </StyledInnerContainer>
        <Spacing height={70} />
      </ScrollView>
      <BottomCTAContainer>
        <BottomCTAButton onPress={handleCTAPress} backgrounded>
          내 프로필 수정
        </BottomCTAButton>
      </BottomCTAContainer>
    </Screen>
  );
});

const StyledImage = styled.Image`
  width: 100%;
  height: 375px;
`;

function ShortInfo({
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
        <>
          <Text typography={Typography.Body_2_M} color={colors.black40}>
            {title}
          </Text>
          <Spacing width={spacing} />
          {typeof content === 'string' ? (
            <Text typography={Typography.Body_1_M}>{content}</Text>
          ) : (
            Array.isArray(content) && content.map(value => value)
          )}
        </>
      </Flex>
      <Spacing height={10} />
    </>
  );
}

function LongInfo({
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
        <Text typography={Typography.Body_1_M}>{content}</Text>
      </Flex>
      <Spacing height={10} />
    </>
  );
}
