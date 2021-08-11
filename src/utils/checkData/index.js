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
