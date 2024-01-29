import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const useStyle = () => {
  const theme = useTheme();

  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      subContainer: {
        paddingHorizontal: widthPercentageToDP(4),
      },
      img: {
        height: heightPercentageToDP(52),
        width: widthPercentageToDP(100),
      },
      icon: {
        height: heightPercentageToDP(3.3),
        width: widthPercentageToDP(6.8),
      },
      star: {
        height: heightPercentageToDP(3),
        width: widthPercentageToDP(5),
      },
      nameText: {
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(7.3),
      },
      rowFlex: {
        marginTop: heightPercentageToDP(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      reviewContainer: {
        marginVertical: heightPercentageToDP(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: widthPercentageToDP(55),
      },
      soldText: {
        color: theme.colors.primaryButton,
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(2.8),
      },
      reviewText: {
        color: theme.colors.dullBlack,
        fontFamily: theme.fonts.mediumFont,
        fontSize: widthPercentageToDP(3.3),
      },
      greenContainer: {
        paddingHorizontal: widthPercentageToDP(2.2),
        paddingVertical: heightPercentageToDP(0.6),
        borderRadius: widthPercentageToDP(2),
        backgroundColor: theme.colors.transparentGreen,
      },
      lineSeparator: {
        paddingHorizontal: widthPercentageToDP(40),
        paddingVertical: heightPercentageToDP(0.1),
        backgroundColor: theme.colors.borderColor,
      },
      headingText: {
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(4.2),
        marginVertical: heightPercentageToDP(1),
      },
      descriptionText: {
        color: theme.colors.dullBlack,
        fontFamily: theme.fonts.regularFont,
        fontSize: widthPercentageToDP(3.3),
      },
      greyContainer: {
        paddingHorizontal: widthPercentageToDP(4),
        paddingVertical: heightPercentageToDP(1.2),
        borderRadius: widthPercentageToDP(9),
        backgroundColor: theme.colors.greyBackground,
      },
      quantityContainer: {
        marginTop: heightPercentageToDP(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: widthPercentageToDP(40),
        marginBottom: heightPercentageToDP(3),
      },
      quantityText: {
        color: theme.colors.primaryButton,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(4),
      },
      priceHeading: {
        color: theme.colors.lightGrey,
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(3.2),
      },
      priceText: {
        marginTop: heightPercentageToDP(0.6),
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(5.2),
      },
      priceContainer: {
        marginTop: heightPercentageToDP(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      button: {
        width: widthPercentageToDP(55),
      },
      dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: heightPercentageToDP(1),
        alignSelf: 'center',
      },
      longDot: {
        paddingHorizontal: widthPercentageToDP(2.7),
        paddingVertical: heightPercentageToDP(0.4),
        borderRadius: widthPercentageToDP(3),
        backgroundColor: theme.colors.primaryButton,
        marginHorizontal: widthPercentageToDP(0.5),
      },
      shortDot: {
        marginHorizontal: widthPercentageToDP(0.5),
        paddingHorizontal: widthPercentageToDP(1),
        paddingVertical: heightPercentageToDP(0.4),
        borderRadius: widthPercentageToDP(3),
        backgroundColor: theme.colors.greyDot,
      },
    });
  return React.useMemo(() => styles(), []);
};
