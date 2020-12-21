import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Navigation, NavigatorIOS, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import History from './History'
import { useEffect } from 'react';


function Discount({ navigation, route }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [disableButton, setDisable] = useState(true);
  const [data, setData] = useState([
  ]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ paddingRight: 10 }}>
          <Button
            title="history"
            color="black"
            onPress={() => navigation.navigate('History', { param1: data, })}
          />
        </View>
      ),
    })
  })
  calculations = () => {
    var value = price - price * discount / 100;
    setFinalPrice(value);


  }
  save = () => {
    setData( {
      price: price,
      discount: discount,
      finalPrice: finalPrice
    })
    console.log(data)
  }



  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 24 }}>A Discount Calculator</Text>
      <TextInput
        style={{ height: 40, borderWidth: 1, width: '80%', textAlign: 'center', marginBottom: '5%' }}
        keyboardType="numeric" maxLength={4}
        placeholder="Enter the price of the Product"
        onChangeText={(value) => setPrice(value)} />
      <TextInput
        style={{ height: 40, borderWidth: 1, width: '80%', textAlign: 'center', marginBottom: '5%' }}
        keyboardType="numeric"
        placeholder="Enter the Discount on the Product"
        onChangeText={(value) => setDiscount(value)} />
      <Text style={{ height: 40, borderWidth: 1, width: '80%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }} >Your Final Price is : {finalPrice}</Text>
      <View style={{ flexDirection: "row" }}><TouchableOpacity onPress={() => this.calculations()} style={{ margin: "5%", backgroundColor: "black", padding: '5%' }} title="Press"><Text style={{ color: "white" }}>CALCULATE</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.save()} style={{ margin: "5%", backgroundColor: "black", padding: '5%' }} title="Press"><Text style={{ color: "white" }}>Save Your calculations</Text></TouchableOpacity>
      </View>


    </View>
  );




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'

  }

})
export default Discount
