import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './Login';

class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Register" color='#00BFA5' />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



const AppNavigator = createStackNavigator(
    {
      Register: RegisterScreen,
      Login: LoginScreen,
    },
    {
      initialRouteName: 'Login',
    }
  );

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

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}