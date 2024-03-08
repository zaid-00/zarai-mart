import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import images from '../../config/images';
import ActiveOrders from '../../screens/ActiveOrders';
import CompletedOrders from '../../screens/CompletedOrders';
import PendingOrders from '../../screens/PendingOrders';
import { useStyle } from './styles';
import { Pressable } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  const theme = useTheme();
  const styles = useStyle();
  const tabBarOptions = {
    tabBarLabelStyle: styles.label,
    tabBarActiveTintColor: theme.colors.primaryButton,
    tabBarInactiveTintColor: theme.colors.placeholderText,
    tabBarIndicatorStyle: styles.indicatorStyle,
    tabBarStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
  };
  const navigation = useNavigation();
  const commonOptions = ({route}) => ({
    headerShown: true,
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    headerLeft: () => (
      <Pressable
        onPress={() => navigation.goBack()}
        style={{paddingLeft: widthPercentageToDP(3)}}>
        <FastImage
          source={images.ForgotPassword.backButton}
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(6),
          }}
          resizeMode="contain"
        />
      </Pressable>
    ),
    headerTitleStyle: {
      color: theme.colors.primaryText,
      fontFamily: theme.fonts.boldFont,
      fontSize: widthPercentageToDP(5.6),
    },
    headerTransparent: false,
    title: 'My Orders',
  });
  return (
    <>
      <Header
        title="My Orders"
        leftIcon={images.Order.leave}
        style={{
          paddingHorizontal: widthPercentageToDP(3),
          paddingTop: heightPercentageToDP(1),
        }}
      />
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name="Active" component={ActiveOrders} />
        <Tab.Screen name="Pending" component={PendingOrders} />
        <Tab.Screen name="Completed" component={CompletedOrders} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabNavigation;
