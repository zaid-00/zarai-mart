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
const Cart: React.FC = () => {
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
      editable
      onPress={toggleModal}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Cart"
        leftIcon={images.Order.leave}
        style={styles.headerStyle}
      />
      <View style={styles.subContainer}>
        <FlatList
          data={dummyOrderData}
          renderItem={renderCarts}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.priceHeading}>Total Price</Text>
          <Text style={styles.priceText}>Rs 9999</Text>
        </View>
        <PrimaryButton
          style={styles.button}
          title="Checkout"
          onPress={() => {
            navigation.navigate('Checkout');
          }}
        />
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        style={{margin: 0}}>
        <View style={styles.modalView}>
          <View style={styles.topIndicator}></View>
          <Text style={styles.reviewHeading}>Remove From Cart?</Text>
          <View style={styles.lineSeperator}></View>
          <CartCard
            imageUrl={{uri: 'https://source.unsplash.com/400x300/?tomatoes'}}
            cropName="Tomatoes"
            price={parseInt((Math.random() * 10000).toFixed(2))}
            quantity={Math.floor(Math.random() * 100) + 1}
          />
          <View style={styles.lineSeperator}></View>
          <View style={styles.rowContainer}>
            <PrimaryButton
              title="Cancel"
              textStyle={{color: theme.colors.primaryButton}}
              onPress={toggleModal}
              style={styles.cancelButton}
            />
            <PrimaryButton
              title="Yes, Remove"
              onPress={toggleModal}
              style={styles.submitButton}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Cart;
