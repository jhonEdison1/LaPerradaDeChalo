import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image, Button
} from 'react-native';
import { WebView } from "react-native-webview";

import s from './style';
import { Linking } from 'react-native'



import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderBackButton } from '@react-navigation/stack';





const latitude = "10";
const longitude = "20";
const label = "83 -12 Northen Blvd Jackson Heights, NY 11372";

const url = Platform.select({
  ios: "maps:" + latitude + "," + longitude + "?q=" + label ,
  android: "geo:" + latitude + "," + longitude + "?q=" + label
});



const Contact = () => {
  const navigation = useNavigation();
  return (
    <>
    
    <SafeAreaView  style={styles.container}>
      <ScrollView>
      <LinearGradient colors={['#F3350C', '#a80202', '#F52617']} style={styles.linearGradient}>
      
        

        <HeaderBackButton tintColor={'white'} style={{marginTop:10, marginLeft: -10}}
     
     onPress={() => navigation.goBack()}
   />
   <View style={s.userContainer2 }>
             <Image style={s.userImagen, {width: 250 , height:250}} source={require('./logo.png')} />

   </View>
     <View style={{alignItems: 'center', marginTop: 0 }}>
       <Text style={{ fontSize: 40, color: '#FFF', fontWeight: 'bold' }}>Contact Us</Text>
       <Text onPress={() => { Linking.openURL('tel:7186396677'); }}
         style={{ fontSize: 30, color: '#FFF', marginTop: 10, fontWeight: 'bold' }}>718-639-6677
     </Text>
       <Text onPress={() => { Linking.openURL('tel:7186391030'); }}
         style={{ fontSize: 30, color: '#FFF', marginTop: 10, fontWeight: 'bold' }}>718-639-1030
     </Text>




       <TouchableOpacity onPress={() => Linking.openURL('mailto:perradadechalony@gmail.com')}>
         <Text style={{ fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >perradadechalony@gmail.com</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Linking.canOpenURL(url).then(supported => {
         if (supported) {
           return Linking.openURL(url);
         } else {
           const browser_url =
             "https://www.google.de/maps/@" +
             latitude +
             "," +
             longitude +
             "?q=" +
             label;
           return Linking.openURL(browser_url);
         }
       })}>
         <Text style={{ textAlign:'center' , fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >83 -12 Northen Blvd.
Jackson Heights, NY 11372</Text>

         </TouchableOpacity>
         


     </View>

       
        
    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
   
    </>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F52617'
  },

  titulo: {

    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 70 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});
export default Contact;