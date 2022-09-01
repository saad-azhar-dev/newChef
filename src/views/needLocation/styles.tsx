import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { black, darkBlue, dark_offwhite, white } from '../../constantValues/colors'
import { bold, medium, regular } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, small, statusBar } from '../../constantValues/fontsSize'

const styles = StyleSheet.create({
 wraper:{
     flex:1,
     backgroundColor:white
 },
 container:{
    marginTop:statusBar,
   marginHorizontal:appMarginHorizontal
 },
 header:{
     textAlign:'center',
     fontFamily:medium,
     fontSize:large,
     color:darkBlue
 },
 textView:{
     marginTop:10,
 },
 imgStyle:{
     width:wp(90),
     height:hp(40),
 },
 gradientBtnStyle:{
     width:wp(70),
     marginTop:15,
 },
 addManuallyBtnStyle:{
    width:wp(70),
 },
 customStylesHere:{
     color:black,
     fontSize:small,
     fontFamily:medium,
 },
 hrStyle:{
     width:wp(40),
     alignSelf:'center',
     marginVertical:20,
 },
 modalinnerView:{
    backgroundColor:white,
    borderRadius:20,
    width:wp(90),
    paddingVertical:10,
  },
  blueBGImg:{
    width:wp(40),
    height:80,
    marginTop:(-90/2),
    alignSelf:'center',
  resizeMode:'contain'
},
ValuePickerView:{
 backgroundColor:dark_offwhite,
 marginTop:15,
 paddingVertical:10,
 paddingHorizontal:10,
 marginHorizontal:20,
 borderRadius:10,
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
},
flagStyle:{
 width:20,
 height:20,
 resizeMode:'contain'
},
cName:{
 color:black,
 fontFamily:regular,
 fontSize:small,
 marginLeft:15,
},
iconStyle:{
    color:black,
    fontSize:20,
},
row:{
flexDirection:'row',
alignItems:'center',
},
submitBtn:{
    width:wp(40),
    marginTop:20,   
},
})
export default styles