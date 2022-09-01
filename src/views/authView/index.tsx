import React, { FC, useEffect, useReducer, useRef } from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { signUplogin } from '../../constantValues/images'
import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { lightBlack, white } from '../../constantValues/colors'

const AuthView: FC<ParentProps> = ({ navigation }) => {
    return (
        <View style={styles.wraper}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>The Chef</Text>
                    <View style={styles.textView}>
                        <HeaderText text='Get your favorite food at your' />
                        <HeaderText text='desired location' />
                    </View>
                    <View style={styles.imgView}>
                        <Image
                            source={signUplogin}
                            style={styles.imgStyle}
                        />
                        <AppButton
                            title='SIGN UP'
                            onPress={() => {navigation.navigate('SignUp')}}
                            btnColor={white}
                            btnText={styles.signUpBtnText}
                            gradientBtnStyle={styles.signUpBtnStyle}
                        />
                        <AppButton
                            title='LOGIN'
                            onPress={() => {navigation.navigate('Login') }}
                            gradientBtnStyle={styles.gradientBtnStyle}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
export default AuthView