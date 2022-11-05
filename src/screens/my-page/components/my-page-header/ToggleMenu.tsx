import {Spacing} from '@components/common';
import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {MenuListType} from '@screens/my-page/hooks/useToggleMenu';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

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
              <StyledText active={field === selectedMenu.menu}>
                {field}
              </StyledText>
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
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <Text
        typography={active ? Typography.Body_1_B : Typography.Body_1_M}
        color={active ? colors.orange : colors.black40}>
        {children}
      </Text>
      {active && <StyledHorizontalLine />}
    </>
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
