import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import images from '../../config/images';
import {useStyle} from './styles';
const Profile: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const Option = props => (
    <Pressable style={styles.rowContainer}>
      <View style={styles.row}>
        <FastImage
          source={props?.leftIcon}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.optionText,
            props?.allRed
              ? {color: '#F75555'}
              : {color: theme.colors.primaryText},
          ]}>
          {props?.title}
        </Text>
      </View>
      <FastImage
        source={props?.rightIcon}
        style={styles.icon}
        resizeMode="contain"
      />
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.infoContainer}>
          <FastImage
            source={images.Home.zaid}
            style={styles.img}
            resizeMode="stretch"
          />
          <Pressable>
            <FastImage
              source={images.Profile.pen}
              style={styles.penIcon}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={styles.nameText}>Muhammad Zaid</Text>
          <Text style={styles.numberText}>0320 8551378</Text>
        </View>
        <View style={styles.lineSeperator}></View>
        <Option
          leftIcon={images.Profile.profile}
          title="Edit Profile"
          rightIcon={images.Profile.next}
        />
        <Option
          leftIcon={images.Profile.location}
          title="Address"
          rightIcon={images.Profile.next}
        />
        <Option
          leftIcon={images.Profile.wallet}
          title="Payment"
          rightIcon={images.Profile.next}
        />
        <Option leftIcon={images.Profile.logout} allRed title="Logout" />
        <Option
          leftIcon={images.Profile.delete}
          allRed
          title="Delete Account"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
