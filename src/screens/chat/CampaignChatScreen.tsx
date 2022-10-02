import {AutoScrollView} from '@components/layout/AutoScrollView';
import {Button} from '@components/button';
import {Screen} from '@components/layout';
import {Spacing} from '@components/common/Spacing';
import colors from '@constants/color';
import {useScrollIsOnTop} from '@hooks/useScrollOnTop';
import * as React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {Chatting} from './components/Chatting';
import {useChatbot} from './hooks/useChatbot';

export function CampaignChatScreen() {
  const {isOnTop, onScroll} = useScrollIsOnTop();

  const {data, action, isPlaying, startAction} = useChatbot();

  const handleCTAClick = async () => {
    if (!action) {
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
      startAction(action.id);
    } catch (e) {
      //DarkToast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요');
    }
  };

  return (
    <Screen backgroundColor={colors.black40}>
      <AutoScrollView onScroll={onScroll}>
        <Spacing height={16} />
        <Chatting data={data} />
        <Spacing height={102} />
      </AutoScrollView>
      <CTAContainer>
        <ColorCtaBitton
          disabled={isPlaying || !action}
          onPress={handleCTAClick}
          textSize="base">
          {isPlaying || !action ? '로딩중' : action?.actionText}
        </ColorCtaBitton>
      </CTAContainer>
    </Screen>
  );
}

const CTAContainer = styled.View`
  padding: 16px;
  position: absolute;
  bottom: ${p => p.theme.edgeInsets.bottom}px;
  width: 100%;
`;

function ColorCtaBitton(props: React.ComponentProps<typeof Button>) {
  const animation = React.useMemo(() => new Animated.Value(0), []);
  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(235, 233, 230, 1)', 'rgba(4, 184, 124, 1)'],
  });
  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: props.disabled ? 0 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [props.disabled]);
  return <Button {...props} style={[props.style, {backgroundColor}]} />;
}
