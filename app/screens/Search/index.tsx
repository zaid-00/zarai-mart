import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import CropCard from '../../components/CropCard';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {dummyCropData} from '../../utils/dummyData';
import Searchbar from '../../components/Searchbar';
import images from '../../config/images';
import {useStyle} from './styles';
const Search: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [searchedQuery, setSearchedQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const handleChangeText = (txt: string) => {
    setShowResults(false);
    setSearchedQuery(txt);
  };
  const handleOnSubmitEditing = () => {
    if (searchedQuery.length > 0) setShowResults(true);
  };
  const renderFoundCrops = ({item}) => (
    <CropCard
      style={{marginRight: widthPercentageToDP(5)}}
      image={{uri: item?.imageUrl}}
      name={item?.name}
      rating={item?.rating}
      noOfSold={item?.noOfSold}
      price={item?.price}
      onPress={() => navigation.navigate('Crop')}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Searchbar
          onChangeText={handleChangeText}
          onSubmitEditing={handleOnSubmitEditing}
          placeholder="Search"
          placeholderColor={theme.colors.placeholderText}
          styles={{paddingVertical: heightPercentageToDP(0.3)}}
          rightIcon={() => (
            <TouchableOpacity>
              <FastImage
                source={images.Search.filter}
                style={{
                  height: heightPercentageToDP(2.2),
                  width: widthPercentageToDP(4.5),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
        {showResults ? (
          <View>
            <View style={styles.rowContainer}>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultText}>Results for{' "'}</Text>
                <Text style={styles.queryText}>{searchedQuery}</Text>
                <Text style={styles.resultText}>{'"'}</Text>
              </View>
              <Text style={styles.itemText}>0 found</Text>
            </View>
            <View style={{paddingBottom: heightPercentageToDP(33)}}>
              <FlatList
                data={dummyCropData}
                keyExtractor={item => item.id}
                renderItem={renderFoundCrops}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: heightPercentageToDP(3)}}
              />
            </View>
          </View>
        ) : null}

        {/* Logic to be implemented to show if the results are not being found */}
        {/* <View style={styles.notFoundContainer}>
          <FastImage
            source={images.Search.notFound}
            style={styles.noFoundImg}
            resizeMode="stretch"
          />
          <Text style={styles.notFoundText}>Not found</Text>
          <Text style={styles.notFoundDescription}>
            Sorry, the keyword you entered cannot be found, please check again
            or search with another keyword.
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Search;
