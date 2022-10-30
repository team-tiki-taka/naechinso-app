import {CollapsibleBox} from '@components/CollapsibleBox';
import {Spacing} from '@components/common';
import {Flex, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {RecommendType} from '@screens/profile/OtherProfileScreen';
import React from 'react';
import {View} from 'react-native';
import {GenderIcon} from './GenderIcon';
import {LongInfo} from './Info';
import {PersonalityBadge} from './PersonalityBadge';

export function RecommendText({recommend}: {recommend: RecommendType}) {
  return (
    <>
      <Spacing height={32} />
      <CollapsibleBox
        title={
          <Flex.CenterVertical direction="row">
            <Text typography={Typography.Subtitle_2_B}>
              {'추천인: '}
              {recommend.name}
            </Text>
            <Spacing width={6} />
            <GenderIcon size="medium" />
          </Flex.CenterVertical>
        }>
        <Spacing height={18} />
        <StyledInnerContainer paddingHorizontal={20}>
          <Flex.CenterVertical direction="row" justify="space-between">
            <Flex>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.jobName}
                {'에서'}
              </Text>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.roleName}
                {'을(를) 하고 있어'}
              </Text>
            </Flex>
            <View
              style={{
                backgroundColor: colors.black20,
                width: 92,
                height: 92,
                borderRadius: 46,
              }}
            />
          </Flex.CenterVertical>
          <Spacing height={14} />
          <LongInfo
            title={'내가 본 친구의 매력'}
            spacing={6}
            content={
              <Flex direction="row">
                {recommend.personality.map((value, idx) => (
                  <React.Fragment key={idx}>
                    <PersonalityBadge backgroundColor={colors.white}>
                      {value}
                    </PersonalityBadge>
                    {idx < recommend.personality.length - 1 && (
                      <Spacing width={10} />
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            }
          />
          <Spacing height={32} />
          <LongInfo
            title={'어떻게 만난 사이야?'}
            spacing={6}
            content={recommend.만난계기}
          />
          <Spacing height={32} />
          <LongInfo
            title={'알고 지낸 기간'}
            spacing={6}
            content={recommend.만난기간}
          />
          <Spacing height={32} />
          <LongInfo
            title={'추천사'}
            spacing={6}
            content={recommend.recommendText}
          />
        </StyledInnerContainer>
      </CollapsibleBox>
    </>
  );
}
