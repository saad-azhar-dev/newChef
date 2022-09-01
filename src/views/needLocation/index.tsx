import React,{FC, useEffect, useReducer,useRef}from 'react'
import {View,Text,Image, Pressable, Alert}from 'react-native'
import Hr from "react-native-hr-component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as RNLocalize from "react-native-localize";
import GetLocation from 'react-native-get-location'
import Modal from "react-native-modal";


import AppButton from '../../components/appButton'
import HeaderText from '../../components/headerText'
import { lightBlack } from '../../constantValues/colors';
import { stateInterface, } from '../../InterFace/headerText'
import { needLoc, pakFlag, popupFlag } from '../../constantValues/images'
import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';

const NeedLocation: FC<ParentProps>=({navigation})=>{

useEffect(()=>{
    
},[])

const [state, updateState] = useReducer(
    (state: stateInterface, newState: any) => ({ ...state, ...newState }),
    {
        country: undefined,
        location:undefined,
        countryPicker:false,
        showCountryList:false,


    }
)
const { country,location , countryPicker , showCountryList } = state

function getUserLocation(){

    // console.log(RNLocalize.getLocales());
    let country  = RNLocalize.getCountry()
      updateState({country:country})
// console.log('country', country);



    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        updateState({location:location})
        console.log('location',location);
    })
    .catch(error => {
        const { code, message } = error;
        console.log('error', code , message);
        console.warn(code, message);
    })
}

function CountryModal() {
    return (
        <Modal
            isVisible={countryPicker}
            avoidKeyboard={true}
            useNativeDriver={true}
            // onBackButtonPress={() => updateState({ countryPicker: false })}
            // onBackdropPress={() => updateState({ countryPicker: false })}
            >
            <View style={styles.modalinnerView}>
            <Image
              source={popupFlag}
              style={styles.blueBGImg}
           />

           <Pressable 
           onPress={()=>{}}
           style={styles.ValuePickerView}>
               <View style={styles.row}>
               <Image
               source={pakFlag}
               style={styles.flagStyle}
               />
               <Text style={styles.cName}>Pakinstan</Text>
               </View>
               <Icon
                name='caretdown'
                type='antdesign'
                iconStyle={styles.iconStyle}
               />
           </Pressable>

           <AppButton
           title='Submit'
           onPress={()=>updateState({countryPicker:false})}
           gradientBtnStyle={styles.submitBtn}
           />
            </View>

        </Modal>
    )
}

   return(
       <View style={styles.wraper}>
           <KeyboardAwareScrollView>
           <View style={styles.container}>
            <Text style={styles.header}>Need Location</Text>
            <View style={styles.textView}>
             <HeaderText text='Your location will be used to'/>
             <HeaderText text='display near by stores'/>
             </View>

              <Image
                source={needLoc}
                style={styles.imgStyle}
            />
            <AppButton
             title='ALLOW TO ACCESS'
             onPress={()=>{getUserLocation()}}
             gradientBtnStyle={styles.gradientBtnStyle}
            />
            <Hr 
            lineColor={lightBlack}
            width={1} 
            thickness={1}
            text="OR"
            hrStyles={styles.hrStyle}
            textStyles={styles.customStylesHere}/>
            <AppButton
             title='ADD MANUALLY'
             onPress={()=>{navigation.navigate('AuthScreen')}}
            //  onPress={()=>updateState({countryPicker:!countryPicker})}
             gradientBtnStyle={styles.addManuallyBtnStyle}
            />
        </View>
        {CountryModal()}
        </KeyboardAwareScrollView>
       </View>
   )
}
export default NeedLocation