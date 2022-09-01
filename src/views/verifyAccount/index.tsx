import React, { FC, useReducer, useRef } from 'react'
import { View, Text, Pressable, } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { grey, lightBlue } from '../../constantValues/colors'
import BackButton from '../../components/backButton'
import OTPTextInput from 'react-native-otp-textinput'
import { stateInterface, } from '../../InterFace/headerText'


const VerifyAccount: FC<ParentProps> = ({ navigation }) => {

    const otpInput = useRef()

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            email: undefined,
            code: undefined
        }
    )
    const { otp } = state

    return (
        <View style={styles.wraper}>
            <View style={styles.container}>
                <BackButton onPress={() => { navigation.pop() }} />
                <KeyboardAwareScrollView>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Verify Code</Text>
                    </View>
                    <View style={styles.textView}>
                        <HeaderText
                            text='Please check your email &'
                            textStyle={styles.textStyle} />
                        <HeaderText
                            textStyle={styles.textStyle}
                            text='enter the verification code we' />
                        <HeaderText
                            textStyle={styles.textStyle}
                            text='just sent you' />
                    </View>
                    <OTPTextInput
                        ref={otpInput}
                        tintColor={lightBlue}
                        offTintColor={grey}
                        textInputStyle={styles.textInputStyle}
                        containerStyle={{ fontSize: 20 }}
                        inputCount={4}
                        handleTextChange={(otp: string) => { updateState({ code: otp }) }}
                    />
                    <View style={styles.sendAgainView}>
                        <Text style={styles.textStyle}>Haven't received a code?</Text>
                        <Pressable onPress={() => { }}>
                            <Text style={styles.sendText}>Send Again</Text>
                        </Pressable>
                    </View>

                    <AppButton
                        title='CONTINUE'
                        onPress={() => {navigation.navigate('OrderPlaced')}}
                        gradientBtnStyle={styles.gradientBtnStyle}
                    />
                </KeyboardAwareScrollView>
            </View>

        </View>
    )
}
export default VerifyAccount