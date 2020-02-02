import React from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import  CameraScreen from './Camer'
// import LoginScreen from './Login';

class RegisterScreen extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
          amount: '',
        }
      }
    
      _handlePress() {
         console.log(this.state.amount);
      }

    
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.donate}>
                    <Text style={styles.heading}>Donate</Text>
                    <View style={styles.inner}>
                        <TextInput placeholder="Amount" onChangeText={(text) => this.setState({amount:text})}></TextInput>
                        <Button title="Donate" color='#00BFA5' style={styles.button} onPress={() => this._handlePress()} />
                    </View>
                </View>
                <View style={styles.plant}>
                    <Text style={styles.heading}>Plant</Text>
                    <View style={styles.inner}>
                        <Button title="Plant" color='#00BFA5' style={styles.button} onPress = {() => this.props.navigation.navigate('Camera')} />
                    </View>
                </View>
            </View>
        );
    }
}



const AppNavigator = createStackNavigator(
    {
        Register : RegisterScreen,
        Camera : CameraScreen,
    },
    {
        initialRouteName: 'Register',
        headerMode:null

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
        flexDirection : 'column',
        justifyContent: 'space-around',
        alignContent : 'center'
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        textAlign: 'center',
    },
    heading:{
        padding:20,
        textAlign:'center',
        fontSize:30,
        color:'#00bfa5'
    }

})

