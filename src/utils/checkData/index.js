import {float} from '../parser';

export const formatRupiah = (number = ' ', notRp) => {
  if (number === undefined) {
    return '0';
  }
  let tempNum = String(number).split('').reverse();
  let rupiah = '';

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 === 0 && i !== tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  rupiah = notRp
    ? `${tempNum.reverse().join('')}`
    : `Rp${tempNum.reverse().join('')}`;
  return rupiah;
};

export const formatBank = name => {
  let text_transform = 'capitalize';
  if (name !== 'mandiri' && name !== 'muamalat') {
    text_transform = 'uppercase';
  }

  return text_transform;
};

export const getParsedDate = date => {
  date = String(date).split(' ');
  let days = String(date[0]).split('-');
  let hours = String(date[1]).split(':');

  const number = [
    float(days[0]),
    float(days[1]) - 1,
    float(days[2]),
    float(hours[0]),
    float(hours[1]),
    float(hours[2]),
  ];

  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const new_date = number[2] + ' ' + month[number[1]] + ' ' + number[0];
  return new_date;
};
