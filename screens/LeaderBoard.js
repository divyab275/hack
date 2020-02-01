import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
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
            { name: 'ngo Joe', earning: 52 },
            { name: 'ngo Jenny', earning: 120 },
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
                { email: '', score: 0 },
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
    }
})