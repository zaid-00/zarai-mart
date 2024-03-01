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
      button: {
        bottom:heightPercentageToDP(3),
        position:'absolute',
        alignSelf: 'center',
      },
    });
  return React.useMemo(() => styles(), []);
};
