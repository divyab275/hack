import React from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'


// import LoginScreen from './Login';

export default class RegisterScreen extends React.Component {
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
                        <Button title="Donate" style={styles.button} onPress={() => this._handlePress()} />
                    </View>
                </View>
                <View style={styles.plant}>
                    <Text style={styles.heading}>Plant</Text>
                    <View style={styles.inner}>
                        <Button title="Plant" style={styles.button} />
                    </View>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    heading: {
        textAlign: 'center',
        fontSize: 30,
        padding: 10
    },
    button: {
        textAlign: 'center',
    }

})

