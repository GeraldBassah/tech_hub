import React ,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

export default class Splash extends Component {
static navigationOptions={
    header:null
}
componentWillMount()
{
    setTimeout(()=> {
        this.props.navigation.navigate('main');
    },4000)

}
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    TECHHUB
                </Text>
                <Text style ={styles.subtitle}>
                    Powered by Skytech Inc.
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'maroon',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:80,
        color:'white'
    },
    subtitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        paddingLeft:15

    }
});




