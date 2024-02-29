import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTheme} from 'react-native-paper';
import CartCard from '../../components/CartCard';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import {dummyOrderData} from '../../utils/dummyData';
import {useStyle} from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const Checkout: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderCarts = ({item}) => (
    <CartCard
      style={styles.orderCardStyle}
      imageUrl={{uri: item?.imageUrl}}
      cropName={item?.cropName}
      price={item?.price}
      quantity={item?.quantity}
      onPress={toggleModal}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Checkout" leftIcon={images.ForgotPassword.backButton} />
        <View style={{paddingBottom:heightPercentageToDP(10)}}>
        <FlatList
          data={dummyOrderData}
          renderItem={renderCarts}
          showsVerticalScrollIndicator={false}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
