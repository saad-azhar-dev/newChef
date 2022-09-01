import React ,{FC , useRef , useReducer , useEffect} from 'react'
import { View , StyleSheet}from 'react-native'
import * as Animatable from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import { ParentProps } from '../InterFace/ParentFunction'
import { splashlogo } from '../constantValues/images'
import { white } from '../constantValues/colors';



const Splash: FC<ParentProps>=({navigation})=>{
useEffect(()=>{
  setTimeout(()=>{
   navigation.navigate('LocationScreen')
  },4000)
},[])

  return(
      <View style={styles.wraper}>
          <Animatable.Image
           animation="zoomInUp"
           easing="ease-in" 
           duration={2000}
           delay={500}
           resizeMode={'contain'}
           source={splashlogo}
           style={styles.logoStyle}
          />
      </View>
  )
}
export default Splash

const styles = StyleSheet.create({
    wraper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:white
    },
    logoStyle:{
        width:wp(60),
        height:hp(40),
    }
})