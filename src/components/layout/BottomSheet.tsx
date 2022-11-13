import colors from '@constants/color';
import layout from '@constants/layout';
import React, {ReactNode, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export function BottomSheet({open, children, onClose}: Props) {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          onClose?.();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (open) {
      resetBottomSheet.start();
    }
  }, [open]);

  return (
    <Modal
      visible={open}
      animationType={'fade'}
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
      style={{backgroundColor: 'red'}}>
      <View
        style={{
          height:
            layout.window.height +
            (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight ?? 0),
          width: layout.window.width,
          position: 'absolute',
          top: 0,
        }}>
        <OverlayContainer>
          <TouchableWithoutFeedback onPress={onClose}>
            <Background />
          </TouchableWithoutFeedback>
          <BottomSheetContainer
            style={{
              transform: [{translateY: 1}],
            }}
            {...panResponders.panHandlers}>
            {children}
          </BottomSheetContainer>
        </OverlayContainer>
      </View>
    </Modal>
  );
}

const BottomSheetContainer = styled(Animated.View)`
  background-color: ${colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding-bottom: ${p => p.theme.edgeInsets.bottom}px;
`;

const OverlayContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.64);
`;

const Background = styled.View`
  flex: 1;
`;
