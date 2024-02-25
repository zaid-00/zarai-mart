import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import Header from '../../components/Header';
import { messages } from '../../utils/dummyData';
import { useStyle } from './styles';
import images from '../../config/images';
const Chat: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Zaid" leftIcon={images.ForgotPassword.backButton} />
        
      </View>
    </SafeAreaView>
  );
};

export default Chat;
