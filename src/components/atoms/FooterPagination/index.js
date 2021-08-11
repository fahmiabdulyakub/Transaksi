import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts, hp} from '../../../constants';

const FooterPagination = ({label, visible}) => {
  return (
    <View style={styles.footer}>
      {visible ? (
        <ActivityIndicator size="large" color={colors.bg.black} />
      ) : (
        <Text style={styles.text}>Data sudah ditampilkan semua</Text>
      )}
    </View>
  );
};

export default FooterPagination;

const styles = StyleSheet.create({
  footer: {
    marginVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(1.6),
    fontFamily: fonts.MontserratRegular,
    textTransform: 'capitalize',
  },
});
