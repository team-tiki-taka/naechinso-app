import {Flex} from '@components/layout';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import React, {ReactNode, useState} from 'react';
import styled from 'styled-components/native';
import {Spacing} from '../../../../components/common/Spacing';

export function ToggleMenu() {
  type MenuType = '받은 호감' | '보낸 호감' | '매칭';
  const fields = ['받은 호감', '보낸 호감', '매칭'] as const;

  const [selectedMenu, setSelectedMenu] = useState<MenuType>('받은 호감');

  return (
    <Flex direction="row">
      {fields.map((field, idx) => {
        return (
          <React.Fragment key={idx}>
            <StyledMenu
              onPress={() => {
                setSelectedMenu(field);
              }}>
              <StyledText active={field === selectedMenu}>{field}</StyledText>
            </StyledMenu>
            {idx !== fields.length - 1 && <Spacing width={36} />}
          </React.Fragment>
        );
      })}
    </Flex>
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

const StyledHorizontalLine = styled.View`
  background-color: ${colors.orange};
  height: 2px;
  margin-top: 4px;
`;
