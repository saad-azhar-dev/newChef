import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { darkBlue, white } from '../../constantValues/colors'
import { bold, medium, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, statusBar } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    container: {
        marginTop: statusBar,
        marginHorizontal: appMarginHorizontal,
        flex:1,
    },
    headerView:{
        alignSelf:"flex-start",
        marginTop:hp(4),
    },
    header: {
        // textAlign: 'center',
        fontFamily:semi_bold,
        fontSize: large,
        color: darkBlue
    },
    textView: {
        marginTop: 10,
        alignSelf:'flex-start',
    },
    textStyle:{
     textAlign:"left"
    },
    inputView:{
      marginTop:hp(7)
    },
    // imgView: {
    //     marginTop: hp(10)
    // },
    // imgStyle: {
    //     width: wp(110),
    //     height: hp(40),
    //     alignSelf: 'center',
    //     marginLeft: 10,
    //     resizeMode: 'contain',
    // },
    signUpBtnStyle:{
        width: wp(30),
        marginTop: hp(5),
        borderColor:darkBlue,
        borderWidth:2,
    },
    signUpBtnText:{
        color:darkBlue,
        margin:8
    }




})
export default styles