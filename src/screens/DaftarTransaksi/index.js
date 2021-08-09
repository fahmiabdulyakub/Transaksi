import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';

export const DaftarTransaksi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Gap height={hp(3)} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.content}>
          <View>
            <View style={styles.row}>
              <Text style={styles.text_bold}>Mandiri</Text>
              {<ICArrowRight width={hp(2.5)} height={hp(2.5)} />}
              <Text style={styles.text_bold}>BCA</Text>
            </View>
            <Text style={styles.text_reguler}>REZA MAULIADI</Text>
          </View>
          <Button
            title={'Berhasil'}
            buttonColor={colors.green}
            textColor={colors.white}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: wp(3),
  },
  content: {
    paddingVertical: hp(3),
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
  },
  text_bold: {
    fontFamily: fonts.LatoBlack,
    fontSize: hp(2.2),
  },
  text_reguler: {
    fontFamily: fonts.LatoBold,
    fontSize: hp(2),
  },
});
