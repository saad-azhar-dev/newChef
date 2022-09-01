import React,{FC} from 'react'
import {View, Text , StyleSheet} from 'react-native'
import { lightBlack } from '../constantValues/colors'
import { regular } from '../constantValues/fontsFamily'
import { small } from '../constantValues/fontsSize'

import { headerInterface } from '../InterFace/headerText'

const HeaderText:FC<headerInterface> =(props)=>{
    return(
     <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        
    )
}
export default HeaderText

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontFamily:regular,
        fontSize:small,
        color:lightBlack,
    }
})
