/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import {commonstyles} from '../styles/commonstyles';

class DetailsComponentOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props?.item,
            });
          }}>
          <View style={commonstyles.cardViewHome}>
            <View style={commonstyles.cateviewImg}>
              <Image
                source={{
                  uri: this.props?.item?.web_featured_image,
                }}
                style={commonstyles.cateImage}
              />
            </View>
            <View style={commonstyles.cateviewText}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.latestText}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
              <View style={commonstyles.timeview}>
                <Text style={commonstyles.latesttime}>
                  {moment(this.props?.item?.date_gmt).format('DD-MMM-YYYY')} ,{' '}
                </Text>
                <Text style={commonstyles.latesttime}>
                  {moment(this.props?.item?.modified)
                    .utcOffset('+05:30')
                    .format('hh.mm a')}{' '}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentOne;
