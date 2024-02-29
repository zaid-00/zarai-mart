import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTheme} from 'react-native-paper';
import CartCard from '../../components/CartCard';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import AddressCard from '../../components/AddressCard';
import images from '../../config/images';
import {dummyOrderData} from '../../utils/dummyData';
import {useStyle} from './styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Checkout: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Checkout" leftIcon={images.ForgotPassword.backButton} />
        <Text style={styles.addressText}>Shipping Address</Text>
        <AddressCard
          leftIcon={images.Address.location}
          title="Apartment"
          address="21833 Clyde Gallagher, PC 4662"
          rightIcon={images.Address.edit}
          style={{marginTop: heightPercentageToDP(2)}}
        />
        <View style={styles.lineSeperator}></View>
        <Text style={styles.addressText}>Order List</Text>
        {dummyOrderData.map((item, index) => (
          <CartCard
            key={index}
            style={styles.orderCardStyle}
            imageUrl={{uri: item?.imageUrl}}
            cropName={item?.cropName}
            price={item?.price}
            quantity={item?.quantity}
            onPress={toggleModal}
          />
        ))}
        <View style={styles.lineSeperator}></View>
        
      </View>
    </ScrollView>
  );
};

export default Checkout;
