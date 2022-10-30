import React from 'react';
import {
  Screen,
  StyledInnerContainer,
  TransparentGradient,
} from '@components/layout';
import colors from '@constants/color';
import {ProfileCard} from './components/ProfileCard';
import {Gender} from '@models/Gender';
import {Spacing} from '@components/common';
import {SectionList} from 'react-native';
import {MyPageHeader} from '@screens/my-page/components/my-page-header/MyPageHeader';
import styled from 'styled-components/native';
import {useMainNavigation} from '@hooks/navigation';
import {ToggleMenu} from './components/my-page-header';
import {ProfileHeader} from './components/my-page-header/ProfileHeader';
import {useToggleMenu} from './hooks';

export function MyPageHomeScreen() {
  const navigation = useMainNavigation();
  const handlePress = () => {
    navigation.navigate('MyProfile');
  };

  const {selectedMenu, handleSelect} = useToggleMenu();

  const onPress = () => {
    // api 연결하기 전에는 일단 임시로 이렇게 해놓음
    if (selectedMenu.menu === '받은 호감') {
      navigation.navigate('Profile');
    } else if (selectedMenu.menu === '보낸 호감') {
      navigation.navigate('Profile');
    } else {
      navigation.navigate('Profile');
    }
  };

  const data = [
    {
      title: 'ProfileHeader',
      data: [ProfileHeader({handlePress: handlePress})],
    },
    {
      title: 'CardList',
      data: [
        ProfileCard({gender: Gender.FEMALE, onPress: onPress}),
        ProfileCard({gender: Gender.MALE, onPress: onPress}),
        ProfileCard({gender: Gender.FEMALE, onPress: onPress}),
        ProfileCard({gender: Gender.FEMALE, onPress: onPress}),
        ProfileCard({gender: Gender.FEMALE, onPress: onPress}),
      ],
      // 얘가 안돼서 그냥 return 할 때 내가 Spacing component 넣어줌 ㅠㅠ
      // separators: {highlight: () => <Spacing height={24} />},
    },
  ];

  return (
    <Screen>
      <MyPageHeader />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => {
          return index;
        }}
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
