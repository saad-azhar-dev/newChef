import React,{FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

import { medium, regular, semi_bold } from '../constantValues/fontsFamily';
import { black, darkBlue, lenGreen, letFerozi, white } from '../constantValues/colors';
import { appHeaderInterface } from '../InterFace/headerText';
import { headerHeigh, mediumSize, small, statusBar } from '../constantValues/fontsSize';
import { Icon } from 'react-native-elements';

const AppHeader:FC<appHeaderInterface> = (props) => {
    const { 
        title,
        iconName, 
        iconType, 
        leftPress,
        rightIconName,
        rightIconType,
        rightPress,
     } = props
    return (
        <View style={styles.wraper}>
      
      <View style={styles.left}>
      {iconName &&
         <Icon
          onPress={leftPress}
          name={iconName}
          type={iconType}
          tvParallaxProperties={undefined}
          iconStyle={styles.iconStyle}
         />
         }
      </View>
         
         <View style={styles.body}>
         <Text style={styles.centerText}>{title}</Text>
         </View>
         <View style={styles.right}>
         {rightIconName &&
         <Icon
          onPress={rightPress}
          name={rightIconName}
          type={rightIconType}
          tvParallaxProperties={undefined}
          iconStyle={styles.iconStyle}
         />
         }
         </View>
         
        </View>
    )
}
export default AppHeader

const styles = StyleSheet.create({
    wraper:{
      marginTop:headerHeigh,
      marginHorizontal:10,
      flexDirection:'row',
      alignItems:'center',
    //   justifyContent:'space-between',
    //   paddingVertical:10,
    },
    left:{
       width:wp(15),
    //    backgroundColor:'red'
    },

    iconStyle:{
      fontSize:20,
      color:black,
      width:wp(10),
    },
    body:{
        width:wp(65)
    },
    centerText:{
        // width:wp(60),,
        textAlign:'center',
        color:darkBlue,
        fontFamily:semi_bold,
        fontSize:mediumSize,
    },
    right:{
        width:wp(15),
        // backgroundColor:darkBlue,
    }
})