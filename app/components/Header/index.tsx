import images from '../../config/images';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Portal, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useStyle} from './style';
import {Props} from './types';
import {useIsFocused} from '@react-navigation/native';
const Header: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.rowContainer,props?.style]}>
      <View style={styles.subRowContainer}>
        <TouchableOpacity onPress={handleBack}>
          <FastImage
            source={props?.leftIcon}
            style={styles.leftImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.nameText}>{props?.title}</Text>
      </View>
      <FastImage
            source={props?.rightIcon}
            style={styles.rightImg}
            resizeMode="contain"
          />
    </View>
  );
};
export default Header;
