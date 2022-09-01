import React, { FC, useReducer } from 'react'
import { View } from 'react-native'

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import Chat from '../../components/chat'



const ChatList: FC<ParentProps> = ({ navigation }) => {
    

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {}
    )
    const {} = state


    return (
        <View style={styles.wraper}>
            <AppHeader 
             title='Your Chats' />
            <View style={styles.container}>
            <Chat 
            onPress={()=>navigation.navigate('ChatView')}
            />
            <Chat/>
            <Chat/>
            </View>
        </View>
    )
}

export default ChatList
