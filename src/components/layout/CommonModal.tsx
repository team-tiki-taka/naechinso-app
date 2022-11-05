import React, {ReactNode} from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function CommonModal({open, onClose, children}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <CenteredView activeOpacity={1} onPressOut={onClose}>
        <TouchableWithoutFeedback
          style={styles.modalView}
          onPress={() => console.log('without-feedback')}>
          <View style={styles.modalView}>{children}</View>
        </TouchableWithoutFeedback>
      </CenteredView>
    </Modal>
  );
}

const CenteredView = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
