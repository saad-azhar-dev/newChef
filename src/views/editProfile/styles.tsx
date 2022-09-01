import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, lightBlue, lightGrey, white } from '../../constantValues/colors'
import { medium, regular, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, mediumSize, small, statusBar } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    headerView: {
        marginTop: statusBar,
        marginHorizontal: 10,
    },
    container: {
        marginHorizontal: appMarginHorizontal,
        flex: 1
    },
    header: {
        textAlign: 'center',
        fontFamily: medium,
        fontSize: large,
        color: darkBlue
    },
    profileView: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileOuterView: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: lightGrey,
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center'
    },
    imgStyle: {
        width: 100,
        height: 100,
    },
    nameStyle: {
        fontFamily: semi_bold,
        fontSize: small,
        color: black,
        marginTop: hp(1)
    },

    contentView: {
        marginTop: hp(2)
    },
    iconStyle: {
        color: white,
        fontSize: 20,
    },
    editView: {
        position: 'absolute',
        left: wp(50),
        bottom: hp(0.3),
        backgroundColor: darkBlue,
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    inputView: {
        marginTop: hp(5),
    },
    inputContainerStyle: {
        marginTop: hp(2)
    },
    gradientBtnStyle: {
        width: wp(70),
        marginTop: hp(7),
    },




})
export default styles