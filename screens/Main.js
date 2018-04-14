import React, { Component } from 'react';
import { Container, Text, Content,Icon,Title } from 'native-base';
import { TabNavigator,NavigationActions,StackNavigator } from 'react-navigation';
import { Platform,StyleSheet,Button,View,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Trending from './Trending';
import Halls from './Halls';
import SRC from './SRC';
import Colleges from './Colleges';
import MyNews from './MyNews';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

import Drawer from './Drawer';


const MenuButton = (
    <View>
        <TouchableOpacity onPress={() => {/*this.props.navigate('DrawerOpen')*/} }>
            <Icon name="ios-menu" style={{color: 'white', padding: 15, marginLeft:10, fontSize: 25}}/>
        </TouchableOpacity>
    </View>
);


export class NewsFeedScreen extends React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'NewsFeed',
    };
    render(){
        return(
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Just checking</Text>
            </View>
        );
    }
}


export class NewsPageScreen extends React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'NewsPage',
    };
    render(){
        return(
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>

            </View>
        );
    }
}

export const TrendingStack = StackNavigator ({
    Trending:{
        screen:Trending,
        navigationOptions:{
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Trending',
        },
    },
    SecondScreen:{
        screen:SecondScreen,
    }
});

export const HallsStack = StackNavigator ({
    Halls:{
        screen:Halls,
        navigationOptions:{
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Halls',
        },
    },
    FirstScreen:{
        screen:FirstScreen,
    },
    SecondScreen:{
        screen:SecondScreen,
    }

});

export const CollegesStack = StackNavigator ({
    Colleges:{
        screen:Colleges,
        navigationOptions:{
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Colleges',
        },
    },
    FirstScreen:{
        screen:FirstScreen,
    },
    SecondScreen:{
        screen:SecondScreen,
    }
});




export const MyNewsStack = StackNavigator ({
    MyNews:{
        screen:MyNews,
        navigationOptions:{
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'MyNews',
        },
    },
    SecondScreen:{
        screen:SecondScreen,
    }
});


export const SRCStack = StackNavigator ({
    SRC:{
        screen:SRC,
        navigationOptions:{
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'SRC',
        },
    },
    SecondScreen:{
        screen:SecondScreen,
    }
});





export default class Home extends Component{
    static navigationOptions={
        drawerLabel:'home',
        drawerIcon: ({ tintColor }) =>
            <FontAwesome name='home' size={24}
                         color={tintColor}
            />};
    render(){

        return  <MainNavigator>
            <Text>My main Screen</Text>
        </MainNavigator>
    }
}


  export const MainNavigator  = TabNavigator({
        Trending:{screen:TrendingStack,

        },
        SRC:{
            screen:SRCStack,
        },
        Colleges:{
            screen:CollegesStack,
        },
        Halls:{
            screen:HallsStack,
        },
        MyNews:{
            screen:MyNewsStack,
        },
    },
    {
        animationEnabled: true,
        swipeEnabled:true,
        tabBarPosition:'bottom',
        tabBarOptions:{
            labelStyle: {
                fontSize: 15,
                fontWeight:'bold',
            },
            indicatorStyle:{

            },
            tabStyle: {
                width: 100,
            },
            scrollEnabled:true,
            upperCaseLabel:false,
            showIcon:false,
            showLabel:true,
            allowFontScaling:true,
            style:{
                backgroundColor:'maroon',
            },
            activeTintColor:'white',
            inactiveTintColor:'white',
        }
    }
);


