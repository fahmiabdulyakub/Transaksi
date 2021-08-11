import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ICChevron, ICSearch} from '../../assets';
import {
  ButtonIconText,
  Card,
  FooterPagination,
  Gap,
  Input,
  ModalSort,
} from '../../components';
import {colors, hp, wp} from '../../constants';
import {getData} from '../../services';

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
  const [transaksi, setTransaksi] = useState([]);
  const [transaksi_filter, setTransaksiFilter] = useState([]);
  const [is_loading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onPressFilter = item => {
    setFilter(item);
    setShowModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getData().then(result => {
      setTransaksi(result);
      setTransaksiFilter(result);
      setIsLoading(false);
    });
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    getData().then(result => {
      setTransaksi(result);
      setTransaksiFilter(result);
      setRefresh(false);
    });
  };

  const onSearch = cari => {
    const newData = Object.keys(transaksi).reduce(function (item, key) {
      const name = transaksi[key].beneficiary_name
        ? transaksi[key].beneficiary_name.toLowerCase()
        : '';
      const beneficiary_bank = transaksi[key].beneficiary_bank
        ? transaksi[key].beneficiary_bank.toLowerCase()
        : '';
      const sender_bank = transaksi[key].sender_bank
        ? transaksi[key].sender_bank.toLowerCase()
        : '';
      const amount = transaksi[key].amount
        ? transaksi[key].amount.toString()
        : '';
      const text = cari;
      if (
        beneficiary_bank.indexOf(text) > -1 ||
        name.indexOf(text) > -1 ||
        sender_bank.indexOf(text) > -1 ||
        amount.indexOf(text) > -1
      ) {
        item[key] = transaksi[key];
      }
      return item;
    }, {});
    setTransaksiFilter(cari ? newData : transaksi);
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
        onChangeText={value => onSearch(value.toLowerCase())}
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
      <FlatList
        refreshing={refresh}
        onRefresh={onRefresh}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={Object.keys(transaksi_filter)}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('DetailTransaksi', {
                data: transaksi_filter[item],
              })
            }
            item={transaksi_filter[item]}
          />
        )}
        ListFooterComponent={<FooterPagination visible={is_loading} />}
      />
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
