import React ,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,AsyncStorage} from 'react-native';

export default class save_data extends Component {
    static navigationOptions={
        header:null
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.saveData}>
                <Text>
                    click to save data.
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayData}>
                    <Text>
                        click to display data.
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    saveData(){
        let user='Gerald';
        AsyncStorage.setItem('user',user);
    }
    displayData=async() =>
    {
        try{
            let user=await AsyncStorage.getItem('user');
            alert(user);

        }
        catch(error){

            alert(error);
        }

    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

});
