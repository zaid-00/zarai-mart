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
      subContainer: {
        paddingTop: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(3),
      },
      bubbleWrapperStyle: {
        left: {
          backgroundColor: theme.colors.dullGreyBackground,
        },
        right: {
          backgroundColor: theme.colors.dullGreyBackground,
        },
      },
      timeTextStyle: {
        left: {
          color: theme.colors.dullBlack,
          fontFamily: theme.fonts.regularFont,
        },
        right: {
          color: theme.colors.dullBlack,
          fontFamily: theme.fonts.regularFont,
        },
      },
      messageText: {
        left: {
          color: theme.colors.primaryText,
          fontFamily: theme.fonts.mediumFont,
        },
        right: {
          color: theme.colors.primaryText,
          fontFamily: theme.fonts.mediumFont,
        },
      },
      chatContainer: {height: heightPercentageToDP(90.3)},
      sendButtonText: {
        color: theme.colors.primaryButton,
        fontFamily: theme.fonts.semiBoldFont,
        fontSize: widthPercentageToDP(4),
      },
      sendButton: {
        alignSelf: 'center',
      },
    });
  return React.useMemo(() => styles(), []);
};
