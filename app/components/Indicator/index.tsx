import React from 'react';
import {Text, TouchableOpacity, View,useWindowDimensions,Animated} from 'react-native';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {isTablet} from 'react-native-device-info';
import {useStyle} from './style';
const Indicator = ({data, currentIndex,scrollX}) => {
  const theme = useTheme();
  const styles = useStyle();
  const {width}=useWindowDimensions();
  return (
    <View style={styles.dotContainer}>
      {data.map((item, i) => {
        const inputRange=[(i-1)*width,i*width,(i+1)*width]
        const dotWidth=scrollX.interpolate({
          inputRange,
          outputRange:[3,12,3],
          extrapolate:'clamp',
        });
        const opacity=scrollX.interpolate({
          inputRange,
          outputRange:[0.2,1,0.2],
          extrapolate:'clamp',
        });
        return (
          <Animated.View
            style={[
               styles.longDot
            ,{paddingHorizontal:dotWidth,opacity:opacity}]}
            key={i.toString()}></Animated.View>
        );
      })}
    </View>
  );
};
export default Indicator;
