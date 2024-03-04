import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import InputBoxWithIcon from '../../components/InputBoxWithIcon';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import {useStyle} from './styles';
import FastImage from 'react-native-fast-image';
const Sell: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const [fullName, setFullName] = useState('');
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const {control, handleSubmit, formState, watch, setValue} = useForm();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Header title="Sell Product" leftIcon={images.Order.leave} />
        <View style={styles.inputContainer}>
          <Pressable style={styles.imgContainer}>
            <FastImage
              source={images.Sell.image}
              style={styles.addImg}
              resizeMode="stretch"
            />
            <Text style={styles.imgTxt}>Upload Image</Text>
          </Pressable>
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
                  placeholder="Price..."
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
                  style={{width: widthPercentageToDP(94)}}
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
          title="Update"
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
