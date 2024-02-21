import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import images from '../../config/images';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import TopTabNavigation from '../TopTabNavigation';
import { useStyle } from './styles';
import Inbox from '../../screens/Inbox';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const theme = useTheme();
  const style = useStyle();

  const CustomTabLabel = ({focused, label, color}) => (
    <Text
      style={{
        fontFamily: focused ? theme.fonts.boldFont : theme.fonts.mediumFont,
        color: color,
        fontSize: widthPercentageToDP(3),
      }}>
      {label}
    </Text>
  );

  const screenOptions = {
    tabBarIconStyle: style.tabbarIcon,
    tabBarActiveTintColor: theme.colors.primaryButton,
    tabBarStyle: style.tabbar,
    tabBarInactiveTintColor: theme.colors.placeholderText,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <CustomTabLabel focused={focused} label="Home" color={color} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FastImage
              source={
                focused
                  ? images.BottomBar.focusedHome
                  : images.BottomBar.unfocusedHome
              }
              tintColor={color}
              style={{width: size, height: size}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Inbox}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <CustomTabLabel focused={focused} label="Messages" color={color} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FastImage
              source={
                focused
                  ? images.BottomBar.focusedMessage
                  : images.BottomBar.unfocusedMessage
              }
              tintColor={color}
              style={{width: size, height: size}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={TopTabNavigation}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <CustomTabLabel focused={focused} label="Orders" color={color} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FastImage
              source={
                focused
                  ? images.BottomBar.focusedOrders
                  : images.BottomBar.unfocusedOrders
              }
              tintColor={color}
              style={{width: size, height: size}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <CustomTabLabel focused={focused} label="Profile" color={color} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FastImage
              source={
                focused
                  ? images.BottomBar.focusedProfile
                  : images.BottomBar.unfocusedProfile
              }
              tintColor={color}
              style={{width: size, height: size}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
