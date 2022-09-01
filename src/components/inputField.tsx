import React, { FC } from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Image
} from 'react-native'
import { Icon } from 'react-native-elements'
import { darkBlue, darkGrey, lightGrey } from '../constantValues/colors'

import {inputIf, Styles} from '../InterFace/headerText'

const InputField: FC<inputIf> = React.forwardRef((props: inputIf, ref: React.Ref<TextInput>) => {
    const { iconName, iconType, passIconName, passIconType, hideShowPassword, image } = props

    return (
        <View style={[styles.wraper, props.inputContainerStyle]}>
            {iconName ?
                <Icon
                    tvParallaxProperties={undefined}
                    name={iconName}
                    type={iconType}
                    iconStyle={styles.passIcon}
                />
                : image ?
                    <Image
                        source={image}
                        style={styles.imageStyle}
                    /> :
                    null}
            <TextInput
                ref={ref}
                underlineColorAndroid="transparent"
                secureTextEntry={props.secureTextEntry}
                editable={props.editable}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor || 'grey'}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                value={props.value}
                returnKeyType={props.returnKeyType}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                textAlignVertical={props.textAlignVertical}
                style={[styles.Input, props.InputStyle]}
            />
            <Icon
                name={passIconName}
                tvParallaxProperties={undefined}
                type={passIconType}
                iconStyle = {passIconName=='eye'? {...styles.passIcon,color:darkGrey} :styles.passIcon}
                onPress={hideShowPassword}
            />
        </View>
    )

}
)

export default InputField

const styles = StyleSheet.create<Styles>({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:lightGrey,
        borderBottomWidth: 1.5,
    },

    icon: {
        fontSize: 20,
        color: 'red',
    },
    passIcon: {
        fontSize: 20,
        color:darkGrey
    },
    Input: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal:0,
        paddingVertical: Platform.OS == 'android' ? 8 : 12,
    },
    imageStyle: {
        width: 18,
        height: 18
    }
})

