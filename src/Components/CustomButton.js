import React from 'react';
import { Styles } from '../assets/style/styles';
import { BuildStyleOverwrite } from '../assets/style/BuildStyle';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from '../assets/Utils/Color';


var styles = BuildStyleOverwrite(Styles);
const CustomButton = ({ title, onPress, buttonBg, btnWidth, titleTextColor, textAlign, margin, isBoldText, underLine, showCall, showArrow, borderWidth, borderRadius, borderColor }) => {

    return (
        <View style={[buttonBg == 'transparent' ? undefined : margin == undefined ? styles['margin_10'] : margin, styles['button_height_45'], styles['alignItems_center'], styles['centerItems'], { width: btnWidth, borderWidth: borderWidth != undefined ? borderWidth : 0, borderRadius: borderRadius != undefined ? borderRadius : 0, borderColor: borderColor != undefined ? borderColor : Colors.white }]}>
            <TouchableOpacity style={[styles['height_100%'], btnWidth != undefined ? styles['width_100%'] : styles['width_95%'], styles['border_radius_8'], styles['justify_content_center'], styles['align_self_center'], { backgroundColor: buttonBg }]} onPress={onPress}>
                {showCall != undefined ? <Image style={[styles['width_height_30'], styles['absolute_position'], styles['margin_left_10']]} source={require('../assets/images/callIconWhite.png')}></Image> : undefined}
                {showArrow != undefined ? <Image style={[styles['width_height_10'], styles['absolute_position'], styles['right_10'], styles['tint_color_white']]} source={require('../assets/images/rightArrowSmall.png')}></Image> : undefined}
                <Text style={[underLine != undefined ? styles['text_underline'] : undefined, [textAlign == 'left' ? undefined : styles['text_align_center'], buttonBg == 'transparent' ? undefined : styles['margin_10'], (isBoldText == undefined) ? styles['font_size_16_semibold'] : styles['font_size_14_semibold'], { color: titleTextColor, left:showCall != undefined ? 15 :0 }]]} numberOfLines={2} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;