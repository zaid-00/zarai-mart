import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import images from '../config/images';
import Address from '../screens/Address';
import Chat from '../screens/Chat';
import Checkout from '../screens/Checkout';
import Crop from '../screens/Crop';
import EditProfile from '../screens/EditProfile';
import ForgotPassword from '../screens/ForgotPassword';
import Inbox from '../screens/Inbox';
import Login from '../screens/Login';
import NewPassword from '../screens/NewPassword';
import Onboard from '../screens/Onboard';
import OtpPassword from '../screens/OtpPassword';
import Review from '../screens/Reviews';
import Search from '../screens/Search';
import SeeAll from '../screens/SeeAll';
import ShippingAddress from '../screens/ShippingAddress';
import Signup from '../screens/Signup';
import VerifySignUp from '../screens/VerifySignUp';
import BottomTabNavigation from './BottomTabNavigation';
import Notification from '../screens/Notification';
const Stack = createStackNavigator();
function AuthNavigator() {
  const theme = useTheme();
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
    title: route?.params?.name,
  });
  return (
    <Stack.Navigator initialRouteName="Onboard">
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  const theme = useTheme();
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
    title: route?.params?.name,
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={commonOptions}
      />
      <Stack.Screen
        name="One Time Password"
        component={OtpPassword}
        options={commonOptions}
      />
      <Stack.Screen
        name="Create New Password"
        component={NewPassword}
        options={commonOptions}
      />
      <Stack.Screen
        name="VerifySignUp"
        component={VerifySignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeeAll"
        component={SeeAll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Crop"
        component={Crop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={commonOptions}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={commonOptions}
      />
      <Stack.Screen name="Inbox" component={Inbox} options={commonOptions} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={commonOptions}
      />
      <Stack.Screen
        name="Shipping Address"
        component={ShippingAddress}
        options={commonOptions}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={commonOptions}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const isFirstRun = true;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {isFirstRun ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
