import { StyleSheet, } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkGrey, grey, lightBlue, offwhite, white } from '../../constantValues/colors'
import { regular } from '../../constantValues/fontsFamily';
import { appMarginHorizontal, large, mediumSize, tiny } from '../../constantValues/fontsSize'



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
    locationView:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:offwhite,
        paddingVertical:10,
    },
    iconStyle: {
        color:black,
        fontSize: 30,
        marginLeft:2
    },
    locIcon:{
     width:23,
     height:23,
     resizeMode:'contain'
    },
    leftView:{
        flexDirection:'row',
        alignItems:'center',
    },
    locationText:{
    marginLeft:10,
    color:darkGrey
    },
    searchView:{
        // backgroundColor:white,
        paddingVertical:10,
        // borderBottomColor:lightBlue,
        // borderBottomWidth:1.5,
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    largeText:{
        fontSize:large,
        fontFamily:regular,
        color:black,
    },
    filter:{
        width:25,
        height:25,
        resizeMode:'contain'
    },
    inputField:{
        flex:1,
        paddingVertical:10,
        paddingLeft:5
    },
    resturantText:{
        marginTop:15,
        color:black,
        fontFamily:regular,
        fontSize:mediumSize
       },
       

       dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 0,
        height: 0,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDotStyle: {
        backgroundColor: '#007aff',
        width: 0,
        height: 0,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
   

})
export default styles