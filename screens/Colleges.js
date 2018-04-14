import React, { Component } from 'react';
import { Container, Text, Content,Icon } from 'native-base';
import { ScrollView,Image,View,Dimensions,TouchableOpacity} from 'react-native';
import  { List,ListItem } from 'react-native-elements';
import {StackNavigator} from "react-navigation";
import {NewsFeedScreen} from "./Main";
import FirstScreen from './FirstScreen';






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
                            onPress={()=> {this.props.navigation.navigate('FirstScreen')}}
                        />

                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COELOGO.png')}
                        title={'COLLEGE OF ENGINEERING'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COHS.jpg')}
                        title={'COLLEGE OF HEALTH SCIENCES'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/COHSSLOGO.jpg')}
                        title={'COLLEGE OF SCIENCE'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/CANRLOGO.jpg')}
                        title={'COLLEGE OF AGRIC AND NATURAL RESOURCES'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/CABELOGO.jpg')}
                        title={'COLLEGE OF ART AND BUILT ENVIRONMENT'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/GRASSAGLOGO.jpg')}
                        title={'GRADUATE STUDENT ASSOCIATION'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />

                </List>
            </ScrollView>
        );
    }
}