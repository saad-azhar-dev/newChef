import { StyleSheet, } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, grey, lightGrey, offwhite, white } from '../../constantValues/colors'
import { regular } from '../../constantValues/fontsFamily';
import { appMarginHorizontal, big_tiny, tiny } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    lastSeen: {
        textAlign: 'center',
        color: grey,
        fontFamily: regular,
        fontSize: tiny,
    },
    container: {
        marginTop: hp(3),
        marginHorizontal: appMarginHorizontal,
        flex: 1,
    },
    flatListStyle: {
        // marginHorizontal: 20,
    },
    outerView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        maxHeight: 100,
        marginBottom: getBottomSpace()
    },
    innerView: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        borderRadius: 10,
        backgroundColor:offwhite,
    },
    inputStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flex: 1,
        color: black,
        fontFamily: regular,
        marginTop: 10,
    },
    sendIconStyle: {
        color: white,
        fontSize: 30,
        marginLeft:2
    },
    sendBtnView: {
        alignSelf: 'flex-end',
    },
    sendBtn: {
        width:55,
        height: 40,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,

    }

})
export default styles