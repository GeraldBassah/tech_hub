import React, { Component } from 'react';
import { Platform,StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { Container, Text, Content,Icon,Title } from 'native-base';
import { StackNavigator,NavigationActions,DrawerNavigator} from 'react-navigation';
//Drawer imports
import Drawer from './screens/Drawer';

//Drawer imports


import Main from './screens/Main';
import FirstScreen from "./screens/FirstScreen";

//import MenuButton from './screens/Main';



//drawer navigator code



//drawe navigator code

export default class App extends Component {

    render() {
        return (<Drawer/>);
    }
}