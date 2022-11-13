import {Button} from '@components/button';
import {Spacing} from '@components/common/Spacing';
import {Flex, Screen} from '@components/layout';
import {AutoScrollView} from '@components/layout/AutoScrollView';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {withSuspense} from '@hocs/withSuspense';
import * as React from 'react';
import styled from 'styled-components/native';
import {Chatting} from './components/Chatting';
import {useChatbot} from './hooks/useChatbot';

export const ChattingScreen = withSuspense(function ChattingScreen() {
  const {data, next, isPlaying, startAction} = useChatbot();

  const handleCTAClick = async () => {
    if (!next) {
      return;
    }
    try {
      startAction(next.id);
    } catch (e) {}
  };

  return (
    <Screen backgroundColor={colors.neural}>
      <AutoScrollView>
        <Spacing height={16} />
        <Chatting data={data} />
        <Spacing height={102} />
      </AutoScrollView>
      {!isPlaying && !!next?.actionText && (
        <CTAContainer>
          <ActionButton
            disabled={isPlaying || !next}
            onPress={handleCTAClick}
            textSize="base">
            {next.actionText}
          </ActionButton>
        </CTAContainer>
      )}
    </Screen>
  );
});

const CTAContainer = styled(Flex.Center)`
  padding: 16px;
  position: absolute;
  bottom: ${p => p.theme.edgeInsets.bottom}px;
  width: 100%;
`;

function ActionButton(props: React.ComponentProps<typeof Button>) {
  return (
    <StyledButton {...props}>
      <Text typography={Typography.Body_1_M} color={colors.orange}>
        {props.children}
      </Text>
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  background-color: white;
  border-radius: 40px;
  height: auto;
  width: auto;
  padding: 8px 12px;
`;
