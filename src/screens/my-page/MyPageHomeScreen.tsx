import {likedMatchesState, reportFlagState} from '@atoms/matching';
import {Spacing} from '@components/common';
import {
  Screen,
  StyledInnerContainer,
  TransparentGradient,
} from '@components/layout';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import {MyPageHeader} from '@screens/my-page/components/my-page-header/MyPageHeader';
import React from 'react';
import {SectionList} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {ToggleMenu} from './components/my-page-header';
import {ProfileHeader} from './components/my-page-header/ProfileHeader';
import {ProfileCard} from './components/ProfileCard';
import {useToggleMenu} from './hooks';

export function MyPageHomeScreen() {
  const navigation = useNavigation();
  const reports = useRecoilValue(reportFlagState);
  const liked = useRecoilValue(likedMatchesState);
  //const completed = useRecoilValue(completedMatchesState);

  const handlePress = () => {
    navigation.navigate('MyProfile');
  };

  const {selectedMenu, handleSelect} = useToggleMenu();

  const onPress = (id: number) => {
    navigation.navigate('Profile', {id});
  };

  const data = [
    {
      title: 'ProfileHeader',
      data: [ProfileHeader({handlePress: handlePress})],
    },
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
      <SectionList
        sections={data}
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
}

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.neural};
`;
