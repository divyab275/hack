import React from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native'

export default  () =>{
    return (
    <View style={styles.screen}>
    <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Sign Up" />
            </View>
            <View style={styles.button}>
                <Button title="Login"/>
            </View>
        </View>     
    </View> 
    </View> 
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#cdfac3',
        alignItems:'center'
    },
    inputContainer:{
        padding:40,
        backgroundColor:'#ffffff',
        borderRadius:5,
        width:'80%',
        shadowColor:'#fff',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:6,
        elevation:13, 
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:30,
    },
    input:{
        borderColor:'white',
        borderBottomWidth:.5,
        paddingBottom:0,
        paddingTop:15,
    },
    button:{
        width:'33%'
    }
})