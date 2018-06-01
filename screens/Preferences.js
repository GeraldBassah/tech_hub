import React, { Component } from 'react';
import { Container, Content,Card,CardItem,Left,Body,Icon,Picker,Form,Right } from 'native-base';
import { List } from 'react-native-elements';
import { Entypo, Ionicons } from '@expo/vector-icons';
import {Platform, ScrollView, Image, TouchableOpacity,ImageBackground, View, Text, AsyncStorage, StyleSheet,TextInput,Button} from 'react-native';
import Listing from './Listings';
import MenuButton from './Main';
import Home from './Main'
//Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form

export default class Preferences extends Component{
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
        title:'Preferences',
        drawerLabel:'Filter News',
        drawerIcon: ({ tintColor }) =>
            <Ionicons name='ios-search' size={24}
                      color={tintColor}
            />
    };
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            selected1:undefined,
            key1:null,
            key2:null,
            hall1:null,
            college1:null,

        };

    }


    async onValueChange1(value: string) {
        this.setState({
            selected1: value
        });
        AsyncStorage.setItem('myHall',value);
        //obj.hall = value;
        try {
             this.state.hall1 = await AsyncStorage.getItem('myHall');

        }
        catch(error){
            alert(error);
        }
    }

    async onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
        let c = value;
        AsyncStorage.setItem('myCollege',value);
       //obj.college =value;
        try {

            this.state.college1 = await AsyncStorage.getItem('myCollege');

        }
        catch(error){
            alert(error);
        }


    }

    render(){
        return(
            <Container>
                <Content>
                    <View>
                        <Text style={{ padding:10,fontWeight:'bold',fontSize:20, fontFamily:'Roboto',}}>
                            Select hall Preference
                        </Text>
                    </View>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            placeholder="Select your Hall"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange1.bind(this)}
                        >
                            <Picker.Item label="Select hall here" value="" />
                            <Picker.Item label="Africa" value="africa" />
                            <Picker.Item label="Independence" value="independence" />
                            <Picker.Item label="Republic" value="republic" />
                            <Picker.Item label="University" value="university" />
                            <Picker.Item label="Unity" value="unity" />
                            <Picker.Item label="Queens" value="queens" />
                        </Picker>
                    </Form>

                    <View>
                        <Text style={{ padding:10,fontWeight:'bold',fontSize:20, fontFamily:'Roboto',}}>
                            Select College Preference
                        </Text>
                    </View>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            placeholder="Select your College"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Select college here" value="" />
                            <Picker.Item label="CABE" value="art" />
                            <Picker.Item label="COH" value="health" />
                            <Picker.Item label="COE" value="engineering" />
                            <Picker.Item label="CANR" value="agric" />
                            <Picker.Item label="COHSS" value="humanities" />
                            <Picker.Item label="COS" value="science" />
                        </Picker>
                    </Form>
                    <View style={styles.Butt}>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('MyNews',{hall:this.state.hall1,college:this.state.college1})
                        }}
                        title="Submit"
                        color="maroon"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                </Content>

            </Container>
        );

    }
}
const styles = StyleSheet.create({
addToFavouritesBtn:{
    position:'absolute',
    right:12,
    top:7,
    zIndex:2,
},
    Butt:{
    flex:1,
        justifyContent:'center',
        margin:80,

    }
});