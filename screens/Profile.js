import React from 'react';
import { View, Button, TextInput, StyleSheet,Image,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import axios from 'axios';

export default class Profile extends React.Component{
    state = {
        name : "",
        email : "",
        balance : "",
        earning : "",
    }
    getDetails(){
        axios.post('http://treeky.herokuapp.com/getProfile',{
            email : 'rwithik@gmail.com'
        })
        .then(res => {
            const {name, email, balance, earning} = res.data.data; 
            this.setState({name,email,balance,earning})
            console.log(this.state.name)

        })
        .catch(err =>  {
            console.log(err)
        })
    }

componentDidMount() {
    this.getDetails()
}

    render(){
        return(
            <View style = {styles.screen}>
                <View>
                <Text style = {styles.bigText}>
                    Hello {this.state.name}!
                </Text>
                </View>
                <View style = {styles.image}>
                    <Image style = {{height : 200,width :200}}></Image>
                    
                </View>
                <View  style ={{width:200}}>
                    <View style={styles.textParent}><Text style={styles.text}>Planted</Text><Text style={styles.text}>10</Text></View>
                    <View style={styles.textParent}><Text style={styles.text}>Donated</Text><Text style={styles.text}>20</Text></View>
                    <View style={styles.textParent}><Text style={styles.text}>Earnings</Text><Text style={styles.text}>{this.state.earning}</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        flexDirection: "column",
        justifyContent : 'center',
        alignItems : 'center',

    },
    image : {
        borderWidth : 2,
        borderColor : '#00BFA5',
        marginBottom : 15,
    },
    textParent : {
        flexDirection : 'row',
        // borderWidth : 2,
        justifyContent : 'space-evenly',
        alignSelf : 'stretch',
    },
    text : {
        fontFamily : 'Montserrat, serif',
        color : '#00BFA5',
        fontSize : 20,
        fontWeight : 'bold'
    },
    bigText : {
        fontFamily : 'Montserrat, serif',
        color : '#00BFA5',
        fontSize : 30,
        fontWeight : 'bold'
    }
})