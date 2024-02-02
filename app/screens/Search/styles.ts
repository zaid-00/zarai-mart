import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
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
      subContainer:{
        paddingHorizontal:widthPercentageToDP(3),
      },
      notFoundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:heightPercentageToDP(16)
      },
      noFoundImg: {
        width: widthPercentageToDP(60),
        height: heightPercentageToDP(27),
      },
      notFoundText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryText,
        fontSize: widthPercentageToDP(6),
        marginTop: heightPercentageToDP(3),
        marginBottom: heightPercentageToDP(1),
      },
      notFoundDescription: {
        fontFamily: theme.fonts.regularFont,
        color: theme.colors.primaryText,
        fontSize: widthPercentageToDP(4),
        textAlign: 'center',
        width: widthPercentageToDP(75),
      },
      resultText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryText,
        fontSize: widthPercentageToDP(4.5),
      },
      queryText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryButton,
        fontSize: widthPercentageToDP(4.5),
      },
      rowContainer: {
        marginTop:heightPercentageToDP(2),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      resultTextContainer: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      itemText: {
        fontFamily: theme.fonts.boldFont,
        color: theme.colors.primaryButton,
        fontSize: widthPercentageToDP(3.8),
      },
    });
  return React.useMemo(() => styles(), []);
};
