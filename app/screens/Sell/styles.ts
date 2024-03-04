import {StyleSheet, Platform} from 'react-native';
import {useTheme} from 'react-native-paper';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {isTablet} from 'react-native-device-info';

export const useStyle = () => {
  const theme = useTheme();

  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      subContainer: {
        paddingTop: Platform.OS === 'android' ? heightPercentageToDP(2) : 0,
        paddingHorizontal: widthPercentageToDP(3),
      },
      controller: {marginTop: heightPercentageToDP(3.5)},
      error: {
        color: 'red',
        paddingVertical: heightPercentageToDP(0.5),
        fontSize: isTablet() ? widthPercentageToDP(2) : undefined,
      },
      inputStyle: {
        paddingVertical: heightPercentageToDP(1.5),
        width: widthPercentageToDP(83),
      },
      addImg: {
        width: widthPercentageToDP(30),
        height: heightPercentageToDP(15),
      },
      inputContainer: {
        paddingTop: heightPercentageToDP(3),
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgContainer: {
        backgroundColor: theme.colors.textViewBackground,
        paddingHorizontal: widthPercentageToDP(26),
        paddingVertical: heightPercentageToDP(11),
        borderRadius: widthPercentageToDP(4),
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgTxt: {
        fontSize: widthPercentageToDP(4),
        fontFamily: theme.fonts.semiBoldFont,
        color: theme.colors.primaryText,
      },
      button: {
        marginTop:heightPercentageToDP(3),
        alignSelf: 'center',
      },
    });
  return React.useMemo(() => styles(), []);
};
