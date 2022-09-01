import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { darkBlue, grey, lightBlack, white } from '../../constantValues/colors'
import { bold, regular, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, mediumSize, small, statusBar } from '../../constantValues/fontsSize'



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
        fontSize:large,
        color: darkBlue
    },
    textView: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    textStyle: {
        textAlign: "left",
    },
    contentView:{
     marginTop:hp(6)
    },
    inputContainerStyle:{
      marginTop:hp(2)
    },
    forgotPass:{
      textAlign:'right',
      color:darkBlue,
      fontFamily:semi_bold,
      fontSize:small,
      marginTop:hp(2)
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
        marginTop:hp(5),
    },
    ORText:{
        marginTop:hp(4),
        textAlign:'center',
        fontSize:mediumSize,
        fontFamily:bold,
        color:lightBlack,
     },
     otherMethod:{
        color:grey,
        fontFamily:regular,
        fontSize:small,
        textAlign:'center',
        marginTop:hp(1),

    },
    socialLoginView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    btnBG:{
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:'white',
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{height:2,width:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        marginTop:15,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
        
    },
    iconStyle:{
        color:darkBlue,
        fontSize:30
    }



})
export default styles