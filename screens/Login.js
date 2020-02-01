import React from 'react'
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { genericTypeAnnotation } from '@babel/types';
// import { Icon } from 'react-native-vector-icons/FontAwesome'
import RegisterScreen from './Register'
import HomeScreen from './Home'
// const myUser = <Icon name="user" size={30} color="#900" />;

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.heading}>
                    Treeky
    </Text>
                <Text style={styles.subheading}>
                    Let us plant a greener world!
    </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Sign Up" color='#00BFA5' onPress={() => this.props.navigation.navigate('Register')}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Login" color='#00BFA5' onPress={() => this.props.navigation.navigate('Home')}/>
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
        Home: HomeScreen
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
    heading: {
        color: '#00BFA5',
        fontSize: 80,
        fontWeight: "bold",
        fontFamily: 'serif'
    },
    subheading: {
        color: '#00BFA5',
        fontFamily: 'serif'
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
        borderBottomStartRadius: 2,
        borderBottomWidth: 1,
        borderColor: '#00BFA5',
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