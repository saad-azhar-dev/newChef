import React, { FC, useReducer , useRef } from 'react'
import { View, Text, Pressable,TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import BackButton from '../../components/backButton'
import { Icon } from 'react-native-elements'
import InputField from '../../components/inputField'
import { stateInterface, } from '../../InterFace/headerText'

const Login: FC<ParentProps> = ({ navigation }) => {

    const emailRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            email: undefined,
            password: undefined,
            securePass: true,
        }
    )
    const { email, password, securePass } = state

    function hideShowPassword() {
        updateState({ securePass: !securePass })
    }
    return (
        <View style={styles.wraper}>
            <View style={styles.container}>
                <BackButton onPress={() => { navigation.pop() }} />
                <KeyboardAwareScrollView>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Log In</Text>
                    </View>
                    <View style={styles.textView}>
                        <HeaderText
                            text='Log in to your account'
                            textStyle={styles.textStyle} />
                    </View>
                    <View style={styles.contentView}>
                        <InputField
                            placeholder='Email'
                            onChangeText={(text) => { updateState({ email: text }) }}
                            value={email}
                            keyboardType={'email-address'}
                            ref={emailRef}
                            onSubmitEditing={()=>passwordRef?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <InputField
                            placeholder='Password'
                            onChangeText={(text) => { updateState({ Password: text }) }}
                            value={password}
                            keyboardType={'default'}
                            secureTextEntry={securePass}
                            hideShowPassword={hideShowPassword}
                            passIconName={securePass ? 'eye-with-line' : 'eye'}
                            passIconType={'entypo'}
                            ref={passwordRef}
                            blurOnSubmit={false}
                            returnKeyType={'done'}
                            inputContainerStyle={styles.inputContainerStyle}
                        />
                        <Pressable 
                         onPress={()=>navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPass}>Forgot Password?</Text>
                        </Pressable>
                        <AppButton
                            title='LOGIN'
                            onPress={() => {navigation.navigate('BottomTabs')}}
                            gradientBtnStyle={styles.gradientBtnStyle}
                        />
                        <View style={styles.sendAgainView}>
                            <Text style={styles.textStyle}>Do not have an account?</Text>
                            <Pressable onPress={()=>{navigation.navigate('SignUp') }}>
                                <Text style={styles.sendText}>Sign up</Text>
                            </Pressable>
                        </View>

                        <Text style={styles.ORText}>OR</Text>
                        <Text style={styles.otherMethod}>Sing in using</Text>

                        <View style={styles.socialLoginView}>
                            <View style={styles.btnBG}>
                                <Icon name={'google'} type={'fontisto'} iconStyle={styles.iconStyle} tvParallaxProperties={undefined} />
                            </View>
                            <View style={styles.btnBG}>
                                <Icon name={'facebook'} type={'fontisto'} iconStyle={styles.iconStyle} tvParallaxProperties={undefined} />
                            </View>
                            <View style={styles.btnBG}>
                                <Icon name={'apple'} type={'fontisto'} iconStyle={styles.iconStyle} tvParallaxProperties={undefined} />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    )

}
export default Login

