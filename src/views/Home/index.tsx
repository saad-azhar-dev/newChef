import React, { FC, useReducer } from 'react'
import { View, TextInput, Pressable, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Swiper from 'react-native-swiper'

import { ParentProps } from '../../InterFace/ParentFunction'
import styles from './styles'
import { stateInterface, } from '../../InterFace/headerText'
import AppHeader from '../../components/appHeader'
import { lightGrey } from '../../constantValues/colors';
import { filter, location, resturant, search } from '../../constantValues/images';
import FoodCard from '../../components/foodList';

let data = [
    { id: 1, 'value': 'one' },
    { id: 2, 'value': 'two' },
    { id: 3, 'value': 'three' },
    { id: 4, 'value': 'four' },

]

const imgHeight = 180
const Home: FC<ParentProps> = ({ navigation }) => {

    const [state, updateState] = useReducer(
        (state: stateInterface, newState: any) => ({ ...state, ...newState }),
        {
            searchValue: undefined,
        }
    )
    const { searchValue } = state

    function Location() {
        return (
            <Pressable style={styles.locationView}>
                <View style={styles.leftView}>
                    <Image
                        source={location}
                        style={styles.locIcon}
                    />
                    <Text style={styles.locationText}>Lahore</Text>
                </View>
                <Icon
                    name={'keyboard-arrow-right'}
                    type={'material'}
                    iconStyle={{ ...styles.iconStyle }}
                    tvParallaxProperties={undefined}
                />
            </Pressable>
        )
    }
    function SearchBar() {
        return (
            <View style={styles.searchView}>
                <View style={styles.row}>
                    <Text style={styles.largeText}>Search Shops</Text>
                    <Image
                        source={filter}
                        style={styles.filter}
                    />
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
    function Restauramts() {
        return (
            <View>
                <Text style={styles.resturantText}>POPULAR RESTAURANTS</Text>
                <Swiper
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={5}
                    autoplayDirection={true}
                    // dot={<View style={styles.dotStyle} />}
                    // activeDot={<View style={styles.activeDotStyle} />}
                    style={{ height: (imgHeight) }}
                    containerStyle={{ height: imgHeight }}

                >
                    {data.map((item, index) => {
                        return (
                            <View style={{ height: imgHeight }}>
                                <Image
                                    source={resturant}
                                    // resizeMode={'contain'}
                                    style={{ height: imgHeight, width: '100%' }}
                                />
                            </View>
                        )
                    })}

                </Swiper>
            </View>
        )
    }



    return (
        <View style={styles.wraper}>
            <AppHeader
                rightPress={() => navigation.pop()}
                rightIconType={'ionicon'}
                rightIconName='globe-outline'
                title='Home' />
            <View style={styles.container}>
                <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                >
                    {Location()}
                    {SearchBar()}
                    {Restauramts()}
                    <FoodCard onPress={
                        // ()=>navigation.navigate('HomeStack',
                        // { screen: 'FoodProduct',
                        //  params: { user: 'jane' },
                        //  })
                        ()=>navigation.navigate('FoodProduct',{
                         itemId: 86,
                         otherParam: 'anything you want here',
                    })
                    
                    }/>
                    <FoodCard onPress={()=>navigation.navigate('FoodProduct')}/>
                    <FoodCard onPress={()=>navigation.navigate('FoodProduct')}/>
                </KeyboardAwareScrollView>
            </View>

        </View>
    )

}

export default Home