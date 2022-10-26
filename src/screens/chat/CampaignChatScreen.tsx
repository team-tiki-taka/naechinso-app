import {Button} from '@components/button';
import {Spacing} from '@components/common/Spacing';
import {Flex, Screen} from '@components/layout';
import {AutoScrollView} from '@components/layout/AutoScrollView';
import {Text, Typography} from '@components/text';
import colors from '@constants/color';
import {useScrollIsOnTop} from '@hooks/useScrollOnTop';
import * as React from 'react';
import styled from 'styled-components/native';
import {Chatting} from './components/Chatting';
import {useChatbot} from './hooks/useChatbot';

export function CampaignChatScreen() {
  const {isOnTop, onScroll} = useScrollIsOnTop();

  const {data, next, isPlaying, startAction} = useChatbot();

  const handleCTAClick = async () => {
    if (!next) {
      return;
    }
    // if (action.id === 'subscribe') {
    //   await assertNetworkStatus();
    //   try {
    //     await subscribe(campaign.id);
    //     updateSubscribe(campaign.id, true);
    //   } catch (e) {
    //     Sentry.captureException(e);
    //     DarkToast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요');
    //     throw e;
    //   }
    // }
    try {
      startAction(next.id);
    } catch (e) {
      //DarkToast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요');
    }
  };

  return (
    <Screen backgroundColor={colors.neural}>
      <AutoScrollView onScroll={onScroll}>
        <Spacing height={16} />
        <Chatting data={data} />
        <Spacing height={102} />
      </AutoScrollView>
      {!isPlaying && !!next && (
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
}

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
