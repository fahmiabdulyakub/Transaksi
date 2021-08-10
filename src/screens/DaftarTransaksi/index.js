import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ICChevron, ICSearch} from '../../assets';
import {ButtonIconText, Card, Gap, Input, ModalSort} from '../../components';
import {colors, hp, wp} from '../../constants';

export const DaftarTransaksi = ({navigation}) => {
  const data = [
    {id: '1', name: 'URUTKAN'},
    {id: '2', name: 'Nama A-Z'},
    {id: '3', name: 'Nama Z-A'},
    {id: '4', name: 'Tanggal Terbaru'},
    {id: '5', name: 'Tanggal Terlama'},
  ];
  const [show_modal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(data[0]);

  const onPressFilter = item => {
    setFilter(item);
    setShowModal(false);
  };
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
            title={filter.name}
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
        filter={filter}
        onPress={item => onPressFilter(item)}
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
