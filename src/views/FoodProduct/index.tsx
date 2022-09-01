import React, { FC, useReducer } from 'react'
import { View, TextInput, ListRenderItem, Text, Image, FlatList, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Swiper from 'react-native-swiper'

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import { lightGrey } from '../../constantValues/colors';
import { filter, location, resturant, search } from '../../constantValues/images';
import { flatlistRenderItem } from '../../InterFace/headerText'
import FoodCardTwo from '../../components/foodCarTwo'


let DATA : flatlistRenderItem[] ;
DATA=[
    { id: '1', name:'a',  type: 'All' },
    { id: '2', name:'a',  type: 'Sweets' },
    { id: '3', name:'a',  type: 'Italian Food' },
    { id: '4', name:'a',  type: 'Salads' },
    { id: '5', name:'a',  type: 'Traditional' },

]

const imgHeight = 180
const FoodProduct: FC<ParentProps> = ({ navigation ,route}) => {
// console.log('route is',route);

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            searchValue: undefined,
        }
    )
    const { searchValue } = state

    function SearchBar() {
        return (
            <View style={styles.searchView}>
                <View style={styles.row}>
                    <Text style={styles.largeText}>Search Menu</Text>
                </View>

                <View style={{ ...styles.row, marginTop: 10, }}>
                    <TextInput
                        placeholder='Search here'
                        placeholderTextColor={lightGrey}
                        onChangeText={(text) => updateState({ searchValue: text })}
                        value={searchValue}
                        style={styles.inputField}
                    />
                    <Image
                        source={search}
                        style={styles.filter}
                    />
                </View>
            </View>
        )
    }

    const renderFooList: ListRenderItem<flatlistRenderItem> = ({ item, index }) => {
        return (
            <Pressable style={styles.btnView}>
                <Text style={styles.btnText}>{item.type}</Text>
            </Pressable>
        )
    }
    function FoodList(){
        return(
            <FlatList
             data={DATA}
             renderItem={renderFooList}
             numColumns={3}
            //  columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        )
    }

   function FoodItem(){
    return(
        <FlatList
         data={DATA}
         renderItem={renderFoodItem}
         numColumns={2}
         columnWrapperStyle={{justifyContent: 'space-between'}}
         style={{marginTop:10,}}
        />
    ) 
   }

   const renderFoodItem: ListRenderItem<flatlistRenderItem> = ({ item, index }) => {
    return (
        <FoodCardTwo
        //  addToCard={()=>navigation.navigate('MyCart')}
        />
    )
}


    return (
        <View style={styles.wraper}>
            <AppHeader
                rightPress={() => navigation.pop()}
                rightIconType={'ionicon'}
                rightIconName='globe-outline'
                leftPress={() => navigation.pop()}
                iconType={'materialIcons'}
                iconName='keyboard-backspace'
                title='Freshi Ice Stick' />
            <View style={styles.container}>
                <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                >
                    {SearchBar()}
                    {FoodList()}
                    {FoodItem()}
                </KeyboardAwareScrollView>
            </View>

        </View>
    )

}

export default FoodProduct