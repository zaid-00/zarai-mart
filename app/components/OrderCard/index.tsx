import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {useStyle} from './style';
import {Props} from './types';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const OrderCard: React.FC<Props> = props => {
  const styles = useStyle();
  const theme = useTheme();

  return (
    <View
      style={[styles.view, props.style]}>
      <View style={styles.rowContainer}>
        <FastImage
          source={props?.imageUrl}
          style={styles.cropImage}
          resizeMode="stretch"
        />
        <View style={styles.txtContainer}>
          <Text style={styles.nameText}>{props?.cropName}</Text>
          <Text style={styles.qtText}>Qty = {props?.quantity}</Text>
          <View
            style={[
              props?.status === 'active'
                ? {width: widthPercentageToDP(18)}
                : props?.status === 'pending'
                ? {width: widthPercentageToDP(15)}
                : {width: widthPercentageToDP(19)},
              styles.greenContainer,
            ]}>
            <Text style={styles.statusText}>
              {props?.status === 'active'
                ? 'In delivery'
                : props?.status === 'pending'
                ? 'Pending'
                : props?.status === 'completed'
                ? 'Completed'
                : undefined}
            </Text>
          </View>
          <View style={styles.flexrow}>
            <Text style={styles.priceText}>Rs {props?.price}/kg</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{props?.status === 'active'
                ? 'Track Order'
                : props?.status === 'pending'
                ? 'Check Response'
                : props?.status === 'completed'
                ? 'Leave a review'
                : undefined}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OrderCard;
