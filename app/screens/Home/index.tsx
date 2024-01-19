import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useStyle} from './styles';
import FastImage from 'react-native-fast-image';
import images from '../../config/images';
import Searchbar from '../../components/Searchbar';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CropCard from '../../components/CropCard';
const Home: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.rowFlex}>
          <View style={styles.subRowFlex}>
            <FastImage
              source={images.Home.arsal}
              style={styles.img}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.greetingText}>Good Morning 👋</Text>
              <Text style={styles.nameText}>Arsal Zahid</Text>
            </View>
          </View>
          <View style={styles.subRowFlex}>
            <TouchableOpacity>
              <FastImage
                source={images.Home.notification}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FastImage
                source={images.Home.heart}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Searchbar
          onChangeText={() => {}}
          placeholder="Search"
          placeholderColor={theme.colors.placeholderText}
          dummy
          rightIcon={() => (
            <FastImage
              source={images.Home.filter}
              style={{
                height: heightPercentageToDP(2.2),
                width: widthPercentageToDP(4.5),
              }}
              resizeMode="contain"
            />
          )}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <CropCard
          style={{marginTop: heightPercentageToDP(5)}}
          image={images.Home.crop}
          name="Beans"
          rating="4.8"
          noOfSold="4,268"
          price='370'
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
