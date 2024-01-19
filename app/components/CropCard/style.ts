import React from 'react';
import { StyleSheet } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { useTheme } from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      view: {
        backgroundColor: theme.colors.background,
      },
      flexrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:widthPercentageToDP(40)
      },
      cropImage: {
        height: heightPercentageToDP(25),
        borderRadius:widthPercentageToDP(6),
        width: isTablet() ? widthPercentageToDP(50) : widthPercentageToDP(45),
      },
      nameText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryText,
        fontSize: widthPercentageToDP(5.6),
      },
      priceText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryButton,
        fontSize: widthPercentageToDP(5.6),
      },
      icon: {
        height: heightPercentageToDP(2),
        width: widthPercentageToDP(7),
      },
      seperatorIcon: {
        height: heightPercentageToDP(1.7),
        width: widthPercentageToDP(0.4),
      },
      ratingText: {
        fontFamily: theme.fonts.mediumFont,
        color: theme.colors.grey700,
        fontSize: widthPercentageToDP(3),
      },
      greenContainer:{
        paddingHorizontal:widthPercentageToDP(2.2),
        paddingVertical:heightPercentageToDP(0.6),
        borderWidth:widthPercentageToDP(0.27),
        borderRadius:widthPercentageToDP(2),
        borderColor:theme.colors.primaryButton,
      },
      soldText: {
        fontFamily: theme.fonts.semiBoldFont,
        color: theme.colors.primaryButton,
        fontSize: widthPercentageToDP(2.5),
      },
    });
  return React.useMemo(() => styles(), []);
};
