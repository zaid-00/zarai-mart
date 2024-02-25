import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import {dummyCropData} from '../../utils/dummyData';
import {useStyle} from './styles';
const Crop: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const renderImages = ({item}) => (
    <FastImage
      resizeMode="stretch"
      source={{uri: item?.imageUrl}}
      style={styles.img}
    />
  );
  return (
    <ScrollView style={styles.container}>
      <View style={{height: heightPercentageToDP(52)}}>
        <FlatList
          data={dummyCropData}
          keyExtractor={item => item.id}
          renderItem={renderImages}
          horizontal
          pagingEnabled
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 40,
          }}
        />
      </View>
      <View style={styles.dotContainer}>
        {dummyCropData.map((_, index) => (
          <View
            key={index}
            style={
              index == currentIndex ? styles.longDot : styles.shortDot
            }></View>
        ))}
      </View>
      <View style={styles.subContainer}>
        <View style={styles.rowFlex}>
          <Text style={styles.nameText}>Potato</Text>
          <FastImage
            resizeMode="stretch"
            source={images.Crop.heart}
            style={styles.icon}
          />
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.greenContainer}>
            <Text style={styles.soldText}>3,284 Sold</Text>
          </View>
          <FastImage
            source={images.Home.star}
            style={styles.star}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Review')}>
            <Text style={styles.reviewText}>4.6 (5,389 reviews)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sellerContainer}>
          <View style={styles.row}>
            <FastImage
              source={images.Home.zaid}
              style={styles.sellerImg}
              resizeMode="contain"
            />
            <Text style={styles.headingText}>Zaid</Text>
          </View>
          <TouchableOpacity style={styles.messageContainer} onPress={()=>{navigation.navigate("Chat")}}>
            <Text style={styles.messageText}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineSeparator}></View>
        <Text style={styles.headingText}>Description</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.headingText}>Quantity</Text>
          <View style={styles.greyContainer}>
            <Text style={styles.quantityText}>50 Kg</Text>
          </View>
        </View>
        <View style={styles.lineSeparator}></View>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.priceHeading}>Minimum Price</Text>
            <Text style={styles.priceText}>Rs 999/Kg</Text>
          </View>
          <PrimaryButton
            style={styles.button}
            title="Place Bid"
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Crop;
