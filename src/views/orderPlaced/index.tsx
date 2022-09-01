import React, { FC } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TabActions } from '@react-navigation/native'

import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { confetti } from '../../constantValues/images'
import { white } from '../../constantValues/colors'

const OrderPlaced: FC<ParentProps> = ({ navigation }) => {

   function GoToHome(){
    navigation.navigate('BottomTabs', {
        screen: 'Home',
      });
   }

   function GoToOrder(){
    navigation.navigate('BottomTabs', {
        screen: 'MyOrders',
      });
   }

    return (
        <View style={styles.wraper}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <Image
                        source={confetti}
                        style={styles.confettiStyle}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.congrats}>Congratulations!</Text>
                    </View>
                    <View style={styles.contentView}>
                        <HeaderText
                            text='Your order has been placed.'
                            textStyle={styles.textStyle} />
                        <HeaderText
                            text='You can view all details in'
                            textStyle={styles.textStyle} />
                        <HeaderText
                            text='My Orders page.'
                            textStyle={styles.textStyle} />

                        <AppButton
                            title='CONTINUE SHOPPING'
                            onPress={()=>{GoToHome()}}
                           gradientBtnStyle={styles.gradientBtnStyle}
                        />
                          <AppButton
                            title='GO TO MY ORDERS'
                            onPress={() =>GoToOrder()}
                            btnColor={white}
                            btnText={styles.signUpBtnText}
                            gradientBtnStyle={styles.signUpBtnStyle}
                        />




                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

export default OrderPlaced
