import React, { FC, useReducer } from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Modal from "react-native-modal";

import { ParentProps } from '../../InterFace/ParentFunction'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import ItemCard from '../../components/itemCard'
import AppButton from '../../components/appButton'
import { paymentBGC } from '../../constantValues/images';
import { darkBlue } from '../../constantValues/colors';
import styles from './styles'


const MyCard: FC<ParentProps> = ({ navigation }) => {


    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            isVisible: false,
            ondelivery: false,
            viaCard: true
        }
    )
    const { isVisible, ondelivery, viaCard } = state

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
                            <Text style={styles.largeText}>Select Payment Method</Text>
                        </View>
                        <View style={styles.modalConten}>
                            <Pressable
                                onPress={cashOnDelivery}
                                style={styles.radioBtnView}>
                                <View style={styles.radioBtnInnerView}>
                                    <View style={ondelivery ? { ...styles.outerCircle, borderColor: darkBlue } : { ...styles.outerCircle }}>
                                        <View style={ondelivery ? { ...styles.innerCircle, backgroundColor: darkBlue } : { ...styles.innerCircle }}></View>
                                    </View>
                                    <Text style={styles.textStyle}>Cash on Delivery</Text>
                                </View>
                            </Pressable>

                            <Pressable
                                onPress={payViaCard}
                                style={styles.radioBtnView}>
                                <View style={styles.radioBtnInnerView}>
                                    <View style={viaCard ? { ...styles.outerCircle, borderColor: darkBlue } : { ...styles.outerCircle }}>
                                        <View style={viaCard ? { ...styles.innerCircle, backgroundColor: darkBlue } : { ...styles.innerCircle }}></View>
                                    </View>
                                    <Text style={styles.textStyle}>Pay Using Card</Text>
                                </View>
                            </Pressable>
                        </View>
                        <AppButton
                    title='CHECKOUT'
                    onPress={() =>{ 
                        updateState({ isVisible: !isVisible })
                        setTimeout(()=>{
                         navigation.navigate('YourCards')
                        },1000)

                    }}
                    gradientBtnStyle={styles.gradientBtnCheckOut}
                />
                    </View>

               
            </Modal>
        )
    }


    return (
        <View style={styles.wraper}>
            <AppHeader
                title='My Cart' />
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <ItemCard />
                </KeyboardAwareScrollView>

            </View>
            <View style={styles.bottomBtn}>
                <AppButton
                    title='CHECKOUT'
                    onPress={() => updateState({ isVisible: !isVisible })}
                    gradientBtnStyle={styles.gradientBtnStyle}
                />
            </View>
            {paymentModal()}

        </View>
    )
}

export default MyCard