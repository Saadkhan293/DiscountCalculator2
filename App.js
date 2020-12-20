import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,NavigatorIOS,Navigation,Button,} from 'react-native';

import Discount from './components/Discount';
import History from './components/History'
import headerButton from './components/Discount'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack=createStackNavigator();
export default function App(){
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Discount" component={Discount} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
