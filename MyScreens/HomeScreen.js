import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity, Alert, Image
} from 'react-native';
import { WebView } from "react-native-webview";
import LinearGradient from 'react-native-linear-gradient';
import s from './style';

import { useNavigation } from '@react-navigation/native';

const darkHandler = () => {
  setTimeout(() => StatusBar.setBarStyle("dark-content"), 3000)
};


const Home = () => {


  const navigation = useNavigation();





  const orderonline = () => {
    navigation.navigate("Order");

  }


  const contac = () => {
    navigation.navigate("Contact");

  }


  return (
    <>
   <SafeAreaView  style={styles.container}>
     <ScrollView>
    <LinearGradient colors={['#F3350C', '#a80202', '#F52617']} style={styles.linearGradient}>
            <View style={s.userContainer}>
                <Image style={s.userImagen} source={require('./logo.png')} />

            </View>
            
                <View style={{ flex: 1, alignItems: 'center', marginTop: 80 }}>
                    <Text style={{ fontSize: 22, color: '#FFF', fontWeight: 'bold' }}>Continue:</Text>
                    <TouchableOpacity
                        style={{
                            marginTop: 20, borderWidth: 0.5,
                            borderColor: '#fff', borderRadius: 100, width: 220, textAlign: 'center', borderColor: "#fff", height: 45, backgroundColor: '#f5b12f',  alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => orderonline()}>
                        <Text style={{ color: '#a80202', fontSize: 25, justifyContent: 'center' }}>Order Online</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, borderRadius: 100, width: 220, height: 45, backgroundColor: '#fff', padding: 5, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => contac()}>
                        <Text style={{ color: '#a80202', fontSize: 20 }}>  Contact Us</Text>
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
      borderRadius: 5,
      paddingBottom: 100
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

export default Home;