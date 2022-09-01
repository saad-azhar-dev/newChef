import { StyleSheet, } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, darkGrey, dark_offwhite, grey, lightBlack, lightBlue, lightGrey, offwhite, white } from '../../constantValues/colors'
import { regular, semi_bold } from '../../constantValues/fontsFamily';
import { appMarginHorizontal, big_tiny, large, mediumSize, small, tiny } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },

    container: {
        marginTop: hp(3),
        marginHorizontal: appMarginHorizontal,
        flex: 1,
    },

    searchView:{
        paddingVertical:10,
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
    
    inputField:{
        flex:1,
        paddingVertical:10,
        paddingLeft:5
    },
    filter:{
        width:25,
        height:25,
        resizeMode:'contain'
    },
    btnView:{
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:20,
      backgroundColor:dark_offwhite,
      marginTop:15,
      minWidth:60,
      marginHorizontal:10,
      alignItems:'center',
      alignSelf:'center',
    },
    btnText:{
        color:black,
        fontSize:small,
        fontFamily:regular,
    }

})
export default styles