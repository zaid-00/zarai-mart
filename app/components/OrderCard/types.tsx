import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  cropName?: string;
  price?: any;
  style?: StyleProp<ViewStyle>;
  image?: any;
  status?: string;
  quantity?: any;
  imageUrl?: any;
  onPress?:()=> void;
}
