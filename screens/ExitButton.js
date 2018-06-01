import React ,{Component} from 'react';
import {Alert, BackHandler, Backhandler, exitApp} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

 class ExitButton extends Component{
     static navigationOptions={
         drawerLabel:'Exit',
         drawerIcon: ({ tintColor }) =>
             <FontAwesome name='ios-menu'  size={24}
                          color={tintColor}
             />};


     backPressed = () => {

         Alert.alert(
             'Exit App',
             'Do you want to exit?',
             [
                 {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'Yes', onPress: () => BackHandler.exitApp()},
             ],
             { cancelable: false });

         return true;
     };
    render() {
         return(
             Alert.alert(
                 'Exit App',
                 'Do you want to exit?',
                 [
                     {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                     {text: 'Yes', onPress: () => BackHandler.exitApp()},
                 ],
                 { cancelable: false })

         );
     }
};


export default  ExitButton;
