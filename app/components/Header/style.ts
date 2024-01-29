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
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(5),
        color:theme.colors.primaryText,
      },
      leftImg:{
        height:heightPercentageToDP(4),
        width:widthPercentageToDP(6),
        marginRight:widthPercentageToDP(3),
      },
      rightImg:{
        height:heightPercentageToDP(4),
        width:widthPercentageToDP(6),
      },
      rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:theme.colors.background,
      },
      subRowContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
    });
  return React.useMemo(() => styles(), []);
};
