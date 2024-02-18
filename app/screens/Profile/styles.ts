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
        paddingHorizontal:widthPercentageToDP(3),
      },
      infoContainer:{
        justifyContent:'center',
        alignItems:'center'
      },
      img:{
        width:widthPercentageToDP(26),
        height:heightPercentageToDP(12.5),
        borderRadius:widthPercentageToDP(50),
      },
      penIcon:{
        top:heightPercentageToDP(-4),
        left:widthPercentageToDP(9),
        width:widthPercentageToDP(5),
        position:'absolute',
        height:heightPercentageToDP(2.5),
      },
      lineSeperator: {
        borderWidth: widthPercentageToDP(0.13),
        borderColor: theme.colors.borderColor,
        marginTop: heightPercentageToDP(2),
      },
      nameText:{
        fontFamily:theme.fonts.boldFont,
        fontSize:widthPercentageToDP(4.8),
        color:theme.colors.primaryText,
      },
      numberText:{
        fontFamily:theme.fonts.semiBoldFont,
        fontSize:widthPercentageToDP(3.3),
        color:theme.colors.primaryText,
      },
      rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:heightPercentageToDP(2),
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
      },
      icon:{
        width:widthPercentageToDP(6),
        height:heightPercentageToDP(2.5),
      },
      optionText:{
        fontFamily:theme.fonts.semiBoldFont,
        fontSize:widthPercentageToDP(4),
        marginLeft:widthPercentageToDP(3),
      },
    });
  return React.useMemo(() => styles(), []);
};
