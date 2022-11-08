import {CollapsibleBox} from '@components/CollapsibleBox';
import {Spacing} from '@components/common';
import {Flex, StyledInnerContainer} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {Recommend} from '@models/Recommend';
import React from 'react';
import {View} from 'react-native';
import {GenderIcon} from './GenderIcon';
import {LongInfo} from './Info';
import {PersonalityBadge} from './PersonalityBadge';

import img_recommend_person from '@assets/images/img_recommend_person.png';
import styled from 'styled-components/native';
import {meetType} from '@screens/recommend/screens/03_Input만난계기Screen';
import {meetTermType} from '@screens/recommend/screens/04_Input만난기간Screen';

export function RecommendText({recommend}: {recommend: Recommend}) {
  return (
    <>
      <Spacing height={32} />
      <CollapsibleBox
        title={
          <StyledInnerContainer>
            <Flex.CenterVertical direction="row">
              <Text typography={Typography.Subtitle_2_B}>
                {'추천인: '}
                {recommend.name}
              </Text>
              <Spacing width={6} />
              <GenderIcon size="medium" />
            </Flex.CenterVertical>
          </StyledInnerContainer>
        }>
        <StyledInnerContainer paddingHorizontal={20}>
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
            <StyledImage source={img_recommend_person} />
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
            // @TODO fix this
            content={(recommend.meet && meetType[recommend.meet]) || '기타'}
          />
          <Spacing height={18} />
          <LongInfo
            title={'알고 지낸 기간'}
            spacing={6}
            // @TODO fix this
            content={
              (recommend.period && meetTermType[recommend.period]) || '기타'
            }
          />
          <Spacing height={18} />
          <LongInfo
            title={'추천사'}
            spacing={6}
            content={recommend.appealDetail}
          />
        </StyledInnerContainer>
      </CollapsibleBox>
    </>
  );
}

const StyledImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 46px;
`;
