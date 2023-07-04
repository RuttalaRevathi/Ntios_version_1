/* eslint-disable prettier/prettier */
import { relative } from 'patch-package/dist/path';
import { StyleSheet, Dimensions } from 'react-native';
// export const appThemeColor = "#337DFF"
//3349FF,339fff
export const appThemeColor = '#262A85';
export const whitecolor = '#fff';
export const graycolor = '#e4e3e3';
export const Dark_graycolor = '#63666A';
export const medium_gray = '#D3D3D3';
export const blackcolor = '#000';
// export const gallerycolor = "#FFC300"
export const gallerycolor = '#696AAA';
export const light_blue = '#d8f3fc';
export const dark_blue = '#bae6f5';
export const Header_text = '#262A85';
export const Header_BG_Color = '#030533';
export const TimeStamp = '#8D8D8D';
export const Gary_Light = '#ecf1f5';
export const shadow_color = '#ccc';
export const grid_color = '#F2D7EE';
// export const Dark_Gray ="#63666A"
export const dot_color = '#52b1e3';
export const line_color = '#c7de8b';

// export const Dark_Gray ="#63666A"
export const Dark_Gray = '#85929e';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export const commonstyles = StyleSheet.create({
  // new styles
  scroll: { backgroundColor: whitecolor },
  TextView: {
    flexDirection: 'row', flex: 2,
    fontFamily: 'Mandali-Bold', fontSize: 20, lineHeight: 33, justifyContent: 'center',
  },
  Textdot: {
    marginTop: 10,
  },
  HomeCateImg: {
    height: 200,
    width: ITEM_WIDTH - 30,
    borderRadius: 15,
  },
  CategorysliderGradient: {
    width: ITEM_WIDTH - 30, flex: 1.4, bottom: 0, borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute', height: 100,
  },
  HomeComp2DotView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    margin: 5,
    borderBottomColor: medium_gray,
    borderBottomWidth: 1.5,
  },
  HomeComp2MainView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  HomeComp2Text: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 20,
    lineHeight: 31,
    marginLeft: 5,
    justifyContent: 'center',
  },
  Homecartoonimg: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4,
  },
  HomePhotoimgOne: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    height: Dimensions.get('window').height - 500,
  },
  HomePhotoimgTwo: {
    width: Dimensions.get('window').height * 0.20,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 3,
  },
  //
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: whitecolor,
  },
  spinnerView: { justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  spinnerText: { fontSize: 16, textAlign: 'center', color: '#000000' },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  cateMView: {
    flexDirection: 'row',
    left: 10,
    marginRight: 10,
    flex: 2,
  },
  menuview: {
    // backgroundColor: appThemeColor,
    alignItems: 'center',
    marginRight: 10,
    left: 20,
  },
  menutext: {
    // backgroundColor: whitecolor,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: blackcolor,
    fontSize: 22,
    fontFamily: 'Mandali-Bold',
    // fontWeight: '500'
  },
  latestMainView: { width: Dimensions.get('window').width / 2.2, margin: 5 },
  latestsubView: {
    backgroundColor: whitecolor,
    height: 155, borderRadius: 5,
    borderBottomColor: shadow_color, borderBottomWidth: 2,
    borderLeftColor: shadow_color, borderLeftWidth: 1,
    borderRightColor: shadow_color, borderRightWidth: 1,
  },
  latestimgTag: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderRightColor: shadow_color,
    borderRightWidth: 1,
  },
  latestTxtTag: {
    color: blackcolor, fontFamily: 'Mandali',
    fontSize: 16, lineHeight: 25, left: 5, right: 2, paddingRight: 20,
  },
  slidercard: {
    height: 200,
    width: ITEM_WIDTH - 20,
    borderRadius: 15,

  },
  photocard: {
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'contain',
    aspectRatio: 9 / 9,
    borderRadius: 5,

  },
  videocard: {
    height: Dimensions.get('window').height * 0.32,
       resizeMode: 'contain',
    aspectRatio: 10 / 9,
    borderRadius: 5,
 
  },
  pagination: {
    position: 'relative',
    // top: -20,
  },
  slidertext: {
       color: whitecolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    bottom: 10,
    position: 'absolute',
    paddingTop: 10
  },
  photoview: {
    backgroundColor: gallerycolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10, paddingTop: 10,
  },
  phototextview: {
    flexDirection: 'row', paddingLeft: 10,
    paddingRight: 10, paddingTop: 10, flex: 1,
  },
  ptext: {
    color: whitecolor, fontSize: 25,
    marginEnd: 5, fontFamily: 'Mandali-Bold',
  },
  phototext: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25,
  },
  sliderGradient: {
    width: ITEM_WIDTH - 20, flex: 1.4, bottom: 0, borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute', height: 100,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

  },
  Category: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 27,
    top: 8,
    left: 10,
    // fontWeight: '400'

  },
  sliderView: {
    position: 'relative', backgroundColor: 'transparent',
  },
  dot: {
    marginTop: 22, marginLeft: 15,
  },
  latestCard: {
    backgroundColor: '#fff',
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestImage: {
    width: '100%', height: screenHeight * 0.12,
    borderRadius: 10,
  },
  cateView: { flexDirection: 'row', marginLeft: 5, width: '100%' },
  cateImage: { width: 120, height: 90, borderRadius: 10 },
  latestText: {
    color: blackcolor, fontFamily: 'Mandali-Bold', fontSize: 20, lineHeight: 25
    , marginLeft: 5, justifyContent: 'center',paddingTop:5
  },
  latesttime: { color: appThemeColor, fontSize: 16, fontFamily: 'JIMS' },

  cardViewFirst: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardView: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: shadow_color, borderBottomWidth: 2,
    borderLeftColor: shadow_color, borderLeftWidth: 1,
    borderRightColor: shadow_color, borderRightWidth: 1,
  },
  latestViewcard: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    width: '100%',
    // height:120,
    borderRadius: 10,
    // flexDirection: 'row',
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,

  },
  cardViewHome: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: shadow_color, borderBottomWidth: 2,
    borderLeftColor: shadow_color, borderLeftWidth: 1,
    borderRightColor: shadow_color, borderRightWidth: 1,

  },
  cinemaText: {
    // color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 29,
    color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 30,
  },
  SportCard: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: 170,
    // height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row',
  },

  sportimage: {
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 10, resizeMode: 'center',
  },
  CartoonCard: {
    width: '95%',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 10,
    borderRadius: 5,
    height: 'auto',
    flexDirection: 'row',
    paddingRight: 10,
  },
  pcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.32,
    flexDirection: 'row',
  },
  vcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: whitecolor,
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row',
  },
  pimg: {
    width: '98%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  vimg: {
    width: '96%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  cartoonimg: {
    width: Dimensions.get('window').height * 0.23,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4,
  },
  photoimage: {
    width: '110%',
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 15,
    resizeMode: 'center',
  },
  SportText: {
    color: blackcolor, fontFamily: 'Mandali', fontSize: 20,
  },
  Detailslargecard: {
    flex: 1,
    height: 230,
    margin: 10,
    borderRadius: 10,
    resizeMode:'contain',
  },
  detailTime: {
    color: TimeStamp,
    fontFamily: 'JIMS',
    fontSize: 20
   

  },
  timeview: {
    flexDirection: 'row',
    top: -5,
  },
  cateviewText: {
    flex: 1.9,
    fontFamily: 'Mandali', fontSize: 20, lineHeight: 33, justifyContent: 'center',
  },
  cateviewImg: { marginRight: 5, flexDirection: 'row' },
  cateflist: { paddingBottom: 100, top: 10, margin: 5 },
  photoflist: { paddingBottom: 150, top: 10, margin: 5 },

  videoImg: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10, resizeMode: 'stretch',
  },
  categoryView: { flex: 1.7, flexDirection: 'row' },
  flatView: { position: 'relative', margin: 5, justifyContent: 'center', display: 'flex' },
  bgDarkGrey: {
    width: '100%', backgroundColor: '#85929e', paddingTop: 10,
    paddingBottom: 10, paddingRight: 3, paddingLeft: 3,
    borderTopLeftRadius: 8, borderTopRightRadius: 8,
  },
  prevText: {
    color: appThemeColor,
    textAlign: 'center', fontSize: 20,
    fontFamily: 'RobotoCondensed-Regular',
  },
  prevNextMainView: {
    flexDirection: 'row', flex: 1,
    justifyContent: 'space-between',
    marginTop: 5, marginBottom: 5,
  },
  prevView: { flex: 0.25, height: 30, justifyContent: 'center', marginLeft: 10 },
  nextView: { flex: 0.2, height: 30, justifyContent: 'center', marginRight: 10 },
  relatedText: { color: '#000', fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  photoflash: { color: whitecolor, fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  nextText: { color: appThemeColor, fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  flashView: {
    backgroundColor: gallerycolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10, paddingTop: 10,
  },
  flashtext: {
    color: whitecolor,
    fontFamily: 'Mandali-Bold',
    // fontWeight:'bold',
    fontSize: 22,
    // marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25,
  },
  categoryMview: { flexDirection: 'row', bottom: 5, flex: 1 },
  moreview: { alignContent: 'flex-end', alignItems: 'flex-end' },
  moretext: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 20, color: appThemeColor,
  },
  loadingview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  loadingtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
  // Horoscope new design 17/3 /23
  horoMainView:{
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    margin: 5,
    borderBottomColor: medium_gray,
    borderBottomWidth: 1.5,
},
horoimageView:{marginRight: 5, 
  flexDirection: 'row'},
horoimage:{ width: 120, height: 90, 
  borderRadius:5,resizeMode:'contain'},
horotextView:{ flex: 2},
horotext:{
  color: blackcolor,
  fontFamily: 'Mandali-Bold',
  fontSize: 20,
  lineHeight: 31,
  marginLeft: 5,
  marginVertical: 20,
},
horomore:{ justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' },
horomoretext:{
  fontFamily: 'RobotoCondensed-Regular',
  fontSize: 20, color: appThemeColor,
},

});
