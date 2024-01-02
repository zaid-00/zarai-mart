import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import InputBoxWithIcon from '../../components/InputBoxWithIcon';
import PrimaryButton from '../../components/PrimaryButton';
import images from '../../config/images';
import {useStyle} from './styles';

const Signup: React.FC = () => {
  const styles = useStyle();
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const {control, handleSubmit, formState, watch, setValue} = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const updatePassword = (newPassword: string) => {
    setValue('password', newPassword);
  };
  const watchedPassword = watch('password'); // Get the current value of "password"
  const signUp = async (data?: any) => {
    console.log(data);
    navigation.navigate("VerifySignUp");
    //   Keyboard.dismiss();

    //   if (!ValidateEmail(data?.email)) {
    //     dispatch(enableSnackbar("Please input the correct email address."));
    //     return;
    //   }
    //   if (data?.password != data?.confirmPassword) {
    //     dispatch(enableSnackbar("Passwords do not match"));
    //     return;
    //   }
    //   try {
    //     setIsLoading(true);
    //     const response = await signUpUser(
    //       data?.name,
    //       data?.email,
    //       data?.password,
    //       data?.phone
    //     );

    //     if (response?.status == 200) {
    //       dispatch(onLogin(response?.data));
    //     } else {
    //       dispatch(enableSnackbar("Something went wrong. Please try again."));
    //     }
    //     navigation.navigate("Explore");

    //     dispatch(enableSnackbar("Successfully signed up."));
    //   } catch (err) {
    //     dispatch(enableSnackbar("Something went wrong. Please try again."));
    //   } finally {
    //     setIsLoading(false);
    //   }
  };
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <FastImage
        source={images.SignUp.logo}
        resizeMode="contain"
        style={styles.logo}
      />

      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.text}>Enter details to continue</Text>
      <View style={styles.controller}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputBoxWithIcon
              onChangeText={onChange}
              numberOfCharacter={30}
              value={value}
              placeholder="Name"
              renderIcon={() => (
                <FastImage
                  source={images.SignUp.user}
                  style={styles.icons}
                  resizeMode="contain"
                  tintColor={theme.colors.placeholderText}
                />
              )}
            />
          )}
          name="name"
        />

        {formState.errors.name && (
          <Text
            style={[
              styles.error,
              {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
            ]}>
            Name is required
          </Text>
        )}
      </View>

      <View style={styles.controller}>
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          }}
          render={({field: {onChange, value}}) => (
            <InputBoxWithIcon
              onChangeText={onChange}
              numberOfCharacter={30}
              value={value}
              showError={!!formState.errors.email}
              placeholder="Email"
              renderIcon={() => (
                <FastImage
                  source={images.SignUp.email}
                  style={styles.icons}
                  resizeMode="contain"
                  tintColor={theme.colors.placeholderText}
                />
              )}
            />
          )}
          name="email"
        />
        {formState.errors.email && (
          <Text
            style={[
              styles.error,
              {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
            ]}>
            {formState.errors.email.type === 'pattern'
              ? 'Invalid email address'
              : 'Email is required'}
          </Text>
        )}
      </View>

      <View style={styles.controller}>
        <Controller
          control={control}
          rules={{
            required: 'Phone is required',
            minLength: {
              value: 11,
              message: 'Phone number must be 11 characters',
            },
          }}
          render={({field: {onChange, value}}) => (
            <InputBoxWithIcon
              onChangeText={onChange}
              numberOfCharacter={11}
              value={value}
              placeholder="Phone"
              keyboardType="dialpad"
              renderIcon={() => (
                <FastImage
                  source={images.SignUp.phone}
                  style={styles.icons}
                  resizeMode="contain"
                  tintColor={theme.colors.placeholderText}
                />
              )}
            />
          )}
          name="phone"
        />

        {formState.errors.phone && (
          <Text
            style={[
              styles.error,
              {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
            ]}>
            {formState.errors.phone.type === 'required'
              ? 'Phone is required'
              : 'Phone number must be 11 characters'}
          </Text>
        )}
      </View>

      <View style={styles.controller}>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 8,
              message: 'Password must contain 8 characters',
            },
          }}
          render={({field: {onChange, value}}) => (
            <InputBoxWithIcon
              onChangeText={text => {
                onChange(text);
                updatePassword(text);
              }}
              numberOfCharacter={30}
              value={value}
              placeholder="Password"
              type="password"
              renderIcon={() => (
                <FastImage
                  source={images.SignUp.lock}
                  style={styles.icons}
                  resizeMode="contain"
                  tintColor={theme.colors.placeholderText}
                />
              )}
            />
          )}
          name="password"
        />

        {formState.errors.password && (
          <Text
            style={[
              styles.error,
              {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
            ]}>
            {formState.errors.password.type == 'required'
              ? 'Password is required'
              : 'Password must contain 8 characters'}
          </Text>
        )}
      </View>

      <View style={styles.controller}>
        <Controller
          control={control}
          rules={{
            required: 'Confirm Password is required',
            validate: value =>
              value === watchedPassword || 'Passwords do not match',
          }}
          render={({field: {onChange, value}}) => (
            <InputBoxWithIcon
              onChangeText={onChange}
              numberOfCharacter={30}
              value={value}
              placeholder="Confirm Password"
              type="password"
              renderIcon={() => (
                <FastImage
                  source={images.SignUp.lock}
                  style={styles.icons}
                  resizeMode="contain"
                  tintColor={theme.colors.placeholderText}
                />
              )}
            />
          )}
          name="confirmPassword"
        />

        {formState.errors.confirmPassword && (
          <Text
            style={[
              styles.error,
              {maxWidth: widthPercentageToDP(43), alignSelf: 'flex-end'},
            ]}>
            {formState.errors.confirmPassword.message}
          </Text>
        )}
      </View>
      <PrimaryButton
        title="Sign up"
        style={{marginTop:heightPercentageToDP(0.8)}}
        // disabled={formState.isValid?false:true}
        disabledWhileAnimating
        onPress={handleSubmit(signUp)}
        animating={isLoading}
      />
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            {
              marginVertical: heightPercentageToDP(2),
              color: theme.colors.placeholderText,
              alignSelf: 'center',
            },
          ]}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={[
              {
                fontFamily: theme.fonts.semiBoldFont,
                marginVertical: heightPercentageToDP(2),
                color: theme.colors.primaryButton,
              },
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
