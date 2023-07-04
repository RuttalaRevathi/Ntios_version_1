/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
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
} from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeComponentTwo extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props?.navigation.navigate('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.HomeComp2MainView}>
            <View style={commonstyles.HomeComp2DotView}>
              <View style={{width: 10, marginTop: 7}}>
                <FontAwesome name="circle" size={8} color={appThemeColor} />
              </View>
              <View style={{flex: 2}}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={commonstyles.HomeComp2Text}>
                  {decode(this.props.item?.title?.rendered)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeComponentTwo;
