import images from '../../config/images';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Portal, useTheme} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useStyle} from './style';
import {Props} from './types';
import {useIsFocused} from '@react-navigation/native';
const CropFilter: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const handlePress = () => {
    setIsSelected(() => !isSelected);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={[props?.style]}>
      <View
        style={[
          isSelected
            ? {backgroundColor: theme.colors.primaryButton}
            : {backgroundColor: 'white'},
          styles.greenContainer,
        ]}>
        <Text
          style={[
            isSelected ? {color: 'white'} : {color: theme.colors.primaryButton},
            styles.nameText,
          ]}>
          {props?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CropFilter;
