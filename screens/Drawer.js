import React from 'react';
import {StyleSheet,Image, View, Text,ScrollView,TouchableOpacity,Switch} from 'react-native';
import { TabNavigator,TabBarBottom ,StackNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import { Container,Header,Content,Icon,Body,Button,Left,Right} from 'native-base';
import { DrawerItems } from 'react-navigation';
//import FontAwesome from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Home from './Main';
import { MaterialIcons } from '@expo/vector-icons';
import { List,ListItem,SearchBar } from 'react-native-elements';
import TermsOfUseScreen from './TermsOfUse'
import SupportScreen from './SupportUs'

class MyhomeScreen extends React.Component{
    static navigationOptions={
        drawerLabel:'Homepage',


    };
    render(){
        return(
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>

            </View>
        );
    }
}

export class HelpScreen extends React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
       /* headerLeft:<TouchableOpacity onPress={() => {this.props.navigate.goBack()}}>
            <Ionicons name='ios-arrow-back-outline' size={24} color='white' paddingLeft={5}  />
        </TouchableOpacity>,*/
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'Help',
        drawerLabel:'Help',
        drawerIcon: ({ tintColor }) =>
            <FontAwesome name='info-circle' size={24}
                         color={tintColor}
            />

    };
    render(){
        return(
            <ScrollView>
                <List>
                        <ListItem
                            title={'Terms of Use'}
                            onPress={()=>{this.props.navigation.navigate('TermsOfUseScreen')}}
                        />


                        <ListItem
                            title={'Support'}
                            onPress={()=>{this.props.navigation.navigate('SupportScreen')}}
                        />


                        <ListItem
                            title={'Version'}
                            subtitle={'2.2.3'}
                        />

                    <TouchableOpacity>
                        <ListItem
                            title={'Check for Updates'}
                        />
                    </TouchableOpacity>

                </List>
            </ScrollView>
        );
    }
}
class SearchScreen extends React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
        /* headerLeft:<TouchableOpacity onPress={() => {this.props.navigate.goBack()}}>
             <Ionicons name='ios-arrow-back-outline' size={24} color='white' paddingLeft={5}  />
         </TouchableOpacity>,*/
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'Search',
        drawerLabel:'Searchh',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='ios-search' size={24}
                         color={tintColor}
            />
    };
    render(){
        return(
                <SearchBar
                    placeholder='Search'
                    lightTheme={true}
                />
        );
    }
}


//code the stack
export const SearchStack = StackNavigator({
    Search:{
        screen:SearchScreen,
    },
});


class MyNotificationsScreen extends  React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
        /* headerLeft:<TouchableOpacity onPress={() => {this.props.navigate.goBack()}}>
             <Ionicons name='ios-arrow-back-outline' size={24} color='white' paddingLeft={5}  />
         </TouchableOpacity>,*/
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'Notifications',
        drawerLabel:'Notifications',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='ios-notifications' size={24}
                         color={tintColor}
            />

    };
    render(){
        return(
            <ScrollView>
                <Switch
                    value={true}
                    activeText={'On'}
                    inActiveText={'Off'}
                />
            </ScrollView>

        );
    }
}
//code the stack
export const MyNotificationsStack = StackNavigator({
    Notifications:{
        screen:MyNotificationsScreen,
    },
});



class AboutUsScreen extends React.Component{
    static navigationOptions={
        headerStyle:{
            backgroundColor:"maroon",
        },
        /* headerLeft:<TouchableOpacity onPress={() => {this.props.navigate.goBack()}}>
             <Ionicons name='ios-arrow-back-outline' size={24} color='white' paddingLeft={5}  />
         </TouchableOpacity>,*/
        headerTitleStyle: {
            //alignSelf: 'center',
            textAlign:'center',
            justifyContent: 'center',
            color:'white',
        },
        title:'About Us',
        drawerLabel:'About us',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='md-happy' size={24}
                         color={tintColor}
            />
    };
    render(){
        return(
            <View /*style={{ flex:1,justifyContent:'center',alignItems:'center'}}*/>
                <Text>
                    This App was developed by Skytech inc.
                    Skytech inc is made of six KNUST students:
                    1. kwadwo Baafi (C.E.O)
                    2.Joshua Asare ( Project Manager )
                    3.Akrasi Mensah( Secretary  )
                    4.Gerald Bassah ( HRM )
                    5.Deladem Komla ( Database Manager )
                </Text>
            </View>
        );
    }
}
//code the stack
export const AboutUsStack = StackNavigator({
    AboutUs:{
        screen:AboutUsScreen,
    },
});

const styles = StyleSheet.create({
    icon:{
        width:5,
        height:5,
    },
});
const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height:200, backgroundColor:'maroon',}}>
            <Body>
            <Image
                style={{width:100,height:100,borderRadius:50,}}
                source={require('./techhublogo2.jpg')}
            />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
);
//Stacks screens for help





export const  HelpStack = StackNavigator({
    HelpScreen:{
        screen:HelpScreen,
    },
    TermsOfUseScreen:{
        screen:TermsOfUseScreen,
    },
    SupportScreen:{
        screen:SupportScreen,
    }
});

const Drawer = DrawerNavigator({
        Home: {
            screen:Home,

        },
        Notifications: {
            screen:MyNotificationsStack,

        },
        Search: {
            screen:SearchStack,
        },
        AboutUs: {
            screen:AboutUsStack,
        },

        Help: {
            screen:HelpStack,
        },
    },
    {
        drawerPosition:'left',
        initialRouteName:'Home',
        contentComponent:CustomDrawerContentComponent,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
        drawerToggleRoute:'DrawerToggle',
        drawerBackgroundColor:'white',
        drawerWidth:230,
        contentOptions:{
            labelStyle:{
                fontWeight:'bold',
                color:'black',
                fontSize:15,
            }
        }
    });
export default Drawer;





