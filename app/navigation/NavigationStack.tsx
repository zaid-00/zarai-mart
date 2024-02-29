import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Address from '../screens/Address';
import Chat from '../screens/Chat';
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
import Signup from '../screens/Signup';
import VerifySignUp from '../screens/VerifySignUp';
import BottomTabNavigation from './BottomTabNavigation';
import Checkout from '../screens/Checkout';
const Stack = createStackNavigator();

function AppNavigator() {
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Stack.Navigator  >
      <Stack.Screen name="Onboard" component={Onboard} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
      <Stack.Screen name='OtpPassword' component={OtpPassword} options={{headerShown:false}}/>
      <Stack.Screen name='NewPassword' component={NewPassword} options={{headerShown:false}}/>
      <Stack.Screen name='VerifySignUp' component={VerifySignUp} options={{headerShown:false}}/>
      <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
      <Stack.Screen name='Main' component={BottomTabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='SeeAll' component={SeeAll} options={{headerShown:false}}/>
      <Stack.Screen name='Crop' component={Crop} options={{headerShown:false}}/>
      <Stack.Screen name='Review' component={Review} options={{headerShown:false}}/>
      <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}}/>
      <Stack.Screen name='Address' component={Address} options={{headerShown:false}}/>
      <Stack.Screen name='Inbox' component={Inbox} options={{headerShown:false}}/>
      <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}}/>
      <Stack.Screen name='Checkout' component={Checkout} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
