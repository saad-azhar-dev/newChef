import React, { MutableRefObject } from 'react'
import {
    StyleProp,
    ViewStyle ,
    TextStyle,
    ImageStyle,
    ImageURISource,
    TextInput,
    TextInputProps,
     } from 'react-native'

export interface headerInterface {
    text:string;
    textStyle ?: StyleProp<TextStyle>
}

export interface appBtnInterface{
    title:string;
    onPress:()=>void;
    enabled ?:boolean;
    gradientBtnStyle ? : StyleProp<ViewStyle>
    btnText ? : StyleProp<TextStyle>
    btnColor ? : string
}
export interface backBtnInterface{
    Icon?:string;
    title?:string;
    onPress:()=>void;
    enabled ?:boolean;
}

export interface inputIf {
    iconName?: string;
    iconType?: string;
    passIconName?: any;
    passIconType?: string;
    hideShowPassword?: () => void;
    image?: ImageURISource;

    //// input props
    secureTextEntry?: boolean;
    editable?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
    placeholder?: string;
    placeholderTextColor?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void
    value?: string;
    returnKeyType ?:'done' | 'go' | 'next' | 'search' | 'send';
    multiline?: boolean;
    numberOfLines?: number;
    textAlignVertical ?:'auto' | 'top' | 'bottom' | 'center' | undefined;
    blurOnSubmit?: boolean;
    ref?: React.Ref<TextInput>
    // optional Style  passed as props
    inputContainerStyle?: StyleProp<ViewStyle>;
    InputStyle?: StyleProp<ViewStyle>

}

export interface Styles {
    wraper: ViewStyle;
    icon: TextStyle;
    imageStyle: ImageStyle;
    passIcon: TextStyle;
    Input: ViewStyle;
}

export interface stateInterface{
    text:string,
}

export interface appHeaderInterface {
    title ?: string;
    leftPress?: () => void;
    iconName ? : string,
    iconType ? : string,
    rightIconName?:string,
    rightIconType?:string
    rightPress?:()=>void
}

export interface imagePickerResInterface {
     didCancel: boolean;
    error: string; 
    uri: string; 
    assets: any[]  // if check in imagePicker package. it is taking mixed array of sring and num 
}

export interface orderCompInterface{
    name ? : string;
    price ? :string;
    date ?:string,
    status ?: string,
    onPress?:()=>void
}
export interface cartInterface{
    name ? : string;
    price ? :string;
    increment?:()=>void
    decrement?:()=>void

}
export interface flatlistRenderItem{
    id:string,
    type:string,
    name:string,
    
}
export interface messageInterface {
    item : flatlistRenderItem
    index ? : number,
}

export interface cardInterface {
    title?:string;
    type?:string;
    cardnum?:string;
    holderName?:string;
    cvv?:string;
    validity?:string;
    onPress ?:()=>void;
    enabled ?:boolean;
    gradientBtnStyle ? : StyleProp<ViewStyle>
    btnText ? : StyleProp<TextStyle>
    btnColor ? : string
}

