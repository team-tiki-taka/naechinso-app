import {reportFlagState, sendedMatchState} from '@atoms/matching';
import {Spacing} from '@components/common';
import {
  Screen,
  StyledInnerContainer,
  TransparentGradient,
} from '@components/layout';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {SectionList} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {MyPageHeader, ToggleMenu} from './components/my-page-header';
import {ProfileCard} from './components/ProfileCard';
import {useToggleMenu} from './hooks';

import layout from '@constants/layout';
import {withSuspense} from '@hocs/withSuspense';
import {ProfileHeader} from './components/my-page-header/ProfileHeader';
import {NoDataBox} from './components/NoDataBox';

export const LoveTabScreen = withSuspense(function LoveTabScreen() {
  const navigation = useNavigation();
  const reports = useRecoilValue(reportFlagState);
  const liked = useRecoilValue(sendedMatchState);

  //const completed = useRecoilValue(completedMatchesState);

  const {selectedMenu, handleSelect} = useToggleMenu();

  const onPress = (id: number) => {
    navigation.navigate('Profile', {id});
  };

  const data = [
    {
      title: 'CardList',
      data:
        selectedMenu.menu === '보낸 호감'
          ? liked
              .filter(i => !reports[i.targetMemberId])
              .map(item =>
                ProfileCard({
                  data: item,
                  onPress: () => onPress(item.targetMemberId),
                }),
              )
          : [],
    },
  ];

  return (
    <Screen>
      <MyPageHeader />
      <ProfileHeader />
      <SectionList
        sections={data}
        renderSectionFooter={item =>
          item.section.title === 'CardList' &&
          (!item.section.data.length ? (
            <NoDataBox menu={selectedMenu.menu} />
          ) : (
            <Spacing height={24} style={{backgroundColor: colors.neural}} />
          ))
        }
        renderItem={item => {
          if (item.section.title === 'CardList') {
            return (
              <>
                <Spacing height={24} style={{backgroundColor: colors.neural}} />
                <InnerContainer>{item.item}</InnerContainer>
              </>
            );
          } else {
            return item.item;
          }
        }}
        renderSectionHeader={({section: info}) => {
          if (info.title === 'CardList') {
            return (
              <ToggleMenu
                selectedMenu={selectedMenu}
                handleSelect={handleSelect}
              />
            );
          } else {
            return <></>;
          }
        }}
      />
      <TransparentGradient />
    </Screen>
  );
});

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.neural};
  min-height: ${layout.window.height}px;
`;
