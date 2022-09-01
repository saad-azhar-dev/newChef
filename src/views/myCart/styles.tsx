import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, grey, lightBlue, white } from '../../constantValues/colors'
import { medium, regular, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, mediumSize, small, statusBar } from '../../constantValues/fontsSize'



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
    bottomBtn:{
        position:'absolute',
        bottom:0,
        marginBottom:hp(4), 
        alignSelf:'center',
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
        marginTop:hp(3),
    },
    radioBtnView:{
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
        paddingVertical:15,
        marginBottom:10,
        paddingLeft:10,
    },
    radioBtnInnerView:{
       flexDirection:'row',
       alignItems:'center',
    },
    outerCircle:{
       backgroundColor:white,
       width:20,
       height:20,
       borderRadius:20/2,
       borderColor:grey,
       borderWidth:1,
       justifyContent:'center',
       alignItems:'center',
    },
    innerCircle:{
      backgroundColor:grey,
      width:10,
      height:10,
      borderRadius:10/2,
      borderColor:grey,
      borderWidth:1,
    },
    textStyle:{
        marginLeft:10,
        color:black,
        fontFamily:regular,
        fontSize:small,
    },
    gradientBtnCheckOut:{
        width: wp(40),
        marginBottom:hp(3)
        
    },
    gradientBtnStyle: {
        width: wp(70),
    },

})
export default styles