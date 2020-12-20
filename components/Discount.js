import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Navigation,NavigatorIOS,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import History from './History'


function Discount ({navigation,route}){
    navigation.setOptions({
        headerRight: () => (
          <View style={{ paddingRight: 10 }}>
            <Button
              title="history"
              color="black"
              onPress={() => navigation.navigate('History')}
            />
          </View>
        ),
      });
  

        
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20,fontWeight:'bold',padding:24}}>A Discount Calculator</Text>
                <TextInput style={{height:40,borderWidth:1,width:'80%',textAlign:'center',marginBottom:'5%'}} placeholder="Enter the price of the Product" />
                <TextInput style={{height:40,borderWidth:1,width:'80%',textAlign:'center',marginBottom:'5%'}} placeholder="Enter the Discount on the Product" />
                <Text style={{height:40,borderWidth:1,width:'80%',textAlign:'center',justifyContent:'center',alignItems:'center'}} >Discount</Text>
               

            </View>
        );
  
   


}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center'

    }

})
export default Discount
