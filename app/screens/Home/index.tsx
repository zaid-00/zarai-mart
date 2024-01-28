import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import dummyCropData from '../../utils/dummyData';
import {ScrollView} from 'react-native-gesture-handler';
const Home: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const renderSpecialCrops = ({item}) => (
    <CropCard
      style={{marginRight: widthPercentageToDP(5)}}
      image={{uri: item?.imageUrl}}
      name={item?.name}
      rating={item?.rating}
      noOfSold={item?.noOfSold}
      price={item?.price}
      isSpecialOffer={true}
      onPress={() => console.log(item?.name + ' Card Pressed')}
    />
  );
  const renderMostPopularCrops = ({item}) => (
    <CropCard
      style={{marginRight: widthPercentageToDP(5)}}
      image={{uri: item?.imageUrl}}
      name={item?.name}
      rating={item?.rating}
      noOfSold={item?.noOfSold}
      price={item?.price}
      onPress={() => console.log(item?.name + ' Card Pressed')}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.rowFlex}>
          <View style={styles.subRowFlex}>
            <TouchableOpacity>
            <FastImage
              source={images.Home.arsal}
              style={styles.img}
              resizeMode="contain"
            />
            </TouchableOpacity>
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
          styles={{marginBottom: heightPercentageToDP(2)}}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={[
              styles.subRowFlex,
              {marginBottom: heightPercentageToDP(2)},
            ]}>
            <Text style={styles.nameText}>Special Offers</Text>
            <TouchableOpacity>
              <Text style={styles.greenText}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dummyCropData}
            keyExtractor={item => item.id}
            renderItem={renderSpecialCrops}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View
            style={[
              styles.subRowFlex,
              {marginVertical: heightPercentageToDP(2)},
            ]}>
            <Text style={styles.nameText}>Most Popular</Text>
            <TouchableOpacity>
              <Text style={styles.greenText}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dummyCropData}
            keyExtractor={item => item.id}
            renderItem={renderMostPopularCrops}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
