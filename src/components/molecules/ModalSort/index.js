import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

export const ModalSort = ({visible, onPressClose, data}) => {
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
        {data.map((item, index) => {
          return (
            <View style={styles.row} key={index}>
              <View style={styles.uncheck}>
                {item.checked && <View style={styles.checked} />}
              </View>
              <Gap width={wp(5)} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // : hp(40),
    borderRadius: 8,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  text: {
    fontFamily: fonts.LatoSemibold,
    fontSize: hp(2),
  },
  uncheck: {
    backgroundColor: colors.white,
    width: wp(5),
    height: wp(5),
    borderRadius: wp(5) / 2,
    borderWidth: 3,
    borderColor: colors.border_danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: colors.border_danger,
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(2.5) / 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
});
