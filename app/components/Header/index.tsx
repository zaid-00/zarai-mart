import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
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
    <View style={[styles.rowContainer, props?.style]}>
      <View style={styles.subRowContainer}>
        {props?.leftIcon ? (
          <Pressable onPress={handleBack}>
            <FastImage
              source={props?.leftIcon}
              style={styles.leftImg}
              resizeMode="contain"
            />
          </Pressable>
        ) : null}

        <Text style={styles.nameText}>{props?.title}</Text>
      </View>
      {props?.rightIcon ? (
        <Pressable>
          <FastImage
            source={props?.rightIcon}
            style={styles.rightImg}
            resizeMode="contain"
          />
        </Pressable>
      ) : null}
    </View>
  );
};
export default Header;
