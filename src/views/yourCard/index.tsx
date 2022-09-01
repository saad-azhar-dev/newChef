import React, { FC, useReducer, useRef } from 'react'
import { View, Image, Pressable, Text, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Modal from "react-native-modal";
import { MaskedTextInput } from "react-native-mask-text";


import { ParentProps } from '../../InterFace/ParentFunction'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import AppButton from '../../components/appButton'
import { paymentBGC } from '../../constantValues/images';
import { white } from '../../constantValues/colors';
import styles from './styles'
import _Card from '../../components/card';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import InputField from '../../components/inputField'

const YourCards: FC<ParentProps> = ({ navigation }) => {

    const nameRef = useRef<TextInput>(null)
    const cardRef = useRef<TextInput>(null)

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            viaCard: true,
            name: '',
            cardNum: '',
            isVisible:false,
        }
    )
    const { isVisible, name, cardNum } = state

    function cashOnDelivery() {
        updateState({
            viaCard: false,
            ondelivery: true

        })
    }
    function payViaCard() {
        updateState({
            viaCard: true,
            ondelivery: false
        })
    }

    function paymentModal() {
        return (
            <Modal
                isVisible={isVisible}
                avoidKeyboard={true}
                useNativeDriver={true}
                onBackButtonPress={() => updateState({ isVisible: false })}
                onBackdropPress={() => updateState({ isVisible: false })}
            >

                <View style={styles.modalinnerView}>
                    <Image
                        source={paymentBGC}
                        style={styles.blueBGImg}
                    />
                    <View style={styles.middleText}>
                        <Text style={styles.largeText}>Add New Card</Text>
                    </View>
                    <View style={styles.modalConten}>
                        <Text style={styles.mediumText}>Please enter your Card Details</Text>
                        <InputField
                            placeholder='Card holder name'
                            onChangeText={(text) => { updateState({ name: text }) }}
                            value={name}
                            keyboardType={'default'}
                            ref={nameRef}
                            inputContainerStyle={{ ...styles.inputContainerStyle, marginTop: '6%' }}
                            onSubmitEditing={() => cardRef?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <InputField
                            placeholder='Number of card'
                            onChangeText={(text) => { updateState({ name: text }) }}
                            value={cardNum}
                            keyboardType={'default'}
                            ref={cardRef}
                            inputContainerStyle={{ ...styles.inputContainerStyle }}
                            blurOnSubmit={false}
                        />
                        <Text style={styles.validText}>VALID THRU</Text>
                        <View style={styles.maskedView}>
                            <MaskedTextInput
                                mask={'12'}
                                onChangeText={(text, rawText) => {
                                    console.log(text);
                                    console.log(rawText);
                                }}
                                placeholder='MM'
                                style={styles.maskedInput}
                            />
                            <MaskedTextInput
                                mask={'12'}
                                onChangeText={(text, rawText) => {
                                    console.log(text);
                                    console.log(rawText);
                                }}
                                placeholder='YY'
                                style={styles.maskedInput}
                            />

                            <MaskedTextInput
                                mask={'123'}
                                onChangeText={(text, rawText) => {
                                    console.log(text);
                                    console.log(rawText);
                                }}
                                placeholder='CVV'
                                style={styles.maskedInput}
                            />
                        </View>
                    </View>
                  
                    <AppButton
                        title='Save'
                        onPress={() => updateState({ isVisible: !isVisible })}
                        gradientBtnStyle={styles.gradientBtnCheckOut}
                    />
                 
                </View>


            </Modal>
        )
    }



    return (
        <View style={styles.wraper}>
            <AppHeader
                leftPress={() => navigation.pop()}
                iconType={'materialIcons'}
                iconName='keyboard-backspace'
                title='Your Cards' />
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <_Card />
                    <AppButton
                        title='Pay'
                        btnColor={white}
                        onPress={()=>{navigation.navigate('OrderPlaced')}}
                        btnText={styles.signUpBtnText}
                        gradientBtnStyle={styles.signUpBtnStyle}
                    />
                </KeyboardAwareScrollView>

            </View>
            <Pressable
                onPress={() => updateState({ isVisible: !isVisible })}
                style={styles.bottomBtn}>
                <View style={styles.floatBtn}>
                    <Icon
                        name='plus'
                        type='antdesign'
                        iconStyle={styles.iconStyle}
                    />
                </View>
            </Pressable>
            {paymentModal()}

        </View>
    )
}

export default YourCards