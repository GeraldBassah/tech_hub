import React, { Component } from 'react';
import  PropTypes  from 'prop-types';
import { View,TouchableOpacity,StyleSheet } from 'react-native';
//import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeartButton extends Component{
    constructor(props){
        super(props);
        this.state={ addedToFavorite: false };
        this.addToFavorite = this.addToFavorite.bind(this);
    }
    addToFavorite(){
        this.setState({
            addedToFavorite:!this.state.addedToFavorite
        });
    }
    render(){
        const { addedToFavorite } = this.state;
        return(
            <TouchableOpacity
                onPress={this.addToFavorite}
            >
                <View>
                    <Icon
                        name={addedToFavorite ? 'heart' : 'heart-o'}
                        size={40}
                        color={'#ff6cfb'}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});
