import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, NavigatorIOS, Navigation, Button, FlatList, SafeAreaView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

function History({ navigation, route }) {

    const history = route.params.param1;
    const [his, setHis] = useState(history)
//for the Delete Button
    Delete = (value) => {
        var list = his.filter(item => item.key !== value)
        setHis(list)

    }




    return (
        <View style={styles.container}>
            <FlatList style={{ width: '100%',borderBottomWidth:1,borderBottomColor:"black"}}
                data={his}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (<View style={{ padding: '2%' }}>
                    <Text style={styles.item}>Price of the Product :{item.price}</Text>
                    <Text style={styles.item}>Final Price After Discount :{item.finalPrice}</Text>
                    <Text style={ styles.item}>Discount on the Product :{item.discount}</Text>
                    <Button key={item.key} title="Delete" onPress={() => this.Delete(item.key)}></Button>
                </View>)
                } />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        padding: '1%',
        margin:'1%'


    }
})
export default History;