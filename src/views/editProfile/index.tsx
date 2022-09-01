import React, { FC, useReducer, useRef } from 'react'
import { View, Text, Pressable, Image, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {ImagePickerOptions, launchImageLibrary } from "react-native-image-picker"

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { Icon } from 'react-native-elements'
import { imagePickerResInterface, stateInterface, } from '../../InterFace/headerText'
import { editprofile, mycards, myorders, topay, toreceive, toship } from '../../constantValues/images'
import { darkBlue } from '../../constantValues/colors'
import AppHeader from '../../components/appHeader'
import { options } from '../../constantValues/constants'
import InputField from '../../components/inputField'
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import AppButton from '../../components/appButton'


const EditProfile: FC<ParentProps> = ({ navigation }) => {
    
    const nameRef = useRef<TextInput>(null)
    const emailRef = useRef<TextInput>(null)
    const contactRef = useRef<TextInput>(null)

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            filePath: '',
            name: undefined,
            email: undefined,
            contact: undefined,
        }
    )
    const { filePath, name, email, contact } = state

    function opneImagePicker() {
 
        launchImageLibrary(options, (response:imagePickerResInterface) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                updateState({
                    filePath: response.assets[0],
                });
            }
        });
    }

    function UserImgUI() {
        return (
            <View style={styles.profileView}>
                <View style={styles.profileOuterView}>
                    {!filePath ?
                        <SIcon name="user" style={{ fontSize: 40, color: darkBlue }} />
                        :
                        <View style={styles.imgStyle}>
                            <Image
                                source={{ uri: filePath.uri }}
                                style={{ width: undefined, height: undefined, flex: 1 }} />
                        </View>
                    }
                </View>
                <Pressable
                    onPress={opneImagePicker}
                    style={styles.editView}>
                    <Icon
                        name={'edit'}
                        type={'entypo'}
                        iconStyle={styles.iconStyle}
                        tvParallaxProperties={undefined}
                    />
                </Pressable>
            </View>
        )
    }

    function InFoUI() {
        return (
            <View style={styles.inputView}>
                <InputField
                    placeholder='Name'
                    onChangeText={(text) => { updateState({ name: text }) }}
                    value={name}
                    keyboardType={'default'}
                    ref={nameRef}
                    onSubmitEditing={() => emailRef?.current?.focus()}
                    blurOnSubmit={false}
                />
                <InputField
                    placeholder='Email'
                    onChangeText={(text) => { updateState({ email: text }) }}
                    value={email}
                    keyboardType={'email-address'}
                    inputContainerStyle={styles.inputContainerStyle}
                    ref={emailRef}
                    onSubmitEditing={() => contactRef?.current?.focus()}
                    blurOnSubmit={false}
                />
                <InputField
                    placeholder='Contact Number'
                    onChangeText={(text) => { updateState({ contact: text }) }}
                    value={contact}
                    keyboardType={'number-pad'}
                    inputContainerStyle={styles.inputContainerStyle}
                    ref={contactRef}
                    blurOnSubmit={false}
                />
                <AppButton
                    title='SAVE CHANGES'
                    onPress={() => { }}
                    gradientBtnStyle={styles.gradientBtnStyle}
                />
            </View>
        )
    }


    return (
        <View style={styles.wraper}>
            <AppHeader 
             leftPress={()=>navigation.pop()}
             iconType={'materialIcons'}
             iconName='keyboard-backspace'
             title='Edit Profile' />
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    {UserImgUI()}
                    {InFoUI()}
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

export default EditProfile
