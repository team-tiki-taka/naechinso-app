import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {ChatBubble} from '../ChatBubble';

export function LoadingMessageView() {
  return (
    <ChatBubble>
      <AnimatedLottieView
        source={require('@assets/lotties/lottie_bubble_typing.json')}
        autoPlay
        loop={false}
        style={{width: 24}}
      />
    </ChatBubble>
  );
}
