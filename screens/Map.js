import MapView, { Marker } from 'react-native-maps-osmdroid'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react'
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 10.8505,
                        longitude: 76.2711,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }} maxZoomLevel={8}
                ><Marker
                        coordinate={{
                            latitude: 10.8505,
                            longitude: 76.2711,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 10.8505,
                            longitude: 76.3711,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 10.9505,
                            longitude: 76.2711,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 10.8705,
                            longitude: 76.1511,

                        }}
                        title={'tree'}
                        description={'by divya'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 9.8505,
                            longitude: 76.2711,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 9.8505,
                            longitude: 76.3711,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 9.8505,
                            longitude: 76.3211,
                        }}
                        title={'tree'}
                        description={'by albin'}
                    />
                </MapView>
            </View>
        )
    }
}