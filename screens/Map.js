import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'
import MapView from 'react-native-maps-osmdroid';


// import LoginScreen from './Login';

export default class MapScreen extends React.Component {
    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
       
      onRegionChange(region) {
        this.setState({ region });
      }
       
      render() {
        return (
          <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          />
        );
      }
}





const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

