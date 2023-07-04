/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { blackcolor, commonstyles, ITEM_WIDTH, shadow_color, whitecolor } from '../styles/commonstyles';

class HomePhotogalleryItemOne extends React.PureComponent {
  render() {
    return (
      <View style={{ marginRight: 5, marginLeft: 15 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PhotoArticle', {
              item: this.props.item,
              detailsData: this.props.photosData?.data,
            });
          }}>
          <View style={{ width: Dimensions.get('window').width / 1.19 }}>
            <View style={{
              // backgroundColor: whitecolor,
              height: 180,
              //  borderRadius: 5,
              // borderBottomColor: shadow_color, borderBottomWidth: 2,
              // borderLeftColor: shadow_color, borderLeftWidth: 1,
              // borderRightColor: shadow_color, borderRightWidth: 1,
            }}>
              <View>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode:'contain',
                    // borderTopLeftRadius: 5,
                    // borderTopRightRadius: 5,
                    // borderRightColor: shadow_color,
                    // borderRightWidth: 1,
                   
                  }}
                  source={{ uri: this.props.item?.web_featured_image }}
                />
              </View>
              <View>
                <LinearGradient
                  colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
                  style={{
                    width: '100%', flex: 1.4, bottom: 0,
                    // borderBottomLeftRadius: 15,
                    // borderBottomRightRadius: 15,
                    position: 'absolute', height: 100,
                  }}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      color: whitecolor,
                      fontFamily: 'Mandali-Bold',
                      fontSize: 22,
                      marginLeft: 10,
                      marginRight: 10,
                      lineHeight: 29,
                      bottom: 10,
                      position: 'absolute',
                    }}>
                    {this.props?.item?.title?.rendered}
                  </Text>
                </LinearGradient>
                {/* <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{color: blackcolor, fontFamily: 'Mandali',
                  fontSize: 16, lineHeight: 25, left: 5, right: 2, paddingRight: 20,}}>
                  {this.props.item?.title?.rendered}
                </Text> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomePhotogalleryItemOne;
