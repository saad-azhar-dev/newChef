import { StyleSheet, } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { white } from '../../constantValues/colors'
import { appMarginHorizontal } from '../../constantValues/fontsSize'



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

})
export default styles