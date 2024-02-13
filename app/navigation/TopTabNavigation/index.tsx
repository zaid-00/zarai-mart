import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import ActiveOrders from '../../screens/ActiveOrders';
import CompletedOrders from '../../screens/CompletedOrders';
import PendingOrders from '../../screens/PendingOrders';
import { useStyle } from './styles';
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

  return (
      <Tab.Navigator
        screenOptions={tabBarOptions}
        >
        <Tab.Screen name="Active" component={ActiveOrders} />
        <Tab.Screen name="Pending" component={PendingOrders} />
        <Tab.Screen name="Completed" component={CompletedOrders} />
      </Tab.Navigator>
  );
};

export default TopTabNavigation;
