
import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends React.Component {
    static navigationOptions= {
        headerStyle: {
            backgroundColor: "maroon",
        },
        headerTintColor:'white',
    };

    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{fontSize: 30, color: 'blue'}}>
                Screen 2
            </Text>
            <Button
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title="Open DrawNavigator"
            />
        </View>
    }
}
