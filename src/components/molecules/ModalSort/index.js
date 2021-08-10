import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts, hp, wp} from '../../../constants';

export const ModalSort = ({visible, onPressClose}) => {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}
      animationIn="zoomIn"
      animationInTiming={300}
      animationOutTiming={500}
      useNativeDriver={true}
      animationOut="zoomOut">
      <View style={styles.container}>
        <Text style={styles.text}>URUTKAN</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: hp(55),
    borderRadius: 10,
    paddingHorizontal: wp(6),
    paddingVertical: hp(5),
  },
  text: {
    fontFamily: fonts.LatoSemibold,
    fontSize: hp(2),
  },
});
