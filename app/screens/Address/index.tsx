import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'react-native-paper';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import { useStyle } from './styles';
const Address: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const Option = props => (
    <View style={styles.rowContainer}>
      <View style={styles.row}>
        <FastImage
          source={props?.leftIcon}
          style={styles.leftIcon}
          resizeMode="contain"
        />
        <View style={styles.addressContainer}>
          <View style={styles.row}>
            <Text style={styles.titleText}>{props?.title}</Text>
            {props?.default && (
              <View style={styles.greenContainer}>
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
          </View>
          <Text style={styles.addressText}>{props?.address}</Text>
        </View>
      </View>
      <Pressable onPress={props?.onPress}>
        <FastImage
          source={props?.rightIcon}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Address" leftIcon={images.ForgotPassword.backButton} />
        <Option
          leftIcon={images.Address.location}
          title="Home"
          address="61480 Sunbrook Park, PC 5679"
          rightIcon={images.Address.edit}
          default
        />
        <Option
          leftIcon={images.Address.location}
          title="Office"
          address="6993 Meadow Valley Terra, PC 3637"
          rightIcon={images.Address.edit}
        />
        <Option
          leftIcon={images.Address.location}
          title="Apartment"
          address="21833 Clyde Gallagher, PC 4662"
          rightIcon={images.Address.edit}
        />
        <Option
          leftIcon={images.Address.location}
          title="Parent's House"
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
