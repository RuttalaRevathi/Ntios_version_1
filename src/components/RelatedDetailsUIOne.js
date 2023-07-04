/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { appThemeColor, commonstyles } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card } from 'react-native-paper';
import HomeComponentOne from '../components/HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';



function RelatedDetailsUIOne(props) {
  useEffect(() => {
  });
  const renderItemOne = ({item}) => (
    <HomeComponentTwo
         item={item}
         propsdata={props?.data}
         navigation={ props?.navigation}

    />
  );
  return (
    <View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={commonstyles.relatedText}>Related News</Text>
            </View>
            {/* Related news FlatList */}

              <View >

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  data={props?.data}   
                  renderItem={renderItemOne}
                />

              </View>

          </View>
  );
}
export default RelatedDetailsUIOne;
