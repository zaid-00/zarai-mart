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
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: heightPercentageToDP(7),
      },
      contentContainer: {paddingBottom: heightPercentageToDP(10)},
      Img: {
        height: heightPercentageToDP(30),
        width: widthPercentageToDP(70),
        alignSelf: 'center',
      },
      controller: {marginVertical: heightPercentageToDP(2.9)},
      error: {
        color: 'red',
        paddingVertical: heightPercentageToDP(0.5),
        fontSize: isTablet() ? widthPercentageToDP(2) : undefined,
      },
      subContainer: {
        paddingTop: heightPercentageToDP(4),
        paddingHorizontal: widthPercentageToDP(4),
      },
      text: {
        paddingTop: heightPercentageToDP(3),
        color: theme.colors.primaryText,
        width: widthPercentageToDP(80),
        fontFamily: theme.fonts.mediumFont,
        fontSize: widthPercentageToDP(3.7),
      },
      button: {
        marginTop:heightPercentageToDP(20),
        alignSelf:'center'
      },
      icons: {
        height: heightPercentageToDP(2.1),
        width: widthPercentageToDP(4.1),
      },
    });
  return React.useMemo(() => styles(), []);
};
