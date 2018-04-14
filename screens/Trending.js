import React, { Component } from 'react';
import { Container, Text, Content,Icon } from 'native-base';
import {Platform,ScrollView,Image,TouchableOpacity,View} from "react-native";
import  { List,ListItem } from 'react-native-elements';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

export default class Trending extends Component {

    render(){
        return (
            <ScrollView>
                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                        <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                            <Image
                                source={require('./Logos/KATANGALOGO.jpg')}
                                style={{width:100,height:100,margin:5}}
                            />
                            <View style={{flex:1,flexDirection:'column'}}>
                                <Text style={{padding:10}}>
                                    Katanga unveils new logo lorep ipsu,morem Ipsum is simply dummy text of the printing and
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/index.png')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10}}>
                               Skytech opens new branch in tech ipsum lorep siuojx xis jxjdj jhcdjc cdh  hdcjhcdhj jhhj
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Plane.jpg')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10}}>
                               Coe secures new plane idod odod odod piduk dkdkd kdkdk dkdkdkdkdkk dkdkdkdkdkdkdkdkdk
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Shatta.png')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10}}>
                               Shatta performs freedom at knust lorep ppsum in ere id k inrr
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Library.jpg')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10}}>
                               New library complex opened for student populace kdjd id di k dm
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}