import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'


// import LoginScreen from './Login';
import Garden from './Garden'
import Donation from './Donation'

export default class AlbumScreen extends React.Component {
    state = {
        shown : 'garden',
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.buttonContainer}>
                    <View style = {styles.button}>  
                        <Button title="MY GARDEN" color = '#00BFA5' onPress={()=>{
                            this.setState({shown:'garden'})
                        }}/>
                    </View>
                    <View style = {styles.button}>
                        <Button title="MY DONATIONS" color = "#00BFA5" onPress={()=>{
                            this.setState({shown:'donation'})
                        }}/>
                    </View>
                </View>
                <View>
                <Garden show={this.state.shown == 'garden'}/>
                <Donation show={this.state.shown == 'donation'}/>
                </View>
                
            </View>
        );
    }
}





const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection : "column",
        justifyContent: 'flex-start',
        
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginTop : 100,
        marginBottom : 30,
    }
})

