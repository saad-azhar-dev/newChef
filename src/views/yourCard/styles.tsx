import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, dark_offwhite, white } from '../../constantValues/colors'
import { medium, regular } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, mediumSize, tiny } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    container: {
        marginTop:hp(3),
        marginHorizontal: appMarginHorizontal,
        flex: 1,
    },
    signUpBtnStyle:{
        width: wp(30),
        marginTop: hp(5),
        borderColor:darkBlue,
        borderWidth:2,
    },
    signUpBtnText:{
        color:darkBlue,
        margin:8
    },
    bottomBtn:{
        position:'absolute',
        bottom:0,
        marginBottom:hp(4), 
        alignSelf:'flex-end',
        right:30,
    },
    floatBtn:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:darkBlue,
      justifyContent:'center',
      alignItems:'center',
    },
    iconStyle:{
  color:white,
  fontSize:25,
    },





    modalinnerView:{
      backgroundColor:white,
      borderRadius:20,
      width:wp(90),
    //   width:hp(80)
    },
    blueBGImg:{
        width:wp(90),
        height:180,
        marginTop:-20,
      resizeMode:'contain'
    },
    middleText:{
     position:'absolute',
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'center',
     marginTop:(180/3)
    },
    largeText:{
        color:white,
        fontFamily:medium,
        fontSize:large,
    },
    modalConten:{
        marginHorizontal:10,
        marginBottom:hp(2),
        marginTop:hp(2),
    },
    mediumText:{
        color:black,
        fontSize:mediumSize,
        fontFamily:regular,
        textAlign:'center',
    },
    inputContainerStyle:{
        marginTop:10,
        backgroundColor:dark_offwhite,
        paddingLeft:10,
        borderColor:'transparent',
        borderBottomWidth:0,

    },
    maskedView:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
    },
    maskedInput:{
        backgroundColor:dark_offwhite,
        marginTop:10,
        paddingLeft:10,
        fontSize: 14,
        paddingVertical:10,
        borderColor:'transparent',
        borderBottomWidth:0,
        width:wp(23)

    },
    validText:{
        color:black,
        fontSize:tiny,
        fontFamily:regular,
        marginTop:10,

    },
    slashText:{
        fontSize:15,
        fontFamily:medium,
        color:black,
        marginTop:5,

    },
    gradientBtnCheckOut:{
        width: wp(40),
        marginBottom:hp(3),
        marginTop:hp(1), 
    },
    gradientBtnStyle: {
        width: wp(70),
    },

})
export default styles