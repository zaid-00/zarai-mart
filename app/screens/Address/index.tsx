import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import { useStyle } from './styles';
import AddressCard from '../../components/AddressCard';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const Address: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Address" leftIcon={images.ForgotPassword.backButton} />
        <AddressCard
          leftIcon={images.Address.location}
          title="Home"
          style={{marginTop: heightPercentageToDP(3)}}
          address="61480 Sunbrook Park, PC 5679"
          rightIcon={images.Address.edit}
          default
        />
        <AddressCard
          leftIcon={images.Address.location}
          title="Office"
          style={{marginTop: heightPercentageToDP(3)}}
          address="6993 Meadow Valley Terra, PC 3637"
          rightIcon={images.Address.edit}
        />
        <AddressCard
          leftIcon={images.Address.location}
          style={{marginTop: heightPercentageToDP(3)}}
          title="Apartment"
          address="21833 Clyde Gallagher, PC 4662"
          rightIcon={images.Address.edit}
        />
        <AddressCard
          leftIcon={images.Address.location}
          title="Parent's House"
          style={{marginTop: heightPercentageToDP(3)}}
          address="61480 Sunbrook Park, PC 5679"
          rightIcon={images.Address.edit}
        />
      </View>
      <PrimaryButton
        title="Add New Address"
        style={styles.button}
        disabledWhileAnimating
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default Address;
