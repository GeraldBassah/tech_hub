import React from 'react';
import {Text, View, Button, Image,TouchableOpacity,ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class SupportScreen extends React.Component{
    static navigationOptions= {
        headerStyle: {
            backgroundColor: "maroon",
        },
        headerTintColor:'white',
        title:'Support',
        headerTitleStyle:{
            color:'white',
        },
    };
    render(){
        return(
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Support</Text>
            </View>
        );
    }
}