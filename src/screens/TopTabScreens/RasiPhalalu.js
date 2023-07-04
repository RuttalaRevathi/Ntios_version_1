/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FlatList, Share, View } from 'react-native';
import getRasiPhalaluAction from '../../redux/actions/getRasiPhalaluAction';
import { Hyderabad, ShareUrl } from '../../utilities/urls';
import CategoryUI from '../../components/CategoryUI';
import HomeRasiphalaluItemOne from '../../components/HomeRasiphalaluItemOne';
import HomeRasiphalaluItemTwo from '../../components/HomeRasiphalaluItemTwo';
import { commonstyles } from '../../styles/commonstyles';
import CategoryRasiphalaluItemOne from '../../components/CategoryRasiphalaluItemOne';
import CategoryRasiphalaluItemTwo from '../../components/CategoryRasiphalaluItemTwo';


const RasiPhalaluScreen = ({
    navigation,
    rasiPhalaluData,
    rasiPhalaluLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRasiPhalaluAction('horoscope'));

    }, []);
    const rasiPhalaluItemOne = ({ item, index }) => (
        <CategoryRasiphalaluItemOne
          item={item}
          propsdata={rasiPhalaluData?.data}
          navigation={navigation}
          index={index}
    
        />
      );
      const rasiPhalaluItemTwo = ({ item, index }) => (
        <CategoryRasiphalaluItemTwo
          item={item}
          propsdata={rasiPhalaluData?.data}
          navigation={navigation}
          index={index}
    
        />
      );

    return (
        // <CategoryUI
        // data = {rasiPhalaluData}
        // navigation = {navigation}
        // title = {route.name}
        // categoryName ="horoscope"
        // />
        <View>
        <View style={commonstyles.flatView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={false}
            data={rasiPhalaluData?.data?.slice(0, 1)}
            onEndReachedThreshold={50}
            getItemLayout={(data, index) => (
              { length: 40, offset: 40 * index, index }
            )}
            renderItem={rasiPhalaluItemOne}
          />
        </View>
        <View style={commonstyles.flatView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={false}
            data={rasiPhalaluData?.data?.filter(obj => {
              return obj.horoscope_type === 'weekly';
            }).slice(0,1)}
            onEndReachedThreshold={50}
            getItemLayout={(data, index) => (
              { length: 40, offset: 40 * index, index }
            )}
            renderItem={rasiPhalaluItemTwo}
          />
        </View>
        </View>
    );
};

type Props = {
    rasiPhalaluData: Function,
    rasiPhalaluLoading: Boolean,
};
const mapStateToProps = state => ({
    rasiPhalaluData: state.rasiPhalauReducer?.rasiPhalaluData,
    rasiPhalaluLoading: state.rasiPhalauReducer?.rasiPhalaluLoading,
});
const mapDispatchToProps = {
    getRasiPhalaluAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(RasiPhalaluScreen);
