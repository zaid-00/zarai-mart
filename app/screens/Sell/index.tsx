import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {launchImageLibrary} from 'react-native-image-picker';
import {useTheme} from 'react-native-paper';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import InputBoxWithIcon from '../../components/InputBoxWithIcon';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import {useStyle} from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import {unitsData, cropCategories} from '../../utils/dummyData';
const Sell: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const [fullName, setFullName] = useState('');
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const {control, handleSubmit, formState, watch, setValue} = useForm();
  const [unitValue, setUitValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [imageURIs, setImageURIs] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const handleImagePick = async key => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});
      if (!response.didCancel) {
        if (response.assets && response.assets.length > 0) {
          setImageURIs(prevURIs => ({
            ...prevURIs,
            [key]: response.assets[0].uri,
          }));
        }
      }
    } catch (error) {
      console.error('ImagePicker Error: ', error);
    }
  };
  const handleSelectImage = () => {
    let firstNullKey = null;
    for (const key in imageURIs) {
      if (imageURIs[key] === null) {
        firstNullKey = key;
        break;
      }
    }
    if (firstNullKey !== null) {
      handleImagePick(firstNullKey);
    } else {
      // Handle case when all images are selected
    }
  };
  const handleRemoveImage = key => {
    setImageURIs(prevURIs => ({
      ...prevURIs,
      [key]: null,
    }));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Sell Product" leftIcon={images.Order.leave} />
        <View style={styles.inputContainer}>
          <Pressable style={styles.imgContainer} onPress={handleSelectImage}>
            <FastImage
              source={images.Sell.image}
              style={styles.addImg}
              resizeMode="stretch"
            />
            <Text style={styles.imgTxt}>Upload Image</Text>
          </Pressable>
          <View style={styles.row}>
            {imageURIs['image1'] ? (
              <View style={styles.selectedImgContainer}>
                <FastImage
                  source={{uri: imageURIs['image1']}}
                  resizeMode="stretch"
                  style={styles.selectedImg}
                />
                <Pressable onPress={() => handleRemoveImage('image1')}>
                  <FastImage
                    source={images.Sell.remove}
                    style={styles.removeImg}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            ) : (
              <View style={styles.subImgContainer}>
                <FastImage
                  source={images.Sell.image}
                  style={styles.imgPlaceholder}
                  resizeMode="stretch"
                />
              </View>
            )}
            {imageURIs['image2'] ? (
              <View style={styles.selectedImgContainer}>
                <FastImage
                  source={{uri: imageURIs['image2']}}
                  resizeMode="stretch"
                  style={styles.selectedImg}
                />
                <Pressable onPress={() => handleRemoveImage('image2')}>
                  <FastImage
                    source={images.Sell.remove}
                    style={styles.removeImg}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            ) : (
              <View style={styles.subImgContainer}>
                <FastImage
                  source={images.Sell.image}
                  style={styles.imgPlaceholder}
                  resizeMode="stretch"
                />
              </View>
            )}
            {imageURIs['image3'] ? (
              <View style={styles.selectedImgContainer}>
                <FastImage
                  source={{uri: imageURIs['image3']}}
                  resizeMode="stretch"
                  style={styles.selectedImg}
                />
                <Pressable onPress={() => handleRemoveImage('image3')}>
                  <FastImage
                    source={images.Sell.remove}
                    style={styles.removeImg}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            ) : (
              <View style={styles.subImgContainer}>
                <FastImage
                  source={images.Sell.image}
                  style={styles.imgPlaceholder}
                  resizeMode="stretch"
                />
              </View>
            )}
            {imageURIs['image4'] ? (
              <View style={styles.selectedImgContainer}>
                <FastImage
                  source={{uri: imageURIs['image4']}}
                  resizeMode="stretch"
                  style={styles.selectedImg}
                />
                <Pressable onPress={() => handleRemoveImage('image4')}>
                  <FastImage
                    source={images.Sell.remove}
                    style={styles.removeImg}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            ) : (
              <View style={styles.subImgContainer}>
                <FastImage
                  source={images.Sell.image}
                  style={styles.imgPlaceholder}
                  resizeMode="stretch"
                />
              </View>
            )}
          </View>
          <View style={styles.controller}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <InputBoxWithIcon
                  onChangeText={onChange}
                  inputStyle={styles.inputStyle}
                  style={{width: widthPercentageToDP(94)}}
                  numberOfCharacter={30}
                  value={value}
                  placeholder="Title..."
                />
              )}
              name="title"
            />

            {formState.errors.title && (
              <Text
                style={[
                  styles.error,
                  {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
                ]}>
                Title is required
              </Text>
            )}
          </View>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={unitsData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Unit' : '...'}
            searchPlaceholder="Search..."
            containerStyle={styles.unitContainerStyle}
            value={unitValue}
            onChange={item => {
              setUitValue(item.value);
            }}
          />
          <View style={styles.controller}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <InputBoxWithIcon
                  onChangeText={onChange}
                  inputStyle={styles.inputStyle}
                  style={{width: widthPercentageToDP(94)}}
                  numberOfCharacter={7}
                  keyboardType="dialpad"
                  value={value}
                  placeholder={'Price/' + unitValue}
                />
              )}
              name="price"
            />

            {formState.errors.price && (
              <Text
                style={[
                  styles.error,
                  {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
                ]}>
                Price is required
              </Text>
            )}
          </View>
          <View style={styles.controller}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <InputBoxWithIcon
                  onChangeText={onChange}
                  inputStyle={styles.inputStyle}
                  numberOfCharacter={7}
                  keyboardType="dialpad"
                  value={value}
                  placeholder="Quantity..."
                />
              )}
              name="quantity"
            />

            {formState.errors.quantity && (
              <Text
                style={[
                  styles.error,
                  {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
                ]}>
                Quantity is required
              </Text>
            )}
          </View>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cropCategories}
            search
            containerStyle={styles.containerStyle}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Category' : '...'}
            searchPlaceholder="Search..."
            value={categoryValue}
            onChange={item => {
              setCategoryValue(item.value);
            }}
          />
          <View style={styles.controller}>
            <Controller
              control={control}
              rules={{
                required: 'Description is required',
                minLength: {
                  value: 20,
                  message: 'Description must be 20 characters',
                },
              }}
              render={({field: {onChange, value}}) => (
                <InputBoxWithIcon
                  onChangeText={onChange}
                  numberOfCharacter={11}
                  value={value}
                  style={{width: widthPercentageToDP(94)}}
                  inputStyle={styles.inputStyle}
                  placeholder="Description..."
                />
              )}
              name="description"
            />
            {formState.errors.description && (
              <Text
                style={[
                  styles.error,
                  {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
                ]}>
                {formState.errors.description.type === 'required'
                  ? 'Description is required'
                  : 'Description must be 11 characters'}
              </Text>
            )}
          </View>
        </View>
        <PrimaryButton
          title="Post Product"
          style={styles.button}
          disabledWhileAnimating
          onPress={handleSubmit(() => {})}
          animating={isLoading}
        />
      </View>
    </ScrollView>
  );
};

export default Sell;
