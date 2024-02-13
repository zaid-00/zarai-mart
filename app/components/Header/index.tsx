import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import { useStyle } from './style';
import { Props } from './types';
const Header: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.rowContainer,props?.style]}>
      <View style={styles.subRowContainer}>
        {props?.leftIcon?<TouchableOpacity onPress={handleBack}>
          <FastImage
            source={props?.leftIcon}
            style={styles.leftImg}
            resizeMode="contain"
          />
        </TouchableOpacity>:null}
        
        <Text style={styles.nameText}>{props?.title}</Text>
      </View>
      <TouchableOpacity>
      <FastImage
            source={props?.rightIcon}
            style={styles.rightImg}
            resizeMode="contain"
          />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
