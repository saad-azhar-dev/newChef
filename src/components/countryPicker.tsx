import React, { FC } from 'react'
import { Platform } from 'react-native';
import { View, Text, FlatList, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Overlay } from 'react-native-elements'
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Divider } from "react-native-elements";
import { black, darkBlue, grey, lightGrey, white } from '../constantValues/colors';
import { regular } from '../constantValues/fontsFamily';
import { mediumSize, small } from '../constantValues/fontsSize';
import AppButton from './appButton';



const CountryPicker:FC<any> = (props) => {
    const { isVisible, data, loading } = props
    return (
        <Overlay
            isVisible={isVisible ? isVisible : false}
            onBackdropPress={props.onBackdropPress}
            overlayStyle={styles.overlayStyle}
            fullScreen={true}
        >

            <View style={[styles.modalView]}>
                <View style={{height: hp(83)}}>
                    <TextInput
                        placeholder={'Type here'}
                        placeholderTextColor={grey}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        secureTextEntry={props.secureTextEntry}
                        editable={props.editable}
                        multiline={props.multiline}
                        maxLength={props.maxLength}
                        keyboardType={props.keyboardType}
                        returnKeyType={props.returnKeyType}
                        ref={props.ref}
                        onSubmitEditing={props.onSubmitEditing}
                        blurOnSubmit={false}
                        style={[styles.inputField]}
                    />
                    {loading ?
                        <ActivityIndicator
                            color={darkBlue}
                            size={'small'}
                        />
                        : !loading && data?.length > 0 ?
                            <FlatList
                                data={data}
                                // keyExtractor={(item) => { item }}
                                style={{ marginTop: 10 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => props.onItemClick(item)}
                                            style={styles.itemContainer}
                                        >
                                        <Text style={styles.itemStyle} >{`${item}`}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            /> :
                            <View style={styles.noData}>
                                <Text
                                    style={
                                        [styles.itemStyle, { color: lightGrey }]}>
                                    {'Data not Found'}</Text>
                            </View>
                    }

                </View>
                <Divider color={darkBlue} />
                <View
                    style={styles.closeBtnView}>
                    <AppButton
                        title='Submit'
                        onPress={() => { }}
                        gradientBtnStyle={styles.submitBtn}
                    />
                </View>

            </View>
        </Overlay>
    )
}
export default CountryPicker

const styles = StyleSheet.create({
    overlayStyle: {
        backgroundColor: 'transparent',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 22,
        borderBottomLeftRadius: 22,
        // width:wp(100),
        alignSelf: 'center',
        paddingLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        marginBottom: Platform.OS == 'android' ? 50 : 0,
    },
    modalView: {
        backgroundColor:'red',
        width: wp(100),
        height: hp(100),
        paddingTop: Platform.OS == 'android' ? 20 : isIphoneX() ? 60 : 35,

    },

    inputField: {
        paddingVertical: Platform.OS == 'ios' ? 10 : 8,
        fontSize: small,
        marginTop: 20,
        marginHorizontal: 15,
        borderBottomColor: grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    itemStyle: {
        color: black,
        fontFamily: regular,
        fontSize: mediumSize,
        fontWeight: '600',
        marginBottom: 10,
    },
    itemContainer: {
        marginHorizontal: 20,
        // marginBottom:20,
    },
    noData: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
    },
    btnContainerStyle: {
        alignSelf: 'center',
        width: wp(30)
    },
    closeBtnView: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    submitBtn: {
        width: wp(40),
        marginTop: 20,
    },
})