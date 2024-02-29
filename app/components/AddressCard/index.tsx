import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {useStyle} from './style';
import {Props} from './types';
import images from '../../config/images';
const AddressCard: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.rowContainer,props?.style]}>
      <View style={styles.row}>
        <FastImage
          source={props?.leftIcon}
          style={styles.leftIcon}
          resizeMode="contain"
        />
        <View style={styles.addressContainer}>
          <View style={styles.row}>
            <Text style={styles.titleText}>{props?.title}</Text>
            {props?.default && (
              <View style={styles.greenContainer}>
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
          </View>
          <Text style={styles.addressText}>{props?.address}</Text>
        </View>
      </View>
      <Pressable onPress={props?.onPress}>
        <FastImage
          source={props?.rightIcon}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};
export default AddressCard;
