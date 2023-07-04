/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class HomeComponentOne extends React.PureComponent {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Details', {
                item: this.props.item,
                detailsData: this.props?.propsdata,
              });
            }}>
            <View
              style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
              <Image
                source={{uri: this.props?.item?.web_featured_image}}
                style={commonstyles.HomeCateImg}
              />
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
                style={commonstyles.CategorysliderGradient}>
                <Text style={commonstyles.slidertext}>
                  {this.props?.item?.title?.rendered}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeComponentOne;
