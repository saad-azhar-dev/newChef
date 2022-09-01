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

const SignUp: FC<ParentProps> = ({ navigation }) => {

    const nameRef = useRef<TextInput>(null)
    const emailRef = useRef<TextInput>(null)
    const contactRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)
    const confirmPassRef = useRef<TextInput>(null)

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {  
            name:undefined,
            email: undefined,
            password: undefined,
            securePass: true,
            secureConfirmPass:false,
            contact:undefined,
            confirmPass:undefined,
        }
    )
    const {
        name,
        email, 
        contact, 
        password, 
        securePass,
        secureConfirmPass,
        confirmPass 
    } = state

    function hideShowPassword() {
        updateState({ securePass: !securePass })
    }
    function hideShowConfirmPassword() {
        updateState({ secureConfirmPass: !secureConfirmPass })
    }
    return (
        <View style={styles.wraper}>
            <View style={styles.container}>
                <BackButton onPress={() => { navigation.pop() }} />
                <KeyboardAwareScrollView>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Sign Up</Text>
                    </View>
                    <View style={styles.textView}>
                        <HeaderText
                            text='Sign up to create your account'
                            textStyle={styles.textStyle} />
                    </View>
                    <View style={styles.contentView}>
                        <InputField
                            placeholder='Name'
                            onChangeText={(text) => { updateState({ name: text }) }}
                            value={name}
                            keyboardType={'default'}
                            ref={nameRef}
                            onSubmitEditing={()=>emailRef?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <InputField
                            placeholder='Email'
                            onChangeText={(text) => { updateState({ email: text }) }}
                            value={email}
                            keyboardType={'email-address'}
                            inputContainerStyle={styles.inputContainerStyle}
                            ref={emailRef}
                            onSubmitEditing={()=>contactRef?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <InputField
                            placeholder='Contact Number'
                            onChangeText={(text) => { updateState({ contact: text }) }}
                            value={contact}
                            keyboardType={'number-pad'}
                            inputContainerStyle={styles.inputContainerStyle}
                            ref={contactRef}
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
                            inputContainerStyle={styles.inputContainerStyle}
                            ref={passwordRef}
                            onSubmitEditing={()=>confirmPassRef?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <InputField
                            placeholder='Confirm Password'
                            onChangeText={(text) => { updateState({ confirmPass: text }) }}
                            value={confirmPass}
                            keyboardType={'default'}
                            secureTextEntry={secureConfirmPass}
                            hideShowPassword={hideShowConfirmPassword}
                            passIconName={secureConfirmPass ? 'eye-with-line' : 'eye'}
                            passIconType={'entypo'}
                            inputContainerStyle={styles.inputContainerStyle}
                            ref={confirmPassRef}
                            returnKeyType={'done'}
                            // onSubmitEditing={()=>?.current?.focus()}
                            blurOnSubmit={false}
                        />
                        <AppButton
                            title='SIGNUP'
                            onPress={() => {}}
                            gradientBtnStyle={styles.gradientBtnStyle}
                        />
                        <View style={styles.sendAgainView}>
                            <Text style={styles.textStyle}>Already have an account?</Text>
                            <Pressable onPress={() => {navigation.navigate('Login')}}>
                                <Text style={styles.sendText}>Log in</Text>
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
export default SignUp

