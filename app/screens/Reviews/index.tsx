import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import images from '../../config/images';
import {dummyReviews, reviewFilter} from '../../utils/dummyData';
import {useStyle} from './styles';
const Review: React.FC = ({route}) => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(-1);
  const handleSelectFilter = (index: number) => {
    setSelectedFilterIndex(index === selectedFilterIndex ? -1 : index);
  };
  const renderReviews = ({item}) => (
    <View style={styles.marginBottom}>
      <View style={styles.rowFlex}>
        <FastImage
          source={images.Home.zaid}
          style={styles.img}
          resizeMode="contain"
        />
        <View style={styles.greenContainer}>
          <View style={styles.rowContainer}>
            <FastImage
              style={styles.star}
              resizeMode="contain"
              source={images.Review.greenStar}
            />
            <Text style={styles.nameText}>{item?.rating}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.reviewText}>{item?.review}</Text>
        <Text style={styles.daysText}>{item?.postedDate}</Text>
    </View>
  );
  const renderFilters = ({item, index}) => (
    <Filter
      name={item?.rating}
      style={{marginRight: widthPercentageToDP(2)}}
      reviewFilter={true}
      isSelected={index === selectedFilterIndex}
      onPress={() => handleSelectFilter(index)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={images.ForgotPassword.backButton}
        title="4.6 (5,389 reviews)"
        style={styles.header}
      />
      <View style={styles.subContainer}>
        <View style={{marginBottom: heightPercentageToDP(2)}}>
          <FlatList
            data={reviewFilter}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderFilters}
          />
        </View>
        <FlatList
          data={dummyReviews}
          renderItem={renderReviews}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Review;
