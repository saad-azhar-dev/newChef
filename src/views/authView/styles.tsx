import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { darkBlue, white } from '../../constantValues/colors'
import { medium } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, statusBar } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    container: {
        marginTop: statusBar,
        marginHorizontal: appMarginHorizontal
    },
    header: {
        textAlign: 'center',
        fontFamily: medium,
        fontSize: large,
        color: darkBlue
    },
    textView: {
        marginTop: 10,
    },
    imgView: {
        marginTop: hp(10)
    },
    imgStyle: {
        width: wp(110),
        height: hp(40),
        alignSelf: 'center',
        marginLeft: 10,
        resizeMode: 'contain',
    },
    signUpBtnStyle:{
        width: wp(70),
        marginTop: hp(8),
        borderColor:darkBlue,
        borderWidth:2,
    },
    gradientBtnStyle: {
        width: wp(70),
        marginTop:hp(3),
    },
    signUpBtnText:{
        color:darkBlue,
        margin:8
    }




})
export default styles