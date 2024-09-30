import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, AppState, Keyboard } from 'react-native';
import { BuildStyleOverwrite } from '../assets/style/BuildStyle';
import { Styles } from '../assets/style/styles';
import { Colors } from '../assets/Utils/Color';


var styles = BuildStyleOverwrite(Styles);

export default class CustomRemarksInput extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            titleTextColor: this.props.titleTextColor != undefined ? this.props.titleTextColor : "black"
        })
       // titleTextColor: this.props.titleTextColor != undefined ? this.props.titleTextColor : "black"
        styles = BuildStyleOverwrite(Styles);


        AppState.addEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active') {
            styles = BuildStyleOverwrite(Styles);
            this.setState({
                isActive: false,

            });
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={[styles['width_100%']]}>
                <View style={[]} removeClippedSubviews={true}>
                    <Text style={[styles['font_size_14_Regular'], this.state.titleTextColor == undefined ? styles['text_color_black'] : { color: this.state.titleTextColor },
                    ]}>{this.props.labelName}</Text> 
                    {/* {this.props.IsRequired && <Text style={[styles['text_color_red']]}>*</Text>} */}
                    <TextInput
                        style={[styles['width_100%'], styles['text_color_black'],
                        styles['font_size_14_Regular'], styles['top_5'],
                        this.props.backgroundColor == undefined ? styles['bg_white'] : { backgroundColor: this.props.backgroundColor },
                        styles['height_130'], styles['border_width_1'], styles['border_radius_6'], styles['padding_10'],
                        {
                            borderColor: Colors.grey,
                            textAlignVertical: 'top'
                        }]}
                        defaultValue={this.props.defaultValue}  // if the field is non editable by key-pad, then defaultValue should be implemented
                        // if the field is editable by key-pad, then value should be implemented
                        value={this.props.value}
                        keyboardType={this.props.keyboardType}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={Colors.darkgrey}
                        underlineColorAndroid="transparent"
                        editable={this.props.editable}
                        contextMenuHidden={this.props.contextMenuHidden}
                        multiline={this.props.multiline == undefined ? false : this.props.multiline}
                        onFocus={() => {
                            // Clipboard.setString('')
                            this.props.onFocus()
                        }}
                        onChangeText={(text) => {
                            this.props.onChangeText(text)
                        }}
                        onEndEditing={(text) => {
                            this.props.onEndEditing(text)
                        }}
                        maxLength={this.props.maxLength}
                        allowFontScaling={true}>
                    </TextInput>
                </View>
                {/* <View style={[styles['width_90%'],styles['centerItems'], styles['light_grey_bg_color'], styles['height_1']]} /> */}
            </View>
        )
    }
}