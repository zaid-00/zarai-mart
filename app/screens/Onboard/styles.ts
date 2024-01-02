import {StyleSheet} from 'react-native';
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
      slideContainer: {},
      image: {
        height: heightPercentageToDP(60),
        width: widthPercentageToDP(100),
        // alignSelf: 'center',
        marginBottom: heightPercentageToDP(2),
      },
      heading: {
        alignSelf: 'center',
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(7.7),
        paddingHorizontal: widthPercentageToDP(4),
      },
      button: {
        marginTop:heightPercentageToDP(9),
        borderRadius:widthPercentageToDP(80),
        bottom:widthPercentageToDP(10),
        alignSelf: 'center',
      },
    });
  return React.useMemo(() => styles(), []);
};
