import * as React from 'react';
import {Image} from 'react-native';

export function ChatProfile() {
  return (
    <Image
      style={{width: 36, height: 36, borderRadius: 36}}
      source={require('@assets/images/img_chatbot_profile.png')}
    />
  );
}
