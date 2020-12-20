import React,{Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,NavigatorIOS,Navigation,Button} from 'react-native';
import { DataTable } from 'react-native-paper';
 
function History({navigation,route}){
        return(
           <DataTable>
               <DataTable.Header>
                   <DataTable.Title>Product Price</DataTable.Title>
                   <DataTable.Title>Discount</DataTable.Title>
                   <DataTable.Title>Final Price</DataTable.Title>
                   <DataTable.Title></DataTable.Title>
               </DataTable.Header>
               <DataTable.Row>
                   <DataTable.Cell>222</DataTable.Cell>
                   <DataTable.Cell>222</DataTable.Cell>
                   <DataTable.Cell>222 </DataTable.Cell>
                   <DataTable.Cell><Button title="Delete"></Button></DataTable.Cell>
                   
               </DataTable.Row>
           </DataTable>
        )
    
}
export default History