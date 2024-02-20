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
      subContainer:{
        paddingTop:heightPercentageToDP(2),
        paddingHorizontal:widthPercentageToDP(4),
      },
      controller: {marginTop: heightPercentageToDP(3.5)},
      error: {
        color: 'red',
        paddingVertical: heightPercentageToDP(0.5),
        fontSize: isTablet() ? widthPercentageToDP(2) : undefined,
      },
      inputStyle:{
        paddingVertical: heightPercentageToDP(1.5),
        width: widthPercentageToDP(83),
      },
      button:{ alignSelf: 'center',position:'absolute',bottom:heightPercentageToDP(3)},
    });
  return React.useMemo(() => styles(), []);
};
