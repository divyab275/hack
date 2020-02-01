import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'
import axios from 'axios';

// import LoginScreen from './Login';

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: '',
            userType: 'person'
        }
    }

    _handlePress() {
        self = this;
        axios.post('http://treeky.herokuapp.com/register', { 'email': this.state.email, 'password': this.state.password ,'name':self.state.password,'userType':self.state.userType})
            .then(function (response) {
                console.log(response.data);
                if (response.data.success == true) {
                    console.log(self.state.email);
                    console.log(self.state.password);
                    console.log(self.state.name);
                    console.log(self.state.userType);
                    self.props.navigation.goBack();
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
                    <TextInput style={styles.input} placeholder="Name" onChangeText={(text) => this.setState({ name: text })} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Register" color='#00BFA5' onPress={() => this._handlePress()} />
                        </View>
                    </View>
                </View>
            </View>
        );
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

        // borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 30,
        // borderWidth: 1,
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

