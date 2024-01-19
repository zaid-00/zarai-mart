import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  name?: string;
  rating?: string;
  noOfSold?: string;
  price?: string;
  style?: StyleProp<ViewStyle>;
  image?: any;
  id?: any;
  isLiked?: boolean | any;
  returnCall?: () => void;
}
