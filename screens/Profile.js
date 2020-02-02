import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class Profile extends React.Component{
    render(){
        return(
            <View style = {StyleSheet.screen}>
                <View>
                    <Image style = {{height : 100,width :100}}></Image>
                    
                </View>
                <View>
                <Text></Text>
                    <Text>Planted</Text>
                    <Text>Donated</Text>
                    <Text>Account Balance</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
        marginBottom: 30,
    }
})