import {CollapsibleBox} from '@components/CollapsibleBox';
import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {Recommend} from '@models/Recommend';
import React from 'react';
import {View} from 'react-native';
import {GenderIcon} from './GenderIcon';
import {LongInfo} from './Info';
import {PersonalityBadge} from './PersonalityBadge';

export function RecommendText({recommend}: {recommend: Recommend}) {
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
        <Flex.CenterVertical direction="row" justify="space-between">
          {recommend.jobName ? (
            <View>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.jobName}
                {'에서'}
              </Text>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.jobPart}
                {'을(를) 하고 있어'}
              </Text>
            </View>
          ) : (
            <View>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.eduName} {recommend.eduLevel}
                {'에서'}
              </Text>
              <Text typography={Typography.Subtitle_2_B}>
                {recommend.eduMajor}
                {'을(를)\n다니고 있어'}
              </Text>
            </View>
          )}
          <Spacing width={12} />
          <View
            style={{
              backgroundColor: colors.black20,
              width: 80,
              height: 80,
              borderRadius: 46,
            }}
          />
        </Flex.CenterVertical>
        <Spacing height={18} />
        <LongInfo
          title={'내가 본 친구의 매력'}
          spacing={6}
          content={
            <Flex direction="row">
              {recommend.appeals.map((value, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Spacing width={10} />}
                  <PersonalityBadge backgroundColor={colors.white}>
                    {value}
                  </PersonalityBadge>
                </React.Fragment>
              ))}
            </Flex>
          }
        />
        <Spacing height={18} />
        <LongInfo
          title={'어떻게 만난 사이야?'}
          spacing={6}
          content={recommend.meet}
        />
        <Spacing height={18} />
        <LongInfo
          title={'알고 지낸 기간'}
          spacing={6}
          content={recommend.period}
        />
        <Spacing height={18} />
        <LongInfo
          title={'추천사'}
          spacing={6}
          content={recommend.appealDetail}
        />
      </CollapsibleBox>
    </>
  );
}
