import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, NavigatorIOS, Navigation, Button, FlatList, SafeAreaView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

function History({ navigation, route }) {
    const value = route.params.param1;
    const [cal, setData] = useState([]);
    setData(value)
   
            

    return (
        <View style={styles.container}>
        <ScrollView>
           {cal.map(item =>(
               <View key={item.key}
               ><Text>{item.price}</Text></View>
           ))}
        </ScrollView>
                

               

       

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default History;