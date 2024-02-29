import {StyleSheet,Platform} from 'react-native';
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
      infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: heightPercentageToDP(3),
        borderRadius: widthPercentageToDP(4),
        paddingHorizontal: widthPercentageToDP(2.5),
        paddingVertical: heightPercentageToDP(1.5),
        backgroundColor: theme.colors.textViewBackground,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: widthPercentageToDP(6),
        height: heightPercentageToDP(2.5),
      },
      leftIcon: {
        width: widthPercentageToDP(12),
        height: heightPercentageToDP(6),
      },
      titleText: {
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(4.3),
        color: theme.colors.primaryText,
      },
      addressContainer: {
        marginLeft: widthPercentageToDP(3),
      },
      greenContainer: {
        marginLeft: widthPercentageToDP(2),
        backgroundColor: theme.colors.transparentGreen,
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: heightPercentageToDP(0.5),
        borderRadius: widthPercentageToDP(0.8),
      },
      defaultText: {
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(2.5),
        color: theme.colors.primaryButton,
      },
      addressText: {
        marginTop: heightPercentageToDP(0.4),
        fontFamily: theme.fonts.mediumFont,
        fontSize: widthPercentageToDP(3.45),
        color: theme.colors.grey700,
      },
      button: {
        bottom:heightPercentageToDP(3),
        position:'absolute',
        width: widthPercentageToDP(94),
        alignSelf: 'center',
      },
    });
  return React.useMemo(() => styles(), []);
};
