import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Gap} from '../../components';
import {hp, wp} from '../../constants';

export const DaftarTransaksi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Gap height={hp(3)} />
      <View style={styles.container}>
        <Card onPress={() => navigation.navigate('DetailTransaksi')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: wp(3),
  },
});
