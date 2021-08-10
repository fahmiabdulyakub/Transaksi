import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ICSearch} from '../../assets';
import {Card, Gap, Input} from '../../components';
import {colors, hp, wp} from '../../constants';

export const DaftarTransaksi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Input
        suffixComponent={<ICSearch />}
        backgroundColor={colors.white}
        placeholder={'Cari nama,bank atau nominal'}
        placeholderColor={colors.dark_grey}
        colorText={colors.black}
      />
      <Gap height={hp(1)} />
      <ScrollView>
        <Card onPress={() => navigation.navigate('DetailTransaksi')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: wp(3),
  },
});
