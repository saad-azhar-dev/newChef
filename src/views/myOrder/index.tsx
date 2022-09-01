import React, { FC, useReducer } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import OrderCard from '../../components/orderCard'


const MyOrders: FC<ParentProps> = ({ navigation }) => {
    

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {}
    )
    const {} = state


    return (
        <View style={styles.wraper}>
            <AppHeader 
             title='My Orders' />
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                  <OrderCard
                //    onPress={()=>navigation.navigate('MyCart')}
                  />
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

export default MyOrders
