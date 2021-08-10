import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../../assets';
import {colors, fonts, hp, wp} from '../../../constants';

export const Card = ({onPress}) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      paddingVertical: hp(2.5),
      borderRadius: 5,
      backgroundColor: colors.white,
      borderLeftWidth: 10,
      borderLeftColor: colors.green,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: wp(4),
      paddingLeft: wp(3),
      marginVertical: hp(0.5),
    },
    text_bold: {
      fontFamily: fonts.LatoBlack,
      fontSize: hp(2),
    },
    text_reguler: {
      fontFamily: fonts.LatoBold,
      fontSize: hp(1.9),
    },
    label: {
      backgroundColor: colors.green,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(3),
      paddingVertical: 6,
    },
    title_label: {
      fontFamily: fonts.LatoBold,
      fontSize: hp(1.8),
      color: colors.white,
    },
  });

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <View>
        <View style={styles.row}>
          <Text style={styles.text_bold}>Mandiri</Text>
          {<ICArrowRight width={hp(2.5)} height={hp(2.5)} />}
          <Text style={styles.text_bold}>BCA</Text>
        </View>
        <Text style={styles.text_reguler}>REZA MAULIADI</Text>
        <Text style={styles.text_reguler}>Rp10.000 . 7 April 2020</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.title_label}>Berhasil</Text>
      </View>
    </TouchableOpacity>
  );
};
