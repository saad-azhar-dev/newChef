import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

import { medium, regular } from '../constantValues/fontsFamily';
import { black, lenGreen, letFerozi, white } from '../constantValues/colors';
import { backBtnInterface } from '../InterFace/headerText';
import { large, mediumSize, small, tiny } from '../constantValues/fontsSize';
import { Icon } from 'react-native-elements';



const BackButton: FC<backBtnInterface> = (props) => {
    const { title, onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ width: wp(20) }}
        >
            <View style={styles.wraper}>
                <Icon
                    name={'left'}
                    type={'antdesign'}
                    iconStyle={styles.iconStyle}
                    tvParallaxProperties={undefined}
                />
                <Text style={styles.textStyle}>Back</Text>
            </View>
        </TouchableOpacity>
    )
}
export default BackButton

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        color: black,
        fontSize: large,
    },
    textStyle: {
        color: black,
        fontFamily: regular,
        fontSize: tiny,
        marginLeft: 5,
    }
})