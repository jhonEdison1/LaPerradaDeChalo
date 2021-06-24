import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
  import s from '../MyDrawer/style';
  import { WebView } from "react-native-webview";
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from '../MyScreens/HomeScreen';
import OrderScreen from '../MyScreens/OrderScreen';
import ContactScreen from '../MyScreens/ContactScreen';


function DrawerMenu(props) {
  return (
      <TouchableOpacity onPress={props.navigation}>
          <View style={s.menuContainer}>
              <View style={s.tituloContainer} >
                  <Text style={s.tituloTxt}>{props.titleName}</Text>
              </View>
          </View>
      </TouchableOpacity>
  )
}

function Menu(props) {

  return (
      <View style={s.container}>
          <View style={s.bgContainer}>

          </View>
          <View style={s.items}>
              <DrawerMenu iconName='logo' style={s.draweritem} titleName='User' navigation={() => props.navigation.navigate('Home')} />
              <DrawerMenu iconName='home' titleName='Order Online' navigation={() => props.navigation.navigate('Order')} />
              <DrawerMenu iconName='home' titleName='Contact Us' navigation={() => props.navigation.navigate('Contact')}  />
      
          </View>

      </View>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
      <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Order" component={OrderScreen} />
              <Drawer.Screen name="Contact" component={ContactScreen} />
          </Drawer.Navigator>
      </NavigationContainer>

  );
}
export default MyDrawer

  

  