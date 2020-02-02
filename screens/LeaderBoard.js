import React from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import Leaderboard from 'react-native-leaderboard';
import axios from 'axios';
//...




export default class LeaderboardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: 'donor',
        }
    }
    render() {
        return (
            <View style={styles.screen}>
                <View ><Text style={styles.heading}>Leaderboard</Text></View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Donor" color='#00BFA5' onPress={() => {
                            this.setState({ shown: 'donor' })
                        }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Planters" color="#00BFA5" onPress={() => {
                            this.setState({ shown: 'planter' })
                        }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="NGO" color="#00BFA5" onPress={() => {
                            this.setState({ shown: 'ngo' })
                        }} />
                    </View>
                </View>
                <View>
                    <DonorLeaderboard show={this.state.shown == 'donor'} />
                    <PlanterLeaderboard show={this.state.shown == 'planter'} />
                    <NGOLeaderboard show={this.state.shown == 'ngo'} />
                </View>

            </View>
        );
    }

}
class NGOLeaderboard extends React.Component {
    //...
    state = {
        data: [
            { name: 'SankalpTaru', earning: 520 },
            { name: 'Green Yatra', earning: 720 },
            { name: 'Say Trees', earning: 1020 },
            //...
        ] //can also be an object of objects!: data: {a:{}, b:{}}
    }

    render() {
        if (!this.props.show) return null;
        return (
            <Leaderboard
                data={this.state.data}
                sortBy='earning'
                labelBy='name' />)
    }
}
class DonorLeaderboard extends React.Component {
    //...
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { email: 'hasseena', score: 5 },
                { email: 'rwithik', score: 69 },
                { email: 'divya', score: 420 },
                { email: 'justin', score: 39 }
                //...
            ] //can also be an object of objects!: data: {a:{}, b:{}}
        }
    }
    // componentWillReceiveProps(){
    componentDidMount() {
        self = this;
        axios.get('http://treeky.herokuapp.com/leaderboard/donors')
            .then(function (response) {
                console.log(response.data);
                self.setState({ data: response.data.donors })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (!this.props.show) return null;
        return (
            <Leaderboard
                data={this.state.data}
                sortBy='score'
                labelBy='email' />)
    }
}
class PlanterLeaderboard extends React.Component {
    //...
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: '', earning: 0 },
                //...
            ] //can also be an object of objects!: data: {a:{}, b:{}}
        }
    }
    componentDidMount() {
        self = this;
        axios.get('http://treeky.herokuapp.com/leaderboard/planters')
            .then(function (response) {
                console.log(response.data);
                self.setState({ data: response.data.leaderboard })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (!this.props.show) return null;
        return (
            <Leaderboard
                data={this.state.data}
                sortBy='earning'
                labelBy='name' />)
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
        marginBottom: 30,
    },
    heading:{
        padding:20,
        textAlign:'center',
        fontSize:30,
        color:'#00bfa5'
    }
})