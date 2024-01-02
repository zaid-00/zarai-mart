/**
 * React Native App
 * Everything starts from the Entry-point
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './navigation/NavigationStack';
import DefaultTheme from './theme/DefaultTheme';
const EntryPoint: React.FC = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  useEffect(() => {
    AsyncStorage.clear();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    },1000);
  }, []);
  return (
    <PaperProvider theme={DefaultTheme as any}>
      <AppNavigator />
    </PaperProvider>
  );
};


export default EntryPoint;
