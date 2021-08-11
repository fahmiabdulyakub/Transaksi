import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import Gap from '../Gap';

export const RadioButton = ({item, checked, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.4} onPress={onPress}>
      <View style={styles.uncheck}>
        {checked && <View style={styles.checked} />}
      </View>
      <Gap width={wp(5)} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
