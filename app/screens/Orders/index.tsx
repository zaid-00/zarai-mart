import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';

const Orders: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{alignSelf: 'center', fontSize: 14}}>Order Screen</Text>
    </SafeAreaView>
  );
};

export default Orders;
