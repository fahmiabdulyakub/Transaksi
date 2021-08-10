import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ICChevron, ICSearch} from '../../assets';
import {ButtonIconText, Card, Gap, Input, ModalSort} from '../../components';
import {colors, hp, wp} from '../../constants';

export const DaftarTransaksi = ({navigation}) => {
  const data = [
    {id: '1', name: 'URUTKAN', checked: true},
    {id: '2', name: 'Nama A-Z', checked: false},
    {id: '2', name: 'Nama Z-A', checked: false},
    {id: '3', name: 'Tanggal Terbaru', checked: false},
    {id: '4', name: 'Tanggal Terlama', checked: false},
  ];
  const [show_modal, setShowModal] = useState(false);
  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Input
        suffixComponent={<ICSearch />}
        backgroundColor={colors.white}
        placeholder={'Cari nama,bank atau nominal'}
        placeholderColor={colors.dark_grey}
        colorText={colors.black}
        suffixComponentRight={
          <ButtonIconText
            backgroundColor={colors.white}
            title={'URUTKAN'}
            flexDirection={'row'}
            titleColor={colors.border_danger}
            iconRight={<ICChevron width={wp(4)} height={wp(4)} />}
            onPress={() => setShowModal(true)}
          />
        }
      />
      <Gap height={hp(1)} />
      <ScrollView>
        <Card onPress={() => navigation.navigate('DetailTransaksi')} />
      </ScrollView>
      <ModalSort
        visible={show_modal}
        onPressClose={() => setShowModal(false)}
        data={data}
      />
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
