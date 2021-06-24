import React, {  useContext, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import { WebView } from "react-native-webview";

import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
const darkHandler = () => {
    setTimeout(() => StatusBar.setBarStyle("dark-content"), 3000)
  };


const Order = () => {
  const navigation = useNavigation();
  let jsCode = `var offset = document.getElementById("SITE_HEADER").offsetHeight;
  document.getElementById("SITE_HEADER").style.display = "none";
 
  
  document.getElementById("SITE_FOOTER").style.display = "none";`;
return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HeaderBackButton tintColor={'red'} style={{marginTop:0}}
     
        onPress={() => navigation.goBack()}
      />
             
        <WebView
        
        onLoad={() => { darkHandler(); }}
        scrollEnabled={true}
        source={{ uri: "https://www.laperradadechalo.com/order-online" }}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        onNavigationStateChange={() => StatusBar.setBarStyle("dark-content")}
        />

            
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: 'stretch',
      backgroundColor: 'white',
    }
  });
export default Order;