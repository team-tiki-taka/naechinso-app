import React from 'react';
import {Screen, StyledInnerContainer} from '@components/layout';
import colors from '@constants/color';
import {ProfileCard} from '@components/ProfileCard';
import {Gender} from '@models/Gender';
import {Spacing} from '@components/common';
import {SectionList} from 'react-native';
import {MyPageHeader} from '@screens/my-page/components/my-page-header/MyPageHeader';
import styled from 'styled-components/native';
import {useMainNavigation} from '@hooks/navigation';
import {ToggleMenu} from './components/my-page-header';
import {ProfileHeader} from './components/my-page-header/ProfileHeader';

export function MyPageHomeScreen() {
  const navigation = useMainNavigation();
  const handlePress = () => {
    navigation.navigate('MyProfile');
  };

  const data = [
    {
      title: 'ProfileHeader',
      data: [ProfileHeader({handlePress: handlePress})],
    },
    {
      title: 'CardList',
      data: [
        ProfileCard({gender: Gender.FEMALE}),
        ProfileCard({gender: Gender.MALE}),
        ProfileCard({gender: Gender.FEMALE}),
        ProfileCard({gender: Gender.FEMALE}),
        ProfileCard({gender: Gender.FEMALE}),
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
            return <ToggleMenu />;
          } else {
            return <></>;
          }
        }}
      />
    </Screen>
  );
}

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.neural};
`;
