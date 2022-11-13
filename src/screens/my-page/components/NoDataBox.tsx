import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import colors from '@constants/color';
import React, {useMemo} from 'react';
import {Text, Typography} from '@components/text';
import img_no_complete_heart from '@assets/images/img_no_complete_heart.png';
import img_no_give_heart from '@assets/images/img_no_give_heart.png';
import img_no_take_heart from '@assets/images/img_no_take_heart.png';
import styled from 'styled-components/native';

export function NoDataBox({menu}: {menu: string}) {
  const {image, title, content} = useMemo(() => {
    if (menu === '보낸 호감') {
      return {
        image: img_no_give_heart,
        title: '보낸 호감이 없어',
        content: '마음에 쏙 드는 사람을 \n찾을 수 있도록 더 노력할게!',
      };
    } else if (menu === '받은 호감') {
      return {
        image: img_no_take_heart,
        title: '받은 호감이 없어',
        content: '조금만 기다려봐!',
      };
    } else {
      return {
        image: img_no_complete_heart,
        title: '둘 다 호감이 없어',
        content: '서로 마음에 쏙 드는 사람이\n곧 나타날거야 :)',
      };
    }
  }, [menu]);
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

const StyledImage = styled.Image`
  width: 154px;
  height: 124px;
`;
