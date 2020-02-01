import React from 'react';
import { View, Button, TextInput, StyleSheet, Image, Text,TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



// import LoginScreen from './Login';

export default class Garden extends React.Component {
    state = {
        show: false,
    }
    closeModal = () => {
        this.setState({ show: false })
    }
    render() {
        if (!this.props.show) return null
        const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
        plants = []
        for (let i = 0; i < 10; i++) {
            plants.push(
                <TouchableHighlight onPress={() => {
                    console.log("Kerillao2")
                    this.setState({ show: true })
                }}>
                    <View style={styles.albumCover} >
                        <Text>
                            Helo
                    </Text>
                        <Image source={{ uri: base64Icon, width: 70, height: 70 }} />
                    </View>
                </TouchableHighlight>
            )
        }
        // console.log(plants)
        return (
            <React.Fragment>
                <ScrollView>
                    <View style={styles.album}>
                        {plants}
                    </View>
                </ScrollView>
                <ModalExample2 show={this.state.show} close={this.closeModal} />
            </React.Fragment>

        );
    }
}


class ModalExample2 extends React.Component {
    render() {
        if (!this.props.show)
            return null
        return (
            <View style={styles.modal}>
                <Text>Hello Moduuu</Text>
                <Button onPress={() => {
                    this.props.close()
                }} title="Close" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    album: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    albumCover: {
        // height : 180,
        // width : 180,
        borderWidth: 2,
        margin: 2,

    },
    modal: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
        position: 'absolute'
    }

})
