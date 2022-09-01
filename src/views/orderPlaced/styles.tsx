import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { darkBlue, white } from '../../constantValues/colors'
import { semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, statusBar } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    container: {
        marginTop: statusBar,
        marginHorizontal: appMarginHorizontal,
        flex: 1,
    },
    headerView: {
        alignSelf: "flex-start",
        marginTop: hp(4),
    },
    header: {
        fontFamily: semi_bold,
        fontSize: large,
        color: darkBlue
    },
    confettiStyle: {
        width: 300,
        height: 200,
        marginTop: hp(6),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    textView: {
        marginTop: hp(5),
    },
    congrats: {
        textAlign: "center",
        fontFamily: semi_bold,
        fontSize: large,
        color: darkBlue
    },
    textStyle: {
        textAlign: "center",
    },
    contentView: {
        marginTop: hp(2)
    },

    signUpBtnText: {
        color: darkBlue,
        margin: 8
    },
    signUpBtnStyle: {
        width: wp(70),
        marginTop: hp(2),
        borderColor: darkBlue,
        borderWidth: 2,
    },
    gradientBtnStyle: {
        width: wp(70),
        marginTop: hp(10),
    },






})
export default styles