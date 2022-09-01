import React, { FC } from 'react'
import { View,Image, StyleSheet, Pressable } from 'react-native'

import { maskgroup,calendar, van } from '../constantValues/images'
import { black, danger, darkBlue, darkGrey, grey, lightBlue, lightGrey, offwhite, white } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { medium, regular } from '../constantValues/fontsFamily'
import { big_tiny, small } from '../constantValues/fontsSize'
import {cartInterface, orderCompInterface} from '../InterFace/headerText'
import { Icon } from 'react-native-elements'

// will take care of interface later on
const ItemCard: FC<cartInterface> = (props) => {
    const {price, name ,} = props
    
    return (
        <View style={styles.wraper}>
          <View style={styles.contentView}>
             <View style={styles.imgStyle}> 
              <Image
                source={maskgroup}
                style={{ width: undefined, height: undefined, flex: 1, }}
              />
              </View>
              <View style={styles.leftView}>
                  <View style={styles.rowSpaceBetween}>
                  <Text style={styles.nameText}>Coffee - Milky & Creamy</Text>
                   <Pressable style={styles.iconBg}>
                      <Icon
                       name={'check'}
                       type={'antdesign'}
                       iconStyle={styles.iconStyle}
                       tvParallaxProperties={undefined}
                      />
                   </Pressable>
                  </View>
                  <Text style={styles.priceText}>$19</Text> 
                  <Text style={styles.nameText}>Quantity</Text>
               
               <View style={{...styles.rowSpaceBetween,marginTop:5,marginBottom:5}}>

                <View style={{...styles.detailView}}>
                  <Pressable
                      style={{...styles.greyBg,}}>
                      <Icon
                       name={'minus'}
                       type={'antdesign'}
                       iconStyle={styles.iconStyle}
                       tvParallaxProperties={undefined}
                      />
                   </Pressable>
                      <Text style={{...styles.QtyText,marginHorizontal:10}}>1</Text>
                      <Pressable style={{...styles.iconBg,}}>
                      <Icon
                       name={'plus'}
                       type={'antdesign'}
                       iconStyle={styles.iconStyle}
                       tvParallaxProperties={undefined}
                      />
                   </Pressable>
                  </View>

                  <Pressable>
                      <Icon
                       name={'delete'}
                       type={'material'}
                       iconStyle={styles.deleteStyle}
                       tvParallaxProperties={undefined}
                      />
                   </Pressable>
                  </View>

              </View>
          </View>
        </View>
    )
}
export default ItemCard

const styles = StyleSheet.create({
    wraper: {
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
    },
    contentView:{
     flexDirection:'row',
     alignItems:'center',
    },
    imgStyle:{
        width: 120,
        height:'auto',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
   leftView:{
       alignSelf:'flex-start',
       marginTop:3,
       flex:1,
       marginLeft:7,
    },
    rowSpaceBetween:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
    },
    nameText:{
        color:black,
        fontFamily:medium,
        fontSize:big_tiny,
        flex:1,
    },
    QtyText:{
        color:black,
        fontFamily:medium,
        fontSize:big_tiny,
    },
    iconBg:{
     backgroundColor:darkBlue,
     width:20,
     height:20,
     borderRadius:20/2,
     marginLeft:5,
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'flex-start',
    },
    greyBg:{
        backgroundColor:lightGrey,
        width:20,
        height:20,
        borderRadius:20/2,
        alignItems:'center',
        justifyContent:'center',
    },
    iconStyle:{
     fontSize:15,
     color:white,
    },

    priceText:{
        color:grey,
        fontFamily:regular,
        fontSize:small,
    },
    smallImg:{
        width:20,
        height:20,
        resizeMode:'contain'
    },
    tinyHeading:{
    color:darkGrey,
    fontFamily:regular,
    fontSize:big_tiny,
    marginLeft:5,
    },
    detailView:{
        flexDirection:'row',
        alignItems:'center',

    },
    deleteStyle:{
        color:danger,
        fontSize:25,
    }
})