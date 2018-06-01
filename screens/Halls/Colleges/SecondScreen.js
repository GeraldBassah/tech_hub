import React, { Component } from 'react';
import { ScrollView,View, Image,Text, TextInput,Dimensions, StyleSheet, StatusBar, TouchableOpacity,Share} from 'react-native';
import nl2br from 'react-newline-to-break';
import { Container, Header,  Button, Icon, Fab } from 'native-base'

const styles = StyleSheet.create({
    stretch: {
        width: 300,
        height: 533,
    }
});

export default class SecondScreen extends React.Component{
    constructor(props){
        super(props);
        this._shareMessage=this._shareMessage.bind(this);
        this._showResult=this._showResult.bind(this);
        this.state={result:'',};
    }
    _showResult(result){
        this.setState({ result })

    }
    _shareMessage()
    {
        Share.share({
            subject:this.props.navigation.state.params.title,
            message:this.props.navigation.state.params.news,
            url:'www.ghanaweb.com'
        }).then(this._showResult);
    }
    static navigationOptions={
        headerStyle: {
            backgroundColor: "maroon",
        },
        headerTintColor:'white',
};
    render(){
        let param1 = this.props.navigation.state.params.news;
        let param2 = this.props.navigation.state.params.image;
        let param3 = this.props.navigation.state.params.title;
        let screenWidth = Dimensions.get('window').width;
        let mystring = 'lol\nol\nololo\nlol';
        return(
            <View style={{flex: 1,backgroundColor: 'white' }}>
                <ScrollView style={{flex: 1,backgroundColor: 'white' }}>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'red' }}>
                        <Image
                            source={{uri : param2 }}
                            style={{height: 200, width: null, flex: 1}}
                            resizeMode="stretch"
                        />
                    </View>
                    <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontFamily: 'Roboto',
                    }}>{param3}</Text>

                    <Text style={{fontSize: 17, margin:5, marginBottom:45, padding: 15, fontFamily:'sans-serif-light', textAlign:'left'}} selectable={true} >
                        {param1}



                    </Text>

                </ScrollView>
                <View style={{marginBottom:2}}>
                    <Fab
                        position='bottomRight'
                        color="grey"
                        onPress={this._shareMessage}

                    >
                        <Icon name='share'/>
                    </Fab>
                </View>

            </View>

              );
         }
    }