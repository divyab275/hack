import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MapScreen from './Map';
import PlantOrDonateScreen from './PlantOrDonate';
import AlbumScreen from './AlbumScreen';
import LeaderBoardScreen from './LeaderBoard'


const AppNavigator = createBottomTabNavigator(
    {
        Map: MapScreen,
        Album: AlbumScreen,
        PlantOrDonate: PlantOrDonateScreen,
        LeaderBoard : LeaderBoardScreen
    },
    {
        initialRouteName: 'Map',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        padding: 40,

        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 30,
        borderWidth: 1,
    },
    input: {

        borderBottomWidth: .5,
        paddingBottom: 0,
        paddingTop: 15,
    },
    button: {
        margin: 10,
        width: '150%',
    },
    buttons: {
        width: 20,
    }
})

