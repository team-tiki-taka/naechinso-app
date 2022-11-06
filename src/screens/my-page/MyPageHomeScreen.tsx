import {likedMatchesState, reportFlagState} from '@atoms/matching';
import {Spacing} from '@components/common';
import {
  Flex,
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

import {Text, Typography} from '@components/text';

import img_no_complete_heart from '@assets/images/img_no_complete_heart.png';
import img_no_give_heart from '@assets/images/img_no_give_heart.png';
import img_no_take_heart from '@assets/images/img_no_take_heart.png';
import {useEffect, useState} from 'react';

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

  const [noDataInfo, setNoDataInfo] = useState<{
    image: string;
    title: string;
    content: string;
  }>({});

  useEffect(() => {
    if (selectedMenu.menu === '보낸 호감') {
      setNoDataInfo({
        image: img_no_give_heart,
        title: '보낸 호감이 없어',
        content: '마음에 쏙 드는 사람을 \n찾을 수 있도록 더 노력할게!',
      });
    } else if (selectedMenu.menu === '받은 호감') {
      setNoDataInfo({
        image: img_no_take_heart,
        title: '받은 호감이 없어',
        content: '조금만 기다려봐!',
      });
    } else {
      setNoDataInfo({
        image: img_no_complete_heart,
        title: '둘 다 호감이 없어',
        content: '서로 마음에 쏙 드는 사람이\n곧 나타날거야 :)',
      });
    }
  }, [selectedMenu]);

  return (
    <Screen>
      <MyPageHeader />
      <SectionList
        sections={data}
        renderSectionFooter={item =>
          item.section.title === 'CardList' &&
          !item.section.data.length && (
            <NoData
              image={noDataInfo?.image}
              title={noDataInfo?.title}
              content={noDataInfo?.content}
            />
          )
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
}

const InnerContainer = styled(StyledInnerContainer)`
  background-color: ${colors.neural};
`;

const StyledImage = styled.Image`
  width: 154px;
  height: 124px;
`;

function NoData({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <Flex.CenterVertical>
      <Spacing height={116} />
      <StyledImage source={image} />
      <Spacing height={11} />
      <Text typography={Typography.Subtitle_1_B} color={colors.black20}>
        {title}
      </Text>
      <Spacing height={6} />
      <Text typography={Typography.Body_2_M} color={colors.black40} center>
        {content}
      </Text>
    </Flex.CenterVertical>
  );
}
