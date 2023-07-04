/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import HomeStackNavigator from './src/navigation/stack-navigators/HomeStackNavigator';
import {store} from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getCinemaAction from './src/redux/actions/getCinemaAction';
import getRasiPhalaluAction from './src/redux/actions/getRasiPhalaluAction';
import getCartoonAction from './src/redux/actions/getCartoonAction';
import getHealthAction from './src/redux/actions/getHealthAction';
import getHyderabadAction from './src/redux/actions/getHyderabadAction';
import getTelanganaAction from './src/redux/actions/getTelanganaAction';
import getApAction from './src/redux/actions/getApAction';
import getNationalAction from './src/redux/actions/getNationalAction';
import getInterNationalAction from './src/redux/actions/getInterNationalAction';
import getSportsAction from './src/redux/actions/getSportsAction';
import getBusinessAction from './src/redux/actions/getBusinessAction';
import getNriAction from './src/redux/actions/getNriAction';
import getEditPageAction from './src/redux/actions/getEditPageAction';
import getZindagiAction from './src/redux/actions/getZindagiAction';
import getBathukammaAction from './src/redux/actions/getBathukammaAction';
import getAgricultureAction from './src/redux/actions/getAgricultureAction';
import getCookingAction from './src/redux/actions/getCookingAction';
import getVaasthuAction from './src/redux/actions/getVaasthuAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import { getKarimnagarAction } from './src/redux/actions/getKarimnagarAction';
import { getKhammamAction } from './src/redux/actions/getKhammamAction';
import { getMahabubnagarAction } from './src/redux/actions/getMahabubnagarAction';
import { getMedakAction } from './src/redux/actions/getMedakAction';
import { getNalgondaAction } from './src/redux/actions/getNalgondaAction';
import { getNizamabadAction } from './src/redux/actions/getNizamabadAction';
import { getRangareddyAction } from './src/redux/actions/getRangareddyAction';
import { getWarangalAction } from './src/redux/actions/getWarangalAction';


const App = () => {
  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getCinemaAction());
    store.dispatch(getRasiPhalaluAction());
    store.dispatch(getCartoonAction());
    store.dispatch(getHealthAction());
    store.dispatch(getHyderabadAction());
    store.dispatch(getTelanganaAction());
    store.dispatch(getApAction());
    store.dispatch(getNationalAction());
    store.dispatch(getInterNationalAction());
    store.dispatch(getSportsAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getNriAction());
    store.dispatch(getEditPageAction());
    store.dispatch(getZindagiAction());
    store.dispatch(getBathukammaAction());
    store.dispatch(getAgricultureAction());
    store.dispatch(getCookingAction());
    store.dispatch(getVaasthuAction());
    store.dispatch(getVideoAction());
    store.dispatch(getPhotoGalleryAction());
    store.dispatch(getKarimnagarAction());
    store.dispatch(getKhammamAction());
    store.dispatch(getMahabubnagarAction());
    store.dispatch(getMedakAction());
    store.dispatch(getNalgondaAction());
    store.dispatch(getNizamabadAction());
    store.dispatch(getRangareddyAction());
    store.dispatch(getWarangalAction());
    //hides the splash screen on app load.

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
             <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
