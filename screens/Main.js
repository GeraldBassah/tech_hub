import React, { Component } from 'react';
import { Container, Text, Content,Icon,Title } from 'native-base';
import {TabNavigator, NavigationActions, StackNavigator, DrawerNavigator} from 'react-navigation';
import { Platform,StyleSheet,Button,View,TouchableOpacity,BackHandler,Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import Opinion from './Opinion';
import Halls from './Halls';
import SRC from './SRC';
import Colleges from './Colleges';
import FirstScreen from './FirstScreen';
import SecondScreen from './Halls/Colleges/SecondScreen';
import Republic from './Halls/Republic';

import  MenuButton  from './Drawer';
import University from "./Halls/University";
import Independence from "./Halls/Independence";
import Unity from "./Halls/Unity";
import Queens from "./Halls/Queens";
import Africa from "./Halls/Africa";


import COE from "./Halls/Colleges/COE";
import CABE from "./Halls/Colleges/CABE";
import COS from "./Halls/Colleges/COS";
import COHSS from "./Halls/Colleges/COHSS";
import CANR from "./Halls/Colleges/CANR";
import COHS from "./Halls/Colleges/COHS";
import MyNews from "./MyNews";
import Preferences from "./Preferences";





/*export const UnityStack = StackNavigator({
    Unity:{
        screen:Unity,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
   headerMode:'none',
    }
);


export const AfricaStack = StackNavigator({
    Africa:{
        screen:Africa,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
        headerMode:'none',
    }
);

export const QueensStack = StackNavigator({
    Queens:{
        screen:Queens,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
        headerMode:'none',
    }
);

export const UniversityStack = StackNavigator({
    University:{
        screen:University,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
        headerMode:'none',
    }
);

export const IndependenceStack = StackNavigator({
    Independence:{
        screen:Independence,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
    headerMode:'none',
    }
);

export const RepublicStack = StackNavigator({
    Republic:{
        screen:Republic,
    },
    SecondScreen:{
        screen:SecondScreen,
    },
},{
        headerMode:'none',
    }
);






export const COEStack = StackNavigator({
        COE:{
            screen:COE,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

export const COSStack = StackNavigator({
        COS:{
            screen:COS,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

export const CANRStack = StackNavigator({
        CANR:{
            screen:CANR,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

export const CABEStack = StackNavigator({
        CABE:{
            screen:CABE,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

export const COHSSStack = StackNavigator({
        COHSS:{
            screen:COHSS,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

export const COHSStack = StackNavigator({
        COHS:{
            screen:COHS,
        },
        SecondScreen:{
            screen:SecondScreen,
        },
    },{
        headerMode:'none',
    }
);

*/
export const MyNewsStack = StackNavigator({
        MyNews:{
            screen:MyNews,
            navigationOptions:{
                headerTintColor:'white',
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
        },
    },
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

export const OpinionStack = StackNavigator ({
    Trending:{
        screen:Opinion,
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
            title:'Opinions',
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
            headerTintColor:'white',
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
    Africa:{
       screen:Africa,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Africa',
        },
    },
    Republic:{
        screen:Republic,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Republic',
        },

    },
    Independence:{
        screen:Independence,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Indece',
        },
    },
    University:{
        screen:University,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'University',
        },
    },
    Unity:{
        screen:Unity,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Unity',
        },
    },
    Queens:{
        screen:Queens,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'Queens',
        },
    },
    SecondScreen:{
        screen:SecondScreen,
    },

},
);

export const CollegeStack = StackNavigator ({
        Colleges:{
            screen:Colleges,
            navigationOptions:{
                headerTintColor:'white',
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
        COHS:{
            screen:COHS,
            navigationOptions:{
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:"maroon",
                },
                headerTitleStyle: {
                    //alignSelf: 'center',
                    textAlign:'center',
                    justifyContent: 'center',
                    color:'white',
                },
                title:'COHS',
            },
        },
        COHSS:{
            screen:COHSS,
            navigationOptions:{
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:"maroon",
                },
                headerTitleStyle: {
                    //alignSelf: 'center',
                    textAlign:'center',
                    justifyContent: 'center',
                    color:'white',
                },
                title:'COHSS',
            },

        },
        CANR:{
            screen:CANR,
            navigationOptions:{
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:"maroon",
                },
                headerTitleStyle: {
                    //alignSelf: 'center',
                    textAlign:'center',
                    justifyContent: 'center',
                    color:'white',
                },
                title:'CANR',
            },
        },
        CABE:{
            screen:CABE,
            navigationOptions:{
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:"maroon",
                },
                headerTitleStyle: {
                    //alignSelf: 'center',
                    textAlign:'center',
                    justifyContent: 'center',
                    color:'white',
                },
                title:'CABE',
            },
        },
        COS:{
            screen:COS,
            navigationOptions:{
                headerTintColor:'white',
                headerStyle:{
                    backgroundColor:"maroon",
                },
                headerTitleStyle: {
                    //alignSelf: 'center',
                    textAlign:'center',
                    justifyContent: 'center',
                    color:'white',
                },
                title:'COS',
            },
        },
    COE:{
        screen:COE,
        navigationOptions:{
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:"maroon",
            },
            headerTitleStyle: {
                //alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                color:'white',
            },
            title:'COE',
        },
    },
    SecondScreen:{
         screen:SecondScreen,
    },

    },
);




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


export const SRCStack = StackNavigator ({
    SRC:{
        screen:SRC,
        navigationOptions:{
            headerRight: <FontAwesome name='sign-out' size={24}
                           onPress={this.backPressed}           color='white'
            />,
            headerStyle:{
                backgroundColor:"maroon",

            },
            headerTintColor:'white',
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
        drawerLabel:'Home',
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

        SRC:{
            screen:SRCStack,
        },
        Colleges:{
            screen:CollegeStack,
        },
        Halls:{
            screen:HallsStack,
        },
          Opinion:{
            screen:OpinionStack,
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
            allowFontScaling:false,
            style:{
                backgroundColor:'maroon',
            },
            activeTintColor:'white',
            inactiveTintColor:'white',
        }
    }
);


