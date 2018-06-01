import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { List } from 'react-native-elements';
import {Platform,ScrollView,Image,TouchableOpacity,View,Text,ActivityIndicator,TouchableHighlight} from "react-native";


import axios from 'axios';
import SecondScreen from './SecondScreen';

export default class COS extends Component {
    static NavigationOptions ={
        tabBarIcon:({ tintColor }) => {
            return <Icon name='ios-home-outline' style={{color:tintColor}} />
        }
    };
    state = {
        persons: [],
        showMe:true,
    };

    componentDidMount() {
        axios.get(`https://techhubapi.herokuapp.com/science`)
        /*axios.get(`http://192.168.0.102:3000/engineering`)*/
            .then(res => {
                const persons = res.data;
                this.setState({ persons ,showMe: false});
                //let news =  JSON.stringify(this.state.persons.cotitle);
            });
    }



    render(){
        return (
            <Container>
                <ScrollView>
                        <View>
                            {
                                this.state.showMe ?
                                    <ActivityIndicator size='large'/>
                                    :<View>
                        {this.state.persons.map((v,index)=> {
                            let x = 0;
                            let y = '';
                            if (v.day > 1) {
                                x = v.day;
                                y = 'days ago';
                            } else if (v.day == 1) {
                                x = v.day;
                                y = 'day ago';
                            }
                            else if ((v.hour) > 1 && (v.day) < 1) {
                                x = v.hour;
                                y = 'hours ago';
                            } else if ((v.hour) == 1 && (v.day) < 1) {
                                x = v.hour;
                                y = 'hour ago';
                            }
                            else if ((v.minute > 1) && ((v.hour < 1)
                                    && (v.day < 1))) {
                                x = v.minute;
                                y = 'minutes ago';
                            } else if ((v.minute == 1) && ((v.hour < 1)
                                    && (v.day < 1))) {
                                x = v.minute;
                                y = 'minute ago';
                            } else if ((v.minute == 0) && ((v.hour < 1)
                                    && (v.day < 1))) {
                                x = '';
                                y = 'Just now';
                            }

                            return <View key={index} style={{flex: 1, backgroundColor: 'white'}}>
                                <TouchableHighlight onPress={() => {
                                    this.props.navigation.navigate('SecondScreen', {
                                        news: v.conews,
                                        image: v.college_url,
                                        title: v.cotitle
                                    })
                                }}>

                                    <Card>
                                        <CardItem>
                                            <Left>
                                                <Body>
                                                <Text style={{
                                                    padding: 10,
                                                    fontWeight: 'bold',
                                                    fontSize: 20,
                                                    fontFamily: 'Roboto',
                                                }}>{v.cotitle}</Text>
                                                <Text note numberOfLines={2} style={{
                                                    padding: 10,
                                                    fontWeight: '100',
                                                    fontFamily: 'Roboto',
                                                }}>{v.conews}</Text>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Image source={{uri: v.college_url}}
                                                   style={{height: 200, width: null, flex: 1}}/>
                                        </CardItem>
                                        <CardItem>
                                            <Right>
                                                <Text style={{
                                                    fontWeight: '100',
                                                    fontFamily: 'sans-serif-medium',
                                                }}>{x} {y}</Text>
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </TouchableHighlight>

                            </View>
                        })
                        }

                    </View>
                                }
                        </View>
                </ScrollView>
            </Container>
        );
    }
}