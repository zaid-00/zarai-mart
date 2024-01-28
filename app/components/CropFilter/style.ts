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
      nameText: {
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(4),
      },
      greenContainer:{
        paddingHorizontal:widthPercentageToDP(5),
        paddingVertical:heightPercentageToDP(0.9),
        borderWidth:widthPercentageToDP(0.5),
        borderRadius:widthPercentageToDP(90),
        borderColor:theme.colors.primaryButton,
      },
    });
  return React.useMemo(() => styles(), []);
};
