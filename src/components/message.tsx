import React, { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { steven } from '../constantValues/images'
import { black, darkBlue, offwhite, white } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { flatlistRenderItem, messageInterface } from '../InterFace/headerText'
import { small } from '../constantValues/fontsSize'
import { light, regular } from '../constantValues/fontsFamily'


const Message: FC<messageInterface> = (props) => {
    const {item} = props
    return (
        <View>
            {item.type=='send' ?
            <View style={styles.sendView}>
                <View style={styles.imgView}>
                    <Image
                        source={steven}
                        style={styles.imgStyle}
                    />
                </View>
                <View style={styles.senderVew}>
                    <Text style={styles.sendText}>{item.name}</Text>
                </View>
            </View>:
            <View style={styles.receiveView}>
                <Text style={styles.receiveText}>{item.name}</Text>
            </View>
            }

        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    sendView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:hp(2),
    },
    imgView: {
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderRadius: 30,
        alignSelf: 'flex-end',

    },
    imgStyle: {
        width: undefined,
        height: undefined,
        flex: 1
    },
    senderVew: {
        backgroundColor: offwhite,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius:20,
         marginLeft:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        maxWidth:wp(70)
    },
    receiveView:{
        backgroundColor: darkBlue,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius:20,
        borderTopRightRadius: 20,
         marginRight:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom:hp(2),
        maxWidth:wp(70),
        alignSelf: "flex-end"
    },
    sendText:{
        color:black,
        fontSize:small,
        fontFamily:regular,
    },
    receiveText:{
        color:white,
        fontFamily:regular,
        fontSize:small,
    }
})