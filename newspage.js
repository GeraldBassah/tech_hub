import React, { Component } from 'react';
import { ScrollView,View, Image,Text, TextInput,Dimensions, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    stretch: {
        width: 300,
        height: 533
    }
});

export default class App extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;

        return(




                <ScrollView style={{flex: 1,backgroundColor: "white" }}>


                        <View>
                            <StatusBar
                                backgroundColor="blue"
                                barStyle="light-content"
                            />

                            <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'red'
                }}>
                <Image
                    source={require('./components/30.jpg')}
                    style={{zIndex: 5}}
                    resizeMode="stretch"
                />
                </View>

                    <View>
                <TouchableOpacity onPress={this.onPress}>
                    <Image
                        source={require('./images/like-button-png-2.png')}
                        style={{flex:1, flexDirection: 'row' ,width:30, height:30}}
                        resizeMode="center"
                    />
                </TouchableOpacity>
                   <TouchableOpacity onPress={this.onPress}>
                       <Image
                        source={require('./images/61807.png')}
                        style={{flex: 1, flexDirection: 'column' , width:30, height:30}}
                    />
                </TouchableOpacity>

                    </View>
                <View>
                <Text
                style={{fontSize: 20,
                    padding: 15,
                    textAlign:'left'}}
            >
                This is where the news article goes. The image goes up top.

                    My name is Jake. That's my first name, obviously. I can't tell you my last name. It would be too dangerous. The Controllers are everywhere. Everywhere. And if they knew my full name, they could find me and my friends, and then . . . well, let's just say I don't want them to find me. What they do to people who resist them is too horrible to think about.
                    I won't even tell you where I live. You'll just have to trust me that it is a real place, a real town.
                    It may even be your town.
                    I'm writing this all down so that more people will learn the truth. Maybe then, somehow, the human race can survive until the Andalites return and rescue us, as they promised they would.
                    Maybe.
                    My life used to be pretty normal. Normal, that is, until one Friday night at the mall. I was there with Marco, my best friend. We were playing video games and hanging out at this cool store that sells comic books and stuff. The usual.
                    Marco and I had run out of quarters for the games, right when he was ahead by a lot of points. Mostly, we're equally good at games. I have Sega at home so I get lots of practice time in, but Marco has this amazing ability to analyze games and figure out all the little tricks. So sometimes he beats me.
                    Or maybe I just wasn't concentrating very well. I'd had kind of a bad day at school. I'd tried out for the basketball team and I didn't make the cut.
                    It was like no big deal, really. Except that Tom - he's my big brother - he was this total legend on the junior high basketball team. Now he's the main scorer for the high school team. So everyone expected me to make the team easy. Only I didn't.
                    Like I said, no big thing. But it was on my mind, just the same. Lately, Tom and I hadn't been hanging out as much. Not like we used to. So I figured, you know, if I got his old position on the team . . .
                    Well, anyway, we were out of money and getting ready to head home when we ran into Tobias. Tobias was . . . I mean, I guess he still kind of a strange guy. He was new at school, and he wasn't the toughest kid around, so he got picked on a lot.
                    I actually met Tobias when he had his head in a toilet. There were these two big guys holding him down and laughing while they flushed, sending Tobias's straggly blond hair swirling around the bowl. I told the two creeps to step off, and ever since then, Tobias figured I was his friend.
                    "What's up?" Tobias asked.
                    I shrugged. "Not much. We're heading home."


                </Text>
                </View>

                <TextInput
                    style= {{padding: 10, margin: 10, borderWidth:1}}
                    placeholder='Make a comment' >

                </TextInput>


            </ScrollView>

                );
    }
}