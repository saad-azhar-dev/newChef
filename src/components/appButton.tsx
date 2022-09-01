import React,{FC} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

import { medium, regular } from '../constantValues/fontsFamily';
import { lenGreen, letFerozi, white } from '../constantValues/colors';
import { appBtnInterface } from '../InterFace/headerText';
import { mediumSize, small } from '../constantValues/fontsSize';

const AppButton:FC<appBtnInterface> = (props) => {
    const { title, onPress ,btnColor } = props
    return (
        <Pressable 
        style={[styles.btnStyle]}
        onPress={onPress}>
            <LinearGradient
                start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 0.7 }}
                colors={[btnColor || lenGreen ,btnColor || letFerozi]}
                style={[styles.linearGradient, props.gradientBtnStyle]}>
                <Text style={[styles.buttonText, props.btnText]}>{title}</Text>
            </LinearGradient>
        </Pressable>
    )
}
export default AppButton

const styles = StyleSheet.create({
    linearGradient: {
        alignSelf: 'center',
        width: wp(60),
        borderRadius: 25,

    },
    buttonText: {
        fontSize:mediumSize,
        fontFamily:regular,
        textAlign: 'center',
        margin: 10,
        color:white,
        backgroundColor: 'transparent',
    },
    btnStyle:{
        width: wp(40),
        alignSelf: 'center',
    }
})