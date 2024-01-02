import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { useStyle } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Props } from './types';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { isTablet } from 'react-native-device-info';
const PrimaryButton: React.FC<Props> = (props) => {
  const styles = useStyle();
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.view,
        props.style,
        {
          backgroundColor:
            props?.disabled == true ||
            (props.animating == true && props.disabledWhileAnimating == true)
              ? theme.colors.inactiveButton
              : theme.colors.primaryButton,
        },
      ]}
      onPress={() => {
        if (
          props?.disabled == true ||
          (props.animating == true && props.disabledWhileAnimating == true)
        ) {
        } else props.onPress();
      }}
    >
      <View style={styles.iconContainer}>
        {props?.icon ? props.icon() : null}
        {props?.withArrow ? (
          <AntDesign
            name="right"
            size={isTablet() ? widthPercentageToDP(3) : widthPercentageToDP(5)}
            color={theme.colors.primaryText}
          />
        ) : null}
        <Text
          style={[
            styles.text,
            props.textStyle,
            {
              color: 'white',
            },
          ]}
        >
          {props.title}
        </Text>
      </View>
      {props.animating && (
        <ActivityIndicator
          animating
          style={styles.activityIndicator}
          color={'white'}
        />
      )}
    </TouchableOpacity>
  );
};
export default PrimaryButton;
