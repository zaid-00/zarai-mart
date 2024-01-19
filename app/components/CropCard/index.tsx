import images from '../../config/images';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Portal, useTheme} from 'react-native-paper';
import {useStyle} from './style';
import {Props} from './types';
import {useIsFocused} from '@react-navigation/native';
const CropCard: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();
  const [liked, setLiked] = useState(props?.isLiked);

  // const addToFavorites = async () => {
  //   try {
  //     const response = await patchFavorites({
  //       car: props?.id,
  //     });
  //     if (response?.status == 200) {
  //       console.log('res', response?.data);
  //       setLiked(true);
  //       if (props?.returnCall) props?.returnCall();
  //     }
  //   } catch {
  //   } finally {
  //   }
  // };

  // const removeFromFavorites = async () => {
  //   console.log('re');
  //   try {
  //     const response = await deleteFavorites({
  //       car: props?.id,
  //     });
  //     console.log('res', response?.data);

  //     if (response?.status == 200) {
  //       if (!props?.fromFavoritesScreen) setLiked(false);
  //       if (props?.returnCall) props?.returnCall();
  //     }
  //   } catch {
  //   } finally {
  //   }
  // };

  return (
    <View style={[styles.view, props.style]}>
      <FastImage
        source={props?.image}
        style={styles.cropImage}
        resizeMode="stretch"
      />
      <Text style={styles.nameText}>{props?.name}</Text>
      <View style={styles.flexrow}>
        <FastImage
          source={images.Home.star}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.ratingText}>{props?.rating}</Text>
        <FastImage
          source={images.Home.separator}
          style={styles.seperatorIcon}
          resizeMode="stretch"
        />
        <View style={styles.greenContainer}>
          <Text style={styles.soldText}>{props?.noOfSold} Sold</Text>
        </View>
      </View>
      <Text style={styles.priceText}>
        Rs {props?.price}/kg
      </Text>
    </View>
  );
};
export default CropCard;
