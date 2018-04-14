import React, { Component } from 'react';
import { Container, Text, Content,Icon } from 'native-base';
import  { List,ListItem } from 'react-native-elements';
import { ScrollView,Image } from 'react-native';
import FirstScreen from './FirstScreen';

export default class Halls extends Component {
    static NavigationOptions ={
        tabBarIcon:({ tintColor }) => {
            return <Icon name='ios-home-outline' style={{color:tintColor}} />
        }
    };
    render(){
        return (
            <ScrollView>
                <List>
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/CONTILOGO.jpg')}
                        title={'UNITY HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/KATANGALOGO.jpg')}
                        title={'UNIVERSITY HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/REPULOGO.jpg')}
                        title={'REPUBLIC HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/INDECELOGO.jpg')}
                        title={'INDEPENDENCE HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/QUEENSLOGO.jpg')}
                        title={'QUEENS HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                    <ListItem
                        roundAvatar
                        avatar={require('./Logos/AFRICALOGO.jpg')}
                        title={'AFRICA HALL'}
                        onPress={()=> {this.props.navigation.navigate('FirstScreen')}}

                    />
                </List>
            </ScrollView>
        );
    }
}