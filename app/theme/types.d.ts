import 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      primaryButton: string;
      background: string;
      primaryText: string;
      placeholderText: string;
      inactiveButton: string;
      grey700: string;
      textViewBackground:string;
      borderColor:string;
      greyDot:string
    }

    interface ThemeFonts {
      regularFont: string;
      mediumFont: string;
      semiBoldFont: string;
      boldFont: string;
    }

    interface Theme {
      myOwnProperty: boolean;
      colors:ThemeColors;
      fonts:ThemeFonts;
    }
  }
}
