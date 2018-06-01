
import React from 'react';
import {Text, View, Button, Image,TouchableOpacity,ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SecondScreen from './Halls/Colleges/SecondScreen';
import { Body } from 'native-base';

export default class FirstScreen extends React.Component{
    static navigationOptions= {
        headerStyle:{
            backgroundColor: "maroon",
        },
        headerTintColor:'white',
    };
    render() {
        return(
            <ScrollView>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./Logos/KATANGALOGO.jpg')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>

                            <Text style={{padding:10, fontSize:16, fontWeight:'bold',}} numberOfLines={2}>
                                 Katanga unveils new logo for upcoming their upcoming hall week celebrations
                            </Text>
                            <Text note numberOfLines={2} style={{padding:10, fontWeight:'100',fontFamily:'sans-serif-light'}}>
                                The university hall, Katanga has unvieled the new logo 7
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./Halls/Colleges/index.png')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10, fontSize:16, fontWeight:'bold',}} numberOfLines={2}>
                                Skytech opens new branch in tech ipsum lorep siuojx xis jxjdj jhcdjc cdh  hdcjhcdhj jhhj
                            </Text>
                            <Text note numberOfLines={2} style={{padding:10, fontWeight:'100',fontFamily:'sans-serif-light'}}>
                                The university hall, Katanga has unvieled the new logo 7
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Plane.jpg')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10 , fontSize:16, fontWeight:'bold',}} numberOfLines={2}>
                                Coe secures new plane idod odod odod piduk dkdkd kdkdk
                            </Text>
                            <Text note numberOfLines={2} style={{padding:10, fontWeight:'100',fontFamily:'sans-serif-light'}}>
                                The university hall, Katanga has unvieled the new logo 7
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Shatta.png')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10 , fontSize:16, fontWeight:'bold',}} numberOfLines={2}>
                                Shatta performs freedom at knust lorep ppsum in ere id k inrr
                            </Text>
                            <Text note numberOfLines={2} style={{padding:10, fontWeight:'100',fontFamily:'sans-serif-light'}}>
                                The university hall, Katanga has unvieled the new logo 7
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SecondScreen')}}>
                    <View style={{ flex:1,flexDirection:'row',backgroundColor:'white'}}>
                        <Image
                            source={require('./DummyPics/Library.jpg')}
                            style={{width:100,height:100,margin:5}}
                        />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{padding:10 , fontSize:16, fontWeight:'bold',}} numberOfLines={2}>
                                New library complex opened for student populace kdjd id di k dm
                            </Text>
                            <Text note numberOfLines={2} style={{padding:10, fontWeight:'100',fontFamily:'sans-serif-light'}}>
                                The university hall, Katanga has unvieled the new logo 7
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}