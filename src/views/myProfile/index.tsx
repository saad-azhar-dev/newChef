import React, { FC, useReducer } from 'react'
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { launchImageLibrary } from "react-native-image-picker"

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { Icon } from 'react-native-elements'
import { imagePickerResInterface,stateInterface, } from '../../InterFace/headerText'
import { editprofile, mycards, myorders, topay, toreceive, toship } from '../../constantValues/images'
import { darkBlue } from '../../constantValues/colors'
import AppHeader from '../../components/appHeader'
import { options } from '../../constantValues/constants'
import SIcon from 'react-native-vector-icons/SimpleLineIcons';


const MyProfile: FC<ParentProps> = ({ navigation }) => {

  const [state, updateState] = useReducer(
    (state: stateInterface, newState: any) => ({ ...state, ...newState }),
    {
      filePath: '',
    }
  )
  const { filePath } = state

  function opneImagePicker() {

    launchImageLibrary(options, (response:imagePickerResInterface) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        updateState({
          filePath: response.assets[0],
          //  fileData: response.data,
          //  fileUri: response.uri
        });
      }
    });
  }

  function UserImgUI() {
    return (
      <View style={styles.profileView}>
        <TouchableOpacity
          style={styles.profileOuterView}
          onPress={opneImagePicker}
        >
          {!filePath ?
            <SIcon name="user" style={{ fontSize: 40, color: darkBlue }} />
            :
            <View style={styles.imgStyle}>
              <Image
                source={{ uri: filePath.uri }}
                style={{ width: undefined, height: undefined, flex: 1 }} />
            </View>
          }
        </TouchableOpacity>
        <Text style={styles.nameStyle}>Mohammad Ahmad</Text>
      </View>
    )
  }

  function myorderUI() {
    return (
      <View style={styles.contentView}>
        <View style={styles.cardView}>
          <Text style={styles.heading}>My Orders</Text>
          <View style={styles.cardContent}>
            <Pressable style={styles.textView}>
              <Image
                source={topay}
                style={styles.orderImg}
              />
              <Text style={styles.textStyle}>To Pay</Text>
            </Pressable>
            <Pressable style={styles.textView}>
              <Image
                source={toreceive}
                style={styles.orderImg}
              />
              <Text style={styles.textStyle}>To Ship</Text>
            </Pressable>
            <Pressable style={styles.textView}>
              <Image
                source={toship}
                style={styles.orderImg}
              />
              <Text style={styles.textStyle}>To Receive</Text>
            </Pressable>
          </View>
        </View>
      </View>
    )
  }
function buttonUI(){
  return(
    <View>
     <Pressable 
     onPress={()=>navigation.navigate('YourCards')}
     style={{...styles.buttoncardView}}>
       <View style={styles.buttonCardContent}>
         <View style={styles.leftSide}>
           <Image source={mycards} style={{width:40,height:40,resizeMode:'contain'}}/>
           <Text style={styles.buttonTitle}>My Cards</Text>
         </View>
         <Icon
          name={'chevron-forward'}
          type={'ionicon'}
          iconStyle={styles.iconStyle}
          tvParallaxProperties={undefined}
         />
       </View>
     </Pressable>

     <Pressable 
     onPress={()=>navigation.navigate('MyOrders')}
     style={{...styles.buttoncardView}}>
       <View style={styles.buttonCardContent}>
         <View style={styles.leftSide}>
           <Image source={myorders} style={styles.btnImg}/>
           <Text style={styles.buttonTitle}>My Orders</Text>
         </View>
         <Icon
          name={'chevron-forward'}
          type={'ionicon'}
          iconStyle={styles.iconStyle}
          tvParallaxProperties={undefined}
         />
       </View>
     </Pressable>

     <Pressable 
     onPress={()=>navigation.navigate('EditProfile')}
     style={{...styles.buttoncardView}}>
       <View style={styles.buttonCardContent}>
         <View style={styles.leftSide}>
           <Image source={editprofile} style={{width:35,height:35,resizeMode:'contain'}}/>
           <Text style={styles.buttonTitle}>Edit Profile</Text>
         </View>
         <Icon
          name={'chevron-forward'}
          type={'ionicon'}
          iconStyle={styles.iconStyle}
          tvParallaxProperties={undefined}
         />
       </View>
     </Pressable>

     </View>
   
  )
}
  return (
    <View style={styles.wraper}>
      <AppHeader title='My Profile' />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          {UserImgUI()}
          {myorderUI()}
          {buttonUI()}
        </KeyboardAwareScrollView>
      </View>
    </View>
  )
}

export default MyProfile
