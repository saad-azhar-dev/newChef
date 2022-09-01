import React, { FC } from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'

import { sweet1 } from '../constantValues/images'
import { black, darkBlue, dark_offwhite, grey, lightBlue, white } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { medium, regular } from '../constantValues/fontsFamily'
import { big_tiny, tiny } from '../constantValues/fontsSize'

// will take care of interface later on
const FoodCardTwo: FC<any> = (props) => {
const {addToCard} = props
    return (
        <View style={styles.wraper}>
           
                <View style={styles.imgStyle}>
                    <Image
                        source={sweet1}
                        style={{ width: undefined, height: undefined, flex: 1, }}
                    />
                </View>
                <View style={styles.cardContent}>
                <Text style={styles.nameText}>Banana Cake</Text>
                <Text style={styles.descText}>Banana Cake with Cheese Sauce</Text>
                <View style={styles.rowSpaceBetween}>
                    <Text style={styles.priceText}>SAR 150.00</Text>
                    <Pressable 
                    onPress={addToCard}
                    style={styles.btnView}>
                        <Text style={styles.addTocard}>Add to Cart</Text>
                    </Pressable>
                    </View>
                
                </View>
          
        </View>
    )
}
export default FoodCardTwo

const styles = StyleSheet.create({
    wraper: {
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor:white,
        elevation: 2,
        borderRadius: 10,
        marginBottom:15,
        flex:0.49,
    },
    cardContent: {
        marginTop:5,
        marginLeft:5,
        marginBottom:10,
    },
    imgStyle: {
        width:'auto',
        height:150,
        resizeMode:'contain',
        overflow: 'hidden',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    descText:{
        color:grey,
        fontFamily:regular,
        fontSize:tiny,
        marginTop:-3,
    },
    
    btnView:{
        backgroundColor:dark_offwhite,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    addTocard:{
        fontFamily:regular,
        fontSize:10,
        color:black,
    },

    rowSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:-3,
    },
    nameText: {
        color: black,
        fontFamily:medium,
        fontSize:big_tiny,
    },
    priceText: {
        color:darkBlue,
        fontFamily: regular,
        fontSize:10,
    },
})