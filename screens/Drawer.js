import React from 'react';
import {StyleSheet,Image, View, Text,ScrollView,TouchableOpacity,TouchableHighlightSwitch,AsyncStorage,TouchableHighlight,TextInput,Button,Platform,FlatList,Alert} from 'react-native';
import { TabNavigator,TabBarBottom ,StackNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import { Container, Header, Title, Content,  Icon, Right, Body, Left, Picker, Form } from "native-base";
import { DrawerItems } from 'react-navigation';
//import FontAwesome from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Home from './Main';
import { MaterialIcons } from '@expo/vector-icons';
import { List,ListItem,SearchBar } from 'react-native-elements';
import TermsOfUseScreen from './TermsOfUse'
import SupportScreen from './SupportUs'
import MyNews from './MyNews'

import { PropTypes} from 'prop-types';
import Preferences from "./Preferences";
import SecondScreen from "./Halls/Colleges/SecondScreen";
//import { FontAwesome } from '@expo/vector-icons';

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
        let msg= 'contact us by email:thexile97@gmail.com\n' +
                 'or phone:+233209028266';
        return(
            <ScrollView>
                <Text style={{
                    padding: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: 'Roboto',
                }}>
                    CONTACT US
                </Text>
                <Text style={{fontSize: 17, margin:5, marginBottom:45, padding: 15, fontFamily:'sans-serif-light', textAlign:'left'}} selectable={true}>
                    {msg}
                </Text>
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
        drawerLabel:'Search',
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

class PreferencesScreen extends  React.Component{

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
        title:'Set Preferences',
        drawerLabel:'Preferences',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='ios-notifications' size={24}
                         color={tintColor}
            />

    };

    render() {
        const {title, holdTitle} = this.props;
        return (
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={{paddingRight:30}}
                        horizontal={true}
                        showsHorizontalScrollndicator={false}
                    >

                    </ScrollView>
        );
    }
}
//code the stack



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
        title:'About',
        drawerLabel:'About',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='md-happy' size={24}
                         color={tintColor}
            />
    };

    render(){

        return(
            <View /*style={{ flex:1,justifyContent:'center',alignItems:'center'}}*/>
                <List>
                    <ListItem
                        title={'Developer'}
                        subtitle={'SKYTECH INC KNUST.'}
                    />





                    <ListItem
                        title={'Version'}
                        subtitle={'0.1.0'}
                    />



                </List>
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
export const PreferencesStack = StackNavigator({
    Preferences:{
        screen:Preferences,
    },
    MyNews:{
        screen:MyNews,
        navigationOptions:{
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
            title:'Favourites',
        },
    },
    SecondScreen:{
        screen:SecondScreen,
    },
});


const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height:200, backgroundColor:'maroon',}}>
            <Body>
            <Image
                style={{width:100,height:100,borderRadius:50,}}
                source={require('./Logos/NewLogo1.jpg')}
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
    },
});

const MenuButton = (
     <View>
         <TouchableOpacity onPress={() => {this.props.navigate('DrawerOpen')} }>
             <Icon name="ios-menu" style={{color: 'white', padding: 15, marginLeft:10, fontSize: 25}}/>
         </TouchableOpacity>
     </View>
 );





const Drawer = DrawerNavigator({
        Home: {
            screen:Home,
        },
        Preferences:{
            screen:PreferencesStack,
        },
        Help: {
            screen:HelpStack,
        },
        AboutUs: {
            screen:AboutUsStack,
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



const styles = StyleSheet.create({
    icon:{
        width:5,
        height:5,
    },
    wrapper:{
        display:'flex',
    },
    titleWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:21,
        paddingRight:21,
    },
    title:{
        color:'black',
    },
    seeAllBtn:{
        marginTop:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    seeAllBtnText:{
        color:'grey',
        marginRight:5,
    },
    scrollView:{
        marginTop:20,
        marginLeft:15,
        marginBottom:28,
    },
    card:{
        marginRight:6,
        marginLeft:6,
        width:157,
        flexDirection:'column',
        minHeight:100,
    },
    cardContent:{

    },
    image:{
       width:undefined,
       flex:1,
        height:100,
        borderRadius:8,
        marginBottom:7
    },

});
export default Drawer;





