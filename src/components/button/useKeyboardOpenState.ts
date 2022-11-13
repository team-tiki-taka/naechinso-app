import {useBooleanState} from '@hooks/common';
import {useEffect} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboardOpenState() {
  const [isOpened, open, close] = useBooleanState(false);

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardWillShow', open),
      Keyboard.addListener('keyboardDidShow', open),
      Keyboard.addListener('keyboardWillHide', close),
      Keyboard.addListener('keyboardDidHide', close),
    ];

    return () => {
      subscriptions.forEach(sub => sub.remove());
    };
  }, []);
  return isOpened;
}
