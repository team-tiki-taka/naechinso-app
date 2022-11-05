import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {MenuListType} from '@screens/my-page/hooks/useToggleMenu';
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
  const fields = ['받은 호감', '보낸 호감', '둘 다 호감'] as const;

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
            {idx !== fields.length - 1 && <Spacing width={36} />}
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const StyledMenu = styled.TouchableOpacity``;

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
    <Flex>
      <Flex direction="row">
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
      </Flex>
      {active && <StyledHorizontalLine />}
    </Flex>
  );
}

const Container = styled(Flex)`
  background-color: ${colors.white};
  padding-left: 24px;
`;

const StyledHorizontalLine = styled.View`
  background-color: ${colors.orange};
  height: 2px;
  margin-top: 4px;
`;

const StyledIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
