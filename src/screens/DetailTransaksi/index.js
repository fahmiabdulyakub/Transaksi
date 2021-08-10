import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {colors, fonts, hp} from '../../constants';

export const DetailTransaksi = () => {
  return (
    <View style={styles.page}>
      <Gap height={hp(1)} />
      <View style={styles.container_id}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container_id: {
    flexDirection: 'row',
    paddingVertical: hp(3),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.LatoBold,
    fontSize: hp(2),
  },
});
