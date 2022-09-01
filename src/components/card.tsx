import React, { FC } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";

import { bold, boldItalic, ex_bold, medium, regular, semi_bold } from '../constantValues/fontsFamily';
import { black, darkBlue, grey, lenGreen, letFerozi, lightBlack, lightGrey, white } from '../constantValues/colors';
import { cardInterface } from '../InterFace/headerText';
import { ex_large, large, mediumSize, small, tiny } from '../constantValues/fontsSize';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const _Card: FC<cardInterface> = (props) => {
    const { title, onPress } = props
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 0.7 }}
                colors={[letFerozi, lenGreen]}
                style={[styles.linearGradient, props.gradientBtnStyle]}>
                <View>
                    <View style={styles.cardHeader}>
                        {/* <View style={styles.UnSelectedcircle}>
                            <Icon
                            name='check'
                            type='antdesign'
                            iconStyle={styles.unSelect}
                            />
                        </View> */}
                        <View style={styles.Selectedcircle}>
                            <Icon
                                name='check'
                                type='antdesign'
                                iconStyle={styles.Select}
                            />
                        </View>
                        <Text style={[styles.buttonText, props.btnText]}>{'VISA'}</Text>
                    </View>
                    <View style={styles.cardNum}>
                        <Text style={styles.staricStyle}>****</Text>
                        <Text style={styles.staricStyle}>****</Text>
                        <Text style={styles.staricStyle}>****</Text>
                        <Text style={styles.numberStyle}>1234</Text>
                    </View>

                    <View style={styles.cardNum}>
                       <View>
                           <Text style={styles.cardText}>CARD HOLDER</Text>
                           <Text style={styles.cardText}>ANNA WILLIAMS</Text>
                       </View>
                       <View>
                           <Text style={styles.cardText}>VALID THRU</Text>
                           <Text style={styles.cardText}>08/22</Text>
                       </View>
                       <View>
                           <Text style={styles.cardText}>CVV</Text>
                           <Text style={styles.cardText}>826</Text>
                       </View>
                    </View>

                    {/* <MaskedTextInput
                        mask="****  ****  ***** 1234"
                        onChangeText={(text, rawText) => {
                            console.log(text);
                            console.log(rawText);
                        }}
                        placeholder='**** 8****'
                        value='123'
                        style={styles.input}
                    /> */}
                    <View>

                    </View>

                </View>
            </LinearGradient>
        </Pressable>
    )
}
export default _Card

const circleDimentions = 30

const styles = StyleSheet.create({
    linearGradient: {
        alignSelf: 'center',
        width: wp(85),
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    UnSelectedcircle: {
        backgroundColor: '#EDEDED',
        width: circleDimentions,
        height: circleDimentions,
        borderRadius: circleDimentions / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Selectedcircle: {
        backgroundColor: '#50B748',
        width: circleDimentions,
        height: circleDimentions,
        borderRadius: circleDimentions / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unSelect: {
        color: lightBlack,
        fontSize: 20,
    },
    Select: {
        color: white,
        fontSize: 20,
    },

    cardNum:{
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'space-between',
    // marginHorizontal:20,
    marginTop:hp(3),
    },
    staricStyle:{
        color:white,
        fontFamily:semi_bold,
        fontSize:ex_large,
        marginTop:-2,
    },
    numberStyle:{
        color:white,
        fontFamily:semi_bold,
        fontSize:large,
    },
    cardText:{
     color:white,
     fontFamily:regular,
     fontSize:tiny,
     marginBottom:5,
    },




    input: {
        height: 40,
        margin: 12,
        // borderWidth: 1,
    },


    buttonText: {
        fontSize: large,
        fontFamily: boldItalic,
        margin: 10,
        color: white,
        backgroundColor: 'transparent',
    },
})