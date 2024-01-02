import React from 'react';
import { StyleSheet } from 'react-native';
import DeviceInfo, { isTablet } from 'react-native-device-info';
import { useTheme } from 'react-native-paper';
import {
  widthPercentageToDP,heightPercentageToDP
} from 'react-native-responsive-screen';
export const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      dotContainer: {
        marginTop: heightPercentageToDP(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      longDot: {
        // paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(0.4),
        borderRadius: widthPercentageToDP(3),
        backgroundColor: theme.colors.primaryButton,
        marginHorizontal: widthPercentageToDP(0.3),
      },
      shortDot: {
        marginHorizontal: widthPercentageToDP(0.3),
        paddingHorizontal: widthPercentageToDP(1),
        paddingVertical: heightPercentageToDP(0.4),
        borderRadius: widthPercentageToDP(3),
        backgroundColor: theme.colors.greyDot,
      },
    });
  return React.useMemo(() => styles(), []);
};
