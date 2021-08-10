import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ICChevron} from '../../../assets';
import {colors, fonts, hp, wp} from '../../../constants';
import ButtonIconOnly from '../ButtonIconOnly';
import ButtonIconText from '../ButtonIconText';
import Gap from '../Gap';

const Input = ({
  placeholder,
  placeholderColor,
  onChangeText,
  keyboardType,
  height,
  multiline,
  colorText,
  fontSize,
  fontFamily,
  widthInput,
  maxLength,
  suffixComponent,
  value,
  paddingHorizontal,
  paddingRight,
  backgroundColor,
  onPress,
  icon,
  secureTextEntry,
}) => {
  return (
    <View
      style={styles.conatinerInput(
        height,
        paddingHorizontal,
        backgroundColor,
        paddingRight,
      )}>
      {suffixComponent && suffixComponent}
      <Gap width={wp(2)} />
      <TextInput
        style={styles.input(colorText, fontSize, fontFamily, widthInput)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColor}
        textDecorationLine={'underline'}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={5}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
      {onPress && <ButtonIconOnly onPress={onPress} icon={icon} />}
      <ButtonIconText
        backgroundColor={colors.white}
        title={'URUTKAN'}
        flexDirection={'row'}
        titleColor={colors.border_danger}
        iconRight={<ICChevron width={wp(5)} height={wp(5)} />}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  conatinerInput: (
    height,
    paddingHorizontal,
    backgroundColor,
    paddingRight,
  ) => ({
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    alignItems: 'center',
    height: height ? height : hp(8),
    borderRadius: 5,
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    paddingRight: paddingRight,
  }),
  input: (colorText, fontSize, fontFamily, widthInput) => ({
    fontSize: fontSize ? fontSize : hp(2),
    fontFamily: fontFamily ? fontFamily : fonts.LatoSemibold,
    color: colorText ? colorText : colors.light_grey,
    width: widthInput,
    flex: 1,
  }),
  lengthText: {
    fontSize: hp(1.5),
    fontFamily: fonts.LatoBold,
    color: colors.light_grey,
    top: hp(1),
  },
});
