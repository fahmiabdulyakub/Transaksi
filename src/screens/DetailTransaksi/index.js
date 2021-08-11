import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICArrowRight, ICCancel, ICCopy} from '../../assets';
import {Button, ButtonIconOnly, Gap} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import Clipboard from '@react-native-community/clipboard';
import {formatBank, formatRupiah, getParsedDate} from '../../utils';

export const DetailTransaksi = ({navigation, route}) => {
  const {data} = route.params;
  const [show_detail, setShowDetail] = useState(false);
  const copyToClipboard = () => {
    Clipboard.setString(data.id);
  };

  const text_sender = formatBank(data.sender_bank);
  const text_beneficiary = formatBank(data.beneficiary_bank);

  return (
    <View style={styles.page}>
      <View style={styles.container_id}>
        <ButtonIconOnly
          icon={<ICCancel />}
          size={wp(5)}
          onPress={() => navigation.goBack()}
        />
        <Gap height={hp(1)} />
        <View style={styles.row}>
          <Text style={styles.text}>{'ID TRANSAKSI:#' + data.id}</Text>
          <ButtonIconOnly icon={<ICCopy />} onPress={() => copyToClipboard()} />
        </View>
      </View>
      <View style={styles.row_title}>
        <Text style={styles.text}>DETAIL TRANSAKSI</Text>
        <Button
          title={show_detail ? 'Tutup' : 'Lihat'}
          textColor={colors.border_danger}
          onPress={() => setShowDetail(!show_detail)}
        />
      </View>
      <Gap height={3} />
      {show_detail && (
        <View style={styles.container_detail}>
          <View style={styles.row}>
            <Text style={styles.text_bold(text_sender)}>
              {data.sender_bank}
            </Text>
            <Gap width={wp(1)} />
            {<ICArrowRight width={hp(2.5)} height={hp(2.5)} />}
            <Gap width={wp(1)} />
            <Text style={styles.text_bold(text_beneficiary)}>
              {data.beneficiary_bank}
            </Text>
          </View>
          <Gap height={hp(1)} />
          <View style={styles.row_between}>
            <Text style={[styles.text, {width: wp(60)}]}>
              {data.beneficiary_name}
            </Text>
            <Text style={styles.text}>NOMINAL</Text>
          </View>
          <View style={styles.row_between}>
            <Text style={[styles.text_semibold, {width: wp(60)}]}>
              {data.account_number}
            </Text>
            <Text style={styles.text_semibold}>
              {formatRupiah(data.amount)}
            </Text>
          </View>
          <Gap height={hp(4)} />
          <View style={styles.row_between}>
            <Text style={[styles.text, {width: wp(60)}]}>BERITA TRANSFER</Text>
            <Text style={styles.text}>KODE UNIK</Text>
          </View>
          <View style={styles.row_between}>
            <Text style={[styles.text_semibold, {width: wp(60)}]}>
              {data.remark}
            </Text>
            <Text style={styles.text_semibold}>{data.unique_code}</Text>
          </View>
          <Gap height={hp(4)} />
          <Text style={[styles.text, {width: wp(60)}]}>WAKTU DIBUAT</Text>
          <Text style={styles.text_semibold}>
            {getParsedDate(data.created_at)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container_id: {
    paddingTop: hp(1),
    paddingBottom: hp(3),
    backgroundColor: colors.white,
    paddingHorizontal: wp(5),
    bottom: 1,
  },
  text: {
    fontFamily: fonts.LatoBold,
    fontSize: hp(1.8),
    textTransform: 'uppercase',
  },
  text_semibold: {
    fontFamily: fonts.LatoSemibold,
    fontSize: hp(1.8),
  },
  row_title: {
    flexDirection: 'row',
    paddingVertical: hp(3),
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_bold: textTransform => ({
    fontFamily: fonts.LatoBlack,
    fontSize: hp(2.2),
    textTransform: textTransform,
  }),
  container_detail: {
    paddingHorizontal: wp(5),
    backgroundColor: colors.white,
    paddingVertical: hp(3),
  },
  row_between: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
