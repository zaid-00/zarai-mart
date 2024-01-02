import React, {useRef, useState} from 'react';
import {View, Text, FlatList, SafeAreaView, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {useStyle} from './styles';
import images from '../../config/images';
import FastImage from 'react-native-fast-image';
import PrimaryButton from '../../components/PrimaryButton';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Indicator from '../../components/Indicator';
interface Item {
  id: string;
  image: any;
  text1: string;
  text2: string;
  text3: string;
}

const slides: Item[] = [
  {
    id: '1',
    image: images.Onboard.page1,
    text1: 'We provide high',
    text2: 'quality crops just for',
    text3: 'you',
  },
  {
    id: '2',
    image: images.Onboard.page2,
    text1: 'Your satisfaction is',
    text2: 'our number one',
    text3: 'priority',
  },
  {
    id: '3',
    image: images.Onboard.page3,
    text1: "Let's Shop Your",
    text2: ' Favorite crops with',
    text3: ' our App Now!',
  },
];

const Onboard: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Item>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const renderItem: React.FC<{item: Item}> = ({item}) => (
    <View>
      <FastImage
        source={item.image}
        resizeMode="stretch"
        style={styles.image}
      />
      <Text style={styles.heading}>{item?.text1}</Text>
      <Text style={styles.heading}>{item?.text2}</Text>
      <Text style={styles.heading}>{item?.text3}</Text>
    </View>
  );
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('Signup');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: heightPercentageToDP(79)}}>
        <FlatList
          ref={flatListRef}
          data={slides}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          renderItem={renderItem}
          scrollEventThrottle={32}
          keyExtractor={item => item.id}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
      <Indicator data={slides} currentIndex={currentIndex} scrollX={scrollX} />
      <PrimaryButton
        title={currentIndex !== 2 ? 'Next' : 'Get Started'}
        onPress={scrollTo}
        style={[
          styles.button,
          {
            width:
              currentIndex !== 2
                ? widthPercentageToDP(17)
                : widthPercentageToDP(30),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Onboard;
