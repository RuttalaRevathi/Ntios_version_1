/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, medium_gray, whitecolor } from '../styles/commonstyles';
import WebView from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import getArticleDetailAction from '../redux/actions/getArticleDetailAction';
import HomeComponentTwo from '../components/HomeComponentTwo';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentThree from '../components/DetailsComponentThree';
import DetailsComponentOne from '../components/DetailsComponentOne';
import HomeRasiphalaluItemTwo from '../components/HomeRasiphalaluItemTwo';
// import Image from 'react-native-fast-image';
const screenWidth = Dimensions.get('window').width;
MaterialIcons.loadFont();
Feather.loadFont();

// let decode = require('html-entities-decoder');

const horoscopeDetails = ({ navigation, relatedData, relatedLoading,
  rasiPhalaluData,
  rasiPhalaluLoading, route,propsdata }: Props) => {
  const dispatch = useDispatch();
  const [detailsData, setDetailsData] = useState([]);
  // const [autiHeightData,setAutiHeightData] =useState();

  useEffect(() => {
    dispatch(getRelatedAction(route?.params?.item?.id));
    setDetailsData(route?.params?.detailsData);
    dispatch(getArticleDetailAction());
  }, []);

  useEffect(() => {
    goToTop();
  });
  const Scrollref = useRef();

  const goToTop = () => {
    Scrollref.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const source = route?.params?.item?.content?.rendered;
  var source1 = source?.replace('lazyload', 'text/javascript');
  //   const hor = route?.params?.item?.horoscope_date;
  //   const hor = {...route.params.item.filter(obj => {
  //     return obj.horoscope_type === 'weekly';
  //   })};
  //   console.log(hor,'=================>hor');

  return (
    <View style={commonstyles.container}>
      <View>
        <View style={HeaderStyle.subHeadercustom}>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ zIndex: 999 }}>
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 18, height: 18, top: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.6,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'http://www.facebook.com/sharer.php?u=' +
                  route?.params?.item?.link +
                  '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966',
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/facebook_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://twitter.com/intent/tweet?url=' +
                  route?.params?.item?.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/twitter_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'whatsapp://send?text=' + route?.params?.item?.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/whatsapp_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://t.me/share/url?url=' + route?.params?.item?.link
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/telegram_icon.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        ref={Scrollref}>
        <View>
          <View>
            <Image
              source={{ uri: route?.params?.item?.web_featured_image }}
              style={commonstyles.Detailslargecard}
            />
          </View>

          <View style={{ margin: 10 ,}}>
            <HTMLView
              value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
              stylesheet={headerStyles}
            />
          </View>

          <View style={{ flexDirection: 'row', start: 10 }}>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.date_gmt).format('MMMM DD , YYYY')} /{' '}
            </Text>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.modified)
                .utcOffset('+05:30')
                .format('hh.mm a')}{' '}
              IST{' '}
            </Text>
          </View>
          {/* description */}

          <View
            style={{
              width: screenWidth - 10,
              justifyContent: 'center',
              pointerEvents: 'none',
              paddingLeft: 10,
            }}>
            {/* <Text>{source1}</Text> */}
            <AutoHeightWebView style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
             scrollEnabled={false}
             androidLayerType="software"
              customStyle={`
              * {
                font-family: 'Mandali-Bold';
                line-height: 1.5;
                -webkit-user-select: none;
                  -webkit-touch-callout: none; 
                 }
                
              p {
                font-size: 16px;
                text-align:left;
                margin:10;
                font-family:'Mandali';
                line-height:35px
                                              }
                                              p img{
                                                width:100%;
                                                height:inherit
                                              }
                                              p iframe{
                                                width:100%;
                                                height:inherit
                                              }
                                              img{
                                                width:100%;
                                                height:inherit
                                              }
                                              p strong{
                                                color:#262A85 !importent
                                              }
                                              h2 span em strong{
                                                color:#262A85 !importent
                                              }
                                             
            `}
              source={{
                html: (source1 +=
                  "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>"),
                baseUrl: 'https://twitter.com',
              }}
              scalesPageToFit={false}
              viewportContent={'width=device-width, user-scalable=no'}

            />
          </View>
          {/* weekly horoscope */}
          <View style={{ height: 70, width: '100%', backgroundColor: appThemeColor, marginBottom: 5, marginTop: 5 }}>
            <View style={commonstyles.flatView}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                data={rasiPhalaluData?.data?.filter(obj => {
                  return obj.horoscope_type === 'weekly';
                }).slice(0, 1)}
                onEndReachedThreshold={50}
                getItemLayout={(data, index) => (
                  { length: 40, offset: 40 * index, index }
                )}
                renderItem={({ item, index }) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('horoscopeWeeklyDetails', {
                          item: item,
                          detailsData:propsdata,
                        });
                      }}>
                      <View style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ flex: 2, alignItems: 'center', marginVertical: 20 }}>
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={{
                                color: whitecolor,
                                fontFamily: 'Mandali-Bold',
                                fontSize: 20,
                                lineHeight: 29,
                              }}>ఈ వారం రాశి ఫలాలు {' '}({(item?.horoscope_date)})
                            </Text>
                          </View>
                        </View>


                      </View>
                      {/* </View> */}
                    </TouchableOpacity>

                  </View>
                )
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
  p: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Mandali',
    lineHeight: 30,
    paddingTop: 10
  },
});
const headerStyles = StyleSheet.create({
  p: {
    color: Header_text,
    fontSize: 24,
    fontFamily: 'Mandali-Bold',
    lineHeight: 30,
    paddingTop: 10
  },
});
const RelatedTextStyles = StyleSheet.create({
  p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
});
type Props = {

  rasiPhalaluData: Function,
  rasiPhalaluLoading: Boolean,
};

const mapStateToProps = state => ({
  rasiPhalaluData: state.rasiPhalauReducer?.rasiPhalaluData,
  rasiPhalaluLoading: state.rasiPhalauReducer?.rasiPhalaluLoading,
});
const mapDispatchToProps = {
  getRelatedAction,
  getArticleDetailAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(horoscopeDetails);
