import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { darkBlue, white } from '../../constantValues/colors'
import { medium, regular, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, small, statusBar } from '../../constantValues/fontsSize'



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
        fontFamily:semi_bold,
        fontSize: large,
        color: darkBlue
    },
    textView: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    textStyle: {
        textAlign: "left"
    },
    textInputStyle: {
        borderBottomWidth: 2,
        fontSize: 30,
        marginTop: hp(6)
    },
    haveNotRec:{
       color:darkBlue,
       fontSize:small,
       fontFamily:regular,
    },
    sendAgainView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(2)
    },
    sendText:{
     color:darkBlue,
     fontFamily:semi_bold,
     fontSize:small,
     marginLeft:2

    },
    gradientBtnStyle: {
        width: wp(70),
        marginTop:hp(10),
    },




})
export default styles