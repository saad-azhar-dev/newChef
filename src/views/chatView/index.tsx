import React, { FC, useReducer, useRef } from 'react'
import { View, FlatList, ListRenderItem, TextInput, Platform, Pressable,Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'react-native-elements'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import { flatlistRenderItem } from '../../InterFace/headerText'
import Message from '../../components/message'
import { darkBlue, lenGreen, letFerozi, lightGrey } from '../../constantValues/colors'




let DATA: flatlistRenderItem[]
DATA = [
    { id: '1', type: 'send', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '2', type: 'send', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '3', type: 'recv', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '4', type: 'send', name: 'zah' },
    { id: '5', type: 'send', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '6', type: 'recv', name: 'zaheer' },
    { id: '7', type: 'recv', name: 'zaheer' },
    { id: '8', type: 'send', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '9', type: 'send', name: 'User Reply will goes here User Reply will goes here User Reply will goes hereUser Reply will goes here User Reply will goes here User Reply will goes here' },
    { id: '10', type: 'recv', name: 'majeed' },
    { id: '11', type: 'send', name: 'zafar' },
]




const ChatView: FC<ParentProps> = ({ navigation }) => {
    let flatListRef = useRef<any>(null);
    let inputRef = useRef<any>(null)

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            message: '',
        }
    )
    const { message } = state

    const renderItem: ListRenderItem<flatlistRenderItem> = ({ item, index }) => {
        return (
            <Message
             item={item}
            />
        )
    }

    return (
        <View style={styles.wraper}>
            <AppHeader
                leftPress={() => navigation.pop()}
                iconType={'materialIcons'}
                iconName='keyboard-backspace'
                title='Steven Steele' />
            <Text style={styles.lastSeen}>Last seen at 19:14</Text>
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.flatListStyle}
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ref={flatListRef}
                    scrollEnabled={true}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps='handled'
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
                    onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
                // listKey={(item, index) => { 'A' + item }}
                />
                <View style={styles.outerView}>
                    <View style={styles.innerView}>
                        <TextInput
                            placeholder={"Type here"}
                            placeholderTextColor={lightGrey}
                            onChangeText={(text) => { updateState({ message: text }) }}
                            value={message}
                            multiline={true}
                            blurOnSubmit={false}
                            autoFocus={false}
                            ref={inputRef}
                            style={styles.inputStyle}
                        />
                    </View>

                    <Pressable style={styles.sendBtnView}>
                        <LinearGradient
                        start={{ x: 0.1, y: 0.1 }} end={{ x: 0.7, y: 0.7 }}
                        colors={[lenGreen ,letFerozi]}
                        style={styles.sendBtn}
                        >
                            <Icon
                                name={'send'}
                                type={'material'}
                                iconStyle={styles.sendIconStyle}
                                containerStyle={{ alignSelf: 'center' }}
                                tvParallaxProperties={undefined}
                            />
                            </LinearGradient>
                        </Pressable>
                </View>

            </View>

            {Platform.OS === 'ios' ?
                <KeyboardSpacer /> : null}
        </View>
    )
}

export default ChatView
