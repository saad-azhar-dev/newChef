import React, { FC, useEffect, useReducer, useRef } from 'react'
import { View, Text,} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { white } from '../../constantValues/colors'
import BackButton from '../../components/backButton'
import InputField from '../../components/inputField'
import { stateInterface , } from '../../InterFace/headerText'

const ForgotPassword: FC<ParentProps> = ({ navigation }) => {

    const [state, updateState] = useReducer(
        (state: stateInterface, newState:any) => ({ ...state, ...newState }),
        {
            email: undefined,
        }
    )
    const {email} = state

 return (
    <View style={styles.wraper}>
        <View style={styles.container}>
            <BackButton onPress={() => { navigation.pop() }} />
            <KeyboardAwareScrollView>
                <View style={styles.headerView}>
                    <Text style={styles.header}>Forgot your</Text>
                    <Text style={styles.header}>Password?</Text>
                </View>
                <View style={styles.textView}>
                    <HeaderText
                        text='Please enter your email address'
                        textStyle={styles.textStyle} />
                    <HeaderText
                        textStyle={styles.textStyle}
                        text='or Phone Number to get a' />
                    <HeaderText
                        textStyle={styles.textStyle}
                        text='Verification Code for your' />
                    <HeaderText
                        textStyle={styles.textStyle}
                        text='Password Reset' />
                </View>
                <View style={styles.inputView}>
                    <InputField
                        placeholder={'Email or Phone Number'}
                        onChangeText={(text) => {updateState({email:text})}}
                        value={email}
                        keyboardType={'email-address'}
                    />
                    <AppButton
                     title='SEND'
                     btnColor={white}
                     onPress={()=>{navigation.navigate('VerifyAccount')}}
                     btnText={styles.signUpBtnText}
                     gradientBtnStyle={styles.signUpBtnStyle}
                    />
                </View>
            </KeyboardAwareScrollView>

        </View>

    </View>

)
}
export default ForgotPassword