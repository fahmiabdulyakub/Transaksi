import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, hp, wp} from '../../../constants';
import {RadioButton} from '../../atoms';

export const ModalSort = ({visible, onPressClose, data, filter, onPress}) => {
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
            <RadioButton
              item={item}
              key={index}
              checked={filter.id === item.id ? true : false}
              onPress={() => onPress(item)}
            />
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
});
