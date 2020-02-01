import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'


// import LoginScreen from './Login';

export default class RegisterScreen extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
          email: '',
          password: '',
          name:'',
          userType:'person'
        }
      }
    
      _handlePress() {
         console.log(this.state.email);
         console.log(this.state.password);
         console.log(this.state.name);
         console.log(this.state.userType);
      }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => this.setState({email:text})}/>
                    <TextInput style={styles.input} placeholder="Name" onChangeText={(text) => this.setState({name:text})}/>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({password:text})}/>
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

