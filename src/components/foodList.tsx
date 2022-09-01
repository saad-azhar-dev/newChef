import React, { FC } from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'
import StarRating from 'react-native-star-rating';

import { maskgroup, calendar, van, chop } from '../constantValues/images'
import { black, danger, darkBlue, darkGrey, grey, lightBlack, lightBlue, lightGrey, offwhite, white, yellow } from '../constantValues/colors'
import { Text } from 'react-native-animatable'
import { medium, regular } from '../constantValues/fontsFamily'
import { big_tiny, small, tiny } from '../constantValues/fontsSize'
import { cartInterface, orderCompInterface } from '../InterFace/headerText'
import { Icon } from 'react-native-elements'

// will take care of interface later on
const FoodCard: FC<any> = (props) => {
    const { price, name,onPress } = props

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

                    <View style={styles.locationView}>
                        <Icon
                            name={'location-on'}
                            type={'material'}
                            iconStyle={{ ...styles.iconStyle, left: -4 }}
                            tvParallaxProperties={undefined}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.locText}>
                                {'Crowne Plaza Hotel Jeddah ground floor,Jeddah1.9 km'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.locationView}>
                        <StarRating
                            disabled={false}
                            emptyStar={'star-o'}
                            fullStar={'star'}
                            halfStar={'ios-star-half'}
                            iconSet={'FontAwesome'}
                            maxStars={5}
                            starStyle={{ marginLeft: 0, marginRight: 0 }}
                            starSize={20}
                            rating={1}
                            // selectedStar={(rating) => onStarRatingPress(rating)}
                            fullStarColor={yellow}
                            containerStyle={{ marginRight: 10, marginTop: 0 }}
                        // buttonStyle={{backgroundColor:'red'}}
                        />
                        <Text style={styles.ratingText}>(5)</Text>
                    </View>

                    <View style={styles.locationView}>
                        <Image
                            source={chop}
                            style={styles.chopImg}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.chopText}>
                                {'Can serve up to 30 people'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.orderView}>
                        <Text style={styles.orderText}>Order 24 hours before</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default FoodCard

const styles = StyleSheet.create({
    wraper: {
        shadowColor: lightBlue,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: white,
        elevation: 2,
        borderRadius: 10,
        marginTop:10,
        marginBottom:10,
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgStyle: {
        width: 120,
        height:'auto',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    leftView: {
        alignSelf: 'flex-start',
        marginTop:3,
        flex: 1,
        marginLeft: 7,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameText: {
        color: black,
        fontFamily: medium,
        fontSize:big_tiny
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 2,
    },
    locText: {
        color: grey,
        fontFamily: regular,
        fontSize: tiny,

    },
    ratingText: {
        color: black,
        fontSize: small,
        fontFamily: regular,
    },
    chopImg: {
        width:25,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    chopText: {
        color: lightBlack,
        fontFamily: regular,
        fontSize: tiny,
        marginLeft: 5,

    },
    orderView: {
        alignSelf: "flex-end",
        right: 10,
        // marginTop: 5,
        marginBottom: 5,
    },
    orderText: {
        color: danger,
        fontSize: tiny,
        fontFamily: regular,
    },





    iconBg: {
        backgroundColor: darkBlue,
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greyBg: {
        backgroundColor: lightGrey,
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        fontSize: 20,
        color: darkBlue,
    },

    priceText: {
        color: grey,
        fontFamily: regular,
        fontSize: small,
    },
    smallImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    tinyHeading: {
        color: darkGrey,
        fontFamily: regular,
        fontSize: big_tiny,
        marginLeft: 5,
    },
    detailView: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    deleteStyle: {
        color: danger,
        fontSize: 25,
    }
})