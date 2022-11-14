import {
  completedMatchListState,
  receivedMatchListState,
  reportFlagState,
  sendedMatchListState,
} from '@atoms/matching';
import {Spacing} from '@components/common';
import {
  Screen,
  StyledInnerContainer,
  TransparentGradient,
} from '@components/layout';
import colors from '@constants/color';
import {useNavigation} from '@hooks/navigation';
import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  View,
  ViewBase,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {MyPageHeader, ToggleMenu} from './components/my-page-header';
import {ProfileCard} from './components/ProfileCard';
import {useToggleMenu} from './hooks';

import {withSuspense} from '@hocs/withSuspense';
import {ProfileHeader} from './components/my-page-header/ProfileHeader';
import {NoDataBox} from './components/NoDataBox';
import {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import layout from '@constants/layout';

export const LoveTabScreen = withSuspense(function LoveTabScreen() {
  const navigation = useNavigation();
  const reports = useRecoilValue(reportFlagState);
  const sended = useRecoilValue(sendedMatchListState);
  const received = useRecoilValue(receivedMatchListState);
  const completed = useRecoilValue(completedMatchListState);

  const {selectedMenu, handleSelect} = useToggleMenu();

  const onPress = ({
    id,
    targetMemberId,
  }: {
    id: number;
    targetMemberId: number;
  }) => {
    navigation.navigate('Profile', {
      id: id,
      targetMemberId: targetMemberId,
      menu: selectedMenu.menu,
    });
  };
  const data = useMemo(() => {
    const list = {
      '보낸 호감': sended,
      '받은 호감': received,
      '둘 다 호감': completed,
    }[selectedMenu.menu];
    return [
      {
        title: 'CardList',
        data: (list ?? [])
          .filter(i => !reports[i.targetMemberId])
          .map(item =>
            ProfileCard({
              data: item,
              onPress: () =>
                onPress({id: item.id, targetMemberId: item.targetMemberId}),
            }),
          ),
      },
    ];
  }, [selectedMenu.menu, sended, received, completed]);

  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, backgroundColor: colors.black}}>
      <StatusBar backgroundColor={colors.white} />
      <Spacing height={insets.top} />
      <View style={{backgroundColor: colors.white}}>
        <MyPageHeader />
        <ProfileHeader />
        <SectionList
          sections={data}
          contentContainerStyle={{
            backgroundColor: data[0].data.length ? colors.neural : colors.white,
            minHeight: layout.window.height,
          }}
          ListFooterComponentStyle={{backgroundColor: colors.neural}}
          renderSectionFooter={item =>
            item.section.title === 'CardList' &&
            (!item.section.data.length ? (
              <NoDataBox menu={selectedMenu.menu} />
            ) : (
              <Spacing height={300} style={{backgroundColor: colors.neural}} />
            ))
          }
          renderItem={item => {
            if (item.section.title === 'CardList') {
              return (
                <>
                  <Spacing
                    height={24}
                    style={{backgroundColor: colors.neural}}
                  />
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
      </View>
    </View>
  );
});

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.neural};
`;
