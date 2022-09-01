import { StyleSheet, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { black, darkBlue, lightBlue, lightGrey, white } from '../../constantValues/colors'
import { medium, regular, semi_bold } from '../../constantValues/fontsFamily'
import { appMarginHorizontal, large, mediumSize, small, statusBar } from '../../constantValues/fontsSize'



const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: white
    },
    headerView: {
        marginTop: statusBar,
        marginHorizontal: 10,
    },
    container: {
        marginHorizontal: appMarginHorizontal,
        flex: 1
    },
    header: {
        textAlign: 'center',
        fontFamily: medium,
        fontSize: large,
        color: darkBlue
    },
    profileView: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileOuterView: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: lightGrey,
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center'
    },
    imgStyle: {
        width: 100,
        height: 100,
    },
    nameStyle: {
        fontFamily: semi_bold,
        fontSize: small,
        color: black,
        marginTop: hp(1)
    },

    contentView: {
        marginTop: hp(2)
    },
    cardView: {
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
        paddingTop: 10,
        paddingBottom: 20,

    },
    heading: {
        fontFamily: regular,
        fontSize: mediumSize,
        color: black,
        textAlign: 'center'
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: hp(2),
    },
    orderImg: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    btnImg: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    textView: {
        alignItems: 'center',
    },
    textStyle: {
        marginTop: 5,
    },
    buttoncardView: {
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
        marginTop: hp(3),
        paddingTop: 12,
        paddingBottom: 12,
    },

    buttonCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(2),
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(2)
    },
    iconStyle: {
        color: black,
        fontSize: 25,
    },
    buttonTitle: {
        marginLeft: wp(8),
        color: black,
        fontFamily: regular,
        fontSize: small,
    }



})
export default styles