import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {MenuListType, MenuType} from '@screens/my-page/hooks/useToggleMenu';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

import ic_heart_black20 from '@assets/icons/ic_heart_black20.png';
import ic_heart_orange from '@assets/icons/ic_heart_orange.png';

export function ToggleMenu({
  selectedMenu,
  handleSelect,
}: {
  selectedMenu: MenuListType;
  handleSelect: (id: number) => () => void;
}) {
  const fields = [
    MenuType.receivedHeart,
    MenuType.sendedHeart,
    MenuType.completeHeart,
  ] as const;

  return (
    <Container direction="row">
      {fields.map((field, idx) => {
        return (
          <React.Fragment key={idx}>
            <StyledMenu onPress={handleSelect(idx)}>
              <Flex direction="row">
                <StyledText
                  active={field === selectedMenu.menu}
                  icon={idx === 2}>
                  {field}
                </StyledText>
              </Flex>
            </StyledMenu>
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const StyledMenu = styled.TouchableOpacity`
  flex: 1;
`;

function StyledText({
  active,
  children,
  icon = false,
}: {
  active: boolean;
  children: ReactNode;
  icon: boolean;
}) {
  return (
    <Flex.Center style={{flex: 1}}>
      <Flex.Center direction="row">
        <Text
          typography={active ? Typography.Body_1_B : Typography.Body_1_M}
          color={active ? colors.orange : colors.black40}>
          {children}
        </Text>
        {icon ? (
          active ? (
            <>
              <Spacing width={2} />
              <StyledIcon source={ic_heart_orange} />
            </>
          ) : (
            <>
              <Spacing width={2} />
              <StyledIcon source={ic_heart_black20} />
            </>
          )
        ) : undefined}
      </Flex.Center>
      {active && <StyledHorizontalLine />}
    </Flex.Center>
  );
}

const Container = styled(Flex)`
  background-color: ${colors.white};
`;

const StyledHorizontalLine = styled.View`
  background-color: ${colors.orange};
  height: 2px;
  margin-top: 4px;
  flex: 1;
  width: 100%;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
