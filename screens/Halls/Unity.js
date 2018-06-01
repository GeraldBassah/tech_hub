import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { List } from 'react-native-elements';
import {Platform,ScrollView,Image,TouchableOpacity,View,Text,ActivityIndicator,TouchableHighlight} from "react-native";


import axios from 'axios';
import SecondScreen from './Colleges/SecondScreen';
import {StackNavigator} from "react-navigation";




export default class Unity extends Component {
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
        //title:'Help',

    };
    state = {
        persons: [],
        showMe:true,
    };

    componentDidMount() {
        axios.get(`https://techhubapi.herokuapp.com/unity`)
        /*axios.get(`http://192.168.0.102:3000/engineering`)*/
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                //let news =  JSON.stringify(this.state.persons.cotitle);
            });
    }
    componentWillMount(){
        setTimeout(()=>{
            this.setState({ showMe: false})
        },3000)
    }
    render(){
        return (
            <Container>
                <ScrollView>
                    <View >
                        {
                            this.state.showMe ?
                                <ActivityIndicator size='large'/>
                                : <View>
                                    {this.state.persons.map((v, index) => {
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
                                                    news: v.hall_news,
                                                    image: v.hall_url,
                                                    title: v.hall_news_title
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
                                                            }}>{v.hall_news_title}</Text>
                                                            <Text note numberOfLines={2} style={{
                                                                padding: 10,
                                                                fontWeight: '100',
                                                                fontFamily: 'Roboto',
                                                            }}>{v.hall_news}</Text>
                                                            </Body>
                                                        </Left>
                                                    </CardItem>
                                                    <CardItem cardBody>
                                                        <Image source={{uri: v.hall_url}}
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