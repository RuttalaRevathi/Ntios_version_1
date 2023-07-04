/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { HeaderStyle } from '../styles/Header.Styles';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContactUs from '../screens/contactScreens/ContactUs';
import AboutUs from '../screens/contactScreens/AboutUs';
import PrivacyPolicy from '../screens/contactScreens/PrivacyPolicy';
import Terms from '../screens/contactScreens/Terms';
import Modal from "react-native-modal";
import SideMenu from '../components/SideMenu';
import Hyderabad from '../screens/TopTabScreens/Hyderabad';
// import WarangalScreen from '../screens/DistrictScreens/Warangal';
AntDesign.loadFont();

const Drawer = createDrawerNavigator();

const DrawerNavigator = (navigation) => {
  return (
    <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
              >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    <Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="About"
        component={AboutUs}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyPolicy}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Terms"
        component={Terms}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

