import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';

const Search: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{alignSelf: 'center', fontSize: 14}}>Search Screen</Text>
    </SafeAreaView>
  );
};

export default Search;
