import React, { FC } from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { sara } from '../constantValues/images'
import { black, darkBlue, grey } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { light, medium, regular } from '../constantValues/fontsFamily'
import { small, tiny } from '../constantValues/fontsSize'
import { Icon, Badge, Divider } from 'react-native-elements'

// will take care of interface later on

const Chat: FC<any> = (props) => {
    return (
        <Pressable 
         onPress={props.onPress}
         style={styles.wraper}>
            <View style={styles.content}>
                <View style={styles.imgView}>
                    <Image
                        source={sara}
                        style={styles.imgStyle}
                    />
                </View>
                <View style={styles.rightView}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.nameText}>Sara</Text>
                        <Text style={styles.msgText}>hey how are you?</Text>
                    </View>
                    <View style={styles.timeOuterView}>
                        <View style={styles.rowCenter}>
                            <Badge
                                value={2}
                                badgeStyle={{ backgroundColor: darkBlue }}
                                containerStyle={{ right: 5 }}
                            />
                            <Text style={styles.timeText}>56min ago</Text>
                            <Icon
                                name='right'
                                type='antdesign'
                                iconStyle={styles.iconStyle}
                                tvParallaxProperties={undefined}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Divider style={styles.divider} />
        </Pressable>
    )
}

export default Chat

const styles = StyleSheet.create({
    wraper:{
     marginBottom:hp(4),
    },
    imgView: {
        height: 60,
        width: 60,
        overflow: 'hidden',
        borderRadius: 30,

    },
    imgStyle: {
        width: undefined,
        height: undefined,
        flex: 1
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: hp(1),
        marginLeft: 10,
    },
    nameText: {
        color: black,
        fontFamily: medium,
        fontSize: small,
    },
    msgText: {
        color: black,
        fontFamily: light,
        fontSize: small,
    },
    iconStyle: {
        color: grey,
        fontSize: 18,
    },
    divider: {
        marginLeft: 70,
        borderBottomColor: grey,
        borderBottomWidth: 0.7,
        marginTop: 5,
    },
    timeOuterView: {
        position: 'absolute',
        right: 0
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        color: grey,
        fontFamily: regular,
        fontSize: tiny,
    }
})