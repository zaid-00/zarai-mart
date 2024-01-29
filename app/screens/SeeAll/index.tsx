import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import images from '../../config/images';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CropCard from '../../components/CropCard';
import CropFilter from '../../components/CropFilter';
import {dummyCropData, vegetableData} from '../../utils/dummyData';
import {useStyle} from './styles';
import Header from '../../components/Header';
const SeeAll: React.FC = ({route}) => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
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
  const renderFilters = ({item}) => (
    <CropFilter
      name={item?.name}
      style={{marginRight: widthPercentageToDP(2)}}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={images.ForgotPassword.backButton}
        title={route?.params?.title}
        style={{
          paddingHorizontal: widthPercentageToDP(4),
          paddingTop: heightPercentageToDP(2),
        }}
        rightIcon={images.SeeAll.search}
      />
      <View style={styles.subContainer}>
        <View style={{marginBottom: heightPercentageToDP(2)}}>
          <FlatList
            data={vegetableData}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderFilters}
          />
        </View>
        <FlatList
          data={dummyCropData}
          keyExtractor={item => item.id}
          renderItem={renderMostPopularCrops}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeeAll;
