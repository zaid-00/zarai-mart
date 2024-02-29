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
      header: {
        paddingTop: Platform.OS === 'android' ? heightPercentageToDP(2) : 0,
        paddingHorizontal: widthPercentageToDP(3),
      },
      subContainer: {
        marginTop:heightPercentageToDP(3),
        paddingHorizontal: widthPercentageToDP(3),
        paddingBottom:heightPercentageToDP(12),
      },
      img: {
        height: heightPercentageToDP(5.8),
        width: widthPercentageToDP(12),
        // marginRight:widthPercentageToDP(3),
        borderRadius:widthPercentageToDP(50)
      },
      nameText: {
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(3.5),
        color: theme.colors.primaryButton
      },
      greenContainer:{
        paddingHorizontal:widthPercentageToDP(3),
        paddingVertical:heightPercentageToDP(0.6),
        borderWidth:widthPercentageToDP(0.4),
        borderRadius:widthPercentageToDP(90),
        borderColor:theme.colors.primaryButton,
        backgroundColor: 'white'
      },
      rowContainer:{
        flexDirection:'row',
        alignItems:'center',
      },
      star:{
        width:widthPercentageToDP(2.5),
        height:heightPercentageToDP(2),
        marginRight:widthPercentageToDP(1.5),
      },
      rowFlex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      reviewText: {
        marginVertical:heightPercentageToDP(1),
        fontFamily: theme.fonts.regularFont,
        fontSize: widthPercentageToDP(3.5),
        color: theme.colors.primaryText
      },
      heart:{
        width:widthPercentageToDP(5.6),
        height:heightPercentageToDP(3),
        marginRight:widthPercentageToDP(1.5),
      },
      likesText: {
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(2.9),
      },
      daysText: {
        marginLeft:widthPercentageToDP(3),
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(2.9),
        color: theme.colors.grey700
      },
      marginBottom:{
        marginBottom:heightPercentageToDP(2),
      }
    });
  return React.useMemo(() => styles(), []);
};
