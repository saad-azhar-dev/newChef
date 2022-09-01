import React, { FC } from 'react'
import { View,Image, StyleSheet, Pressable } from 'react-native'

import { maskgroup,calendar, van } from '../constantValues/images'
import { black, darkGrey, grey, lightBlue, white } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { medium, regular } from '../constantValues/fontsFamily'
import { big_tiny, small } from '../constantValues/fontsSize'
import {orderCompInterface} from '../InterFace/headerText'

// will take care of interface later on
const OrderCard: FC<orderCompInterface> = (props) => {
    const {price , date, name , status,onPress} = props
    
    return (
        <Pressable 
        onPress={onPress}
        style={styles.wraper}>
          <View style={styles.contentView}>
              <View style={styles.imgStyle}>
              <Image
                source={maskgroup}
                style={{ width: undefined, height: undefined, flex: 1, }}
              />
              </View>
              <View style={styles.leftView}>
                  <Text style={styles.nameText}>Coffee - Milky & Creamy</Text>
                  <Text style={styles.priceText}>$19</Text>
                  <View style={styles.detailView}>
                      <Image
                       source={calendar}
                       style={{width:15,height:15}}
                      />
                      <Text style={styles.tinyHeading}>Ordering Date:</Text>
                      <Text style={styles.dateText}>02 Apr, 2021</Text>
                  </View>
                  <View style={{...styles.detailView,marginTop:5,marginBottom:5}}>
                      <Image
                       source={van}
                       style={styles.smallImg}
                      />
                      <Text style={styles.tinyHeading}>Order Status:</Text>
                      <Text style={styles.dateText}>Shipped</Text>
                  </View>
              </View>
          </View>
        </Pressable>
    )
}
export default OrderCard

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
        imgStyle: {
            width: 120,
            height:'auto',
            overflow: 'hidden',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
   leftView:{
       alignSelf:'flex-start',
       flex:1,
       marginTop:3,
       marginLeft:7,
    },
    nameText:{
        color:black,
        fontFamily:medium,
        fontSize:big_tiny,
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
    dateText:{
        color:grey,
        fontFamily:regular,
        fontSize:big_tiny, 
    }
})