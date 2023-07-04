/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import {
    appThemeColor,
    blackcolor,
    commonstyles,
    Dark_graycolor,
    dot_color,
    graycolor,
    light_blue,
    line_color,
    medium_gray,
} from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class CategoryRasiphalaluItemOne extends React.PureComponent {
    render() {
        let decode = require('html-entities-decoder');
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props?.navigation.navigate('horoscopeDetails', {
                            item: this.props?.item,
                            detailsData: this.props?.propsdata,
                        });
                    }}>
                    <View style={commonstyles.horoMainView}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={commonstyles.horoimageView}>
                                <Image
                                    source={require('../Assets/Images/daily.jpeg')}
                                    style={commonstyles.horoimage}
                                />
                            </View>
                            <View style={commonstyles.horotextView}>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                    style={commonstyles.horotext}>నేటి రాశి ఫలాలు
                                    ({moment(this.props?.item?.date_gmt).format('DD-MM-YYYY')})
                                </Text>
                            </View>
                        </View>
                        {/* more text */}
                        {/* <View style={commonstyles.horomore}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props?.navigation.navigate('రాశిఫలాలు‌');
                                }}>
                                <Text style={commonstyles.horomoretext}>More . . .</Text>
                            </TouchableOpacity>
                        </View> */}

                    </View>
                    {/* </View> */}
                </TouchableOpacity>

            </View>
        );
    }
}
export default CategoryRasiphalaluItemOne;
