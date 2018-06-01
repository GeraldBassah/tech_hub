import React, { Component } from 'react';
import { Container, Text, Content,Icon } from 'native-base';
import { ScrollView,Image,View,Dimensions,TouchableOpacity} from 'react-native';
import  { List,ListItem } from 'react-native-elements';
import {StackNavigator} from "react-navigation";
import {NewsFeedScreen} from "./Main";
import FirstScreen from './FirstScreen';

import COE from "./Halls/Colleges/COE";
import CABE from "./Halls/Colleges/CABE";
import COS from "./Halls/Colleges/COS";
import COHSS from "./Halls/Colleges/COHSS";
import CANR from "./Halls/Colleges/CANR";
import COHS from "./Halls/Colleges/COHS";




export default class Colleges extends Component {
    static NavigationOptions ={
        tabBarIcon:({ tintColor }) => {
            return <Icon name='ios-home-outline' style={{color:tintColor}} />
        }
    };
    render(){
        return(
            <ScrollView>
                <List>
                        <ListItem
                            roundAvatar
                            avatar={require('./Logos/COHSSLOGO.jpg')}
                            title={'COLLEGE OF HUMANITIES'}
                            onPress={()=> {this.props.navigation.navigate('COHSS')}}
                        />

                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COELOGO.png')}
                        title={'COLLEGE OF ENGINEERING'}
                        onPress={()=> {this.props.navigation.navigate('COE')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COHS.jpg')}
                        title={'COLLEGE OF HEALTH SCIENCES'}
                        onPress={()=> {this.props.navigation.navigate('COHS')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COSLOGO.jpg')}
                        title={'COLLEGE OF SCIENCE'}
                        onPress={()=> {this.props.navigation.navigate('COS')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/CANRLOGO.jpg')}
                        title={'COLLEGE OF AGRIC AND NATURAL RESOURCES'}
                        onPress={()=> {this.props.navigation.navigate('CANR')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/CABELOGO.jpg')}
                        title={'COLLEGE OF ART AND BUILT ENVIRONMENT'}
                        onPress={()=> {this.props.navigation.navigate('CABE')}}

                    />

                </List>
            </ScrollView>
        );
    }
}