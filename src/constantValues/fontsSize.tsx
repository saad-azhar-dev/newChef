import { Platform } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const large = RFValue(18)
export const ex_large = RFValue(25)
export const small = RFValue(14)
export const tiny = RFValue(11)
export const big_tiny = RFValue(13)
export const mediumSize =RFValue(16)

export const statusBar = Platform.OS=='android'?
      getStatusBarHeight(): isIphoneX()?
      getStatusBarHeight() + 30 : getStatusBarHeight()+15

export const appMarginHorizontal = 20

export const headerHeigh = Platform.OS=='android'? getStatusBarHeight() :isIphoneX() ? getStatusBarHeight()+15 : getStatusBarHeight()+10
