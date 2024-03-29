import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from '../screens/ForgotPassword';
import Login from '../screens/Login';
import NewPassword from '../screens/NewPassword';
import Onboard from '../screens/Onboard';
import OtpPassword from '../screens/OtpPassword';
import Signup from '../screens/Signup';
import VerifySignUp from '../screens/VerifySignUp';
const Stack = createStackNavigator();

function AppNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Onboard" component={Onboard} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
      <Stack.Screen name='OtpPassword' component={OtpPassword} options={{headerShown:false}}/>
      <Stack.Screen name='NewPassword' component={NewPassword} options={{headerShown:false}}/>
      <Stack.Screen name='VerifySignUp' component={VerifySignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
