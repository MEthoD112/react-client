import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { fonts, colors } from '../../styles';
import { Marker } from 'react-native-maps';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, markers: [] };
  }
  componentDidMount() {
    return fetch('http://10.0.2.2:3000/api/points', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {

        response.forEach(point => {
          point.coordinates.latitude = +point.coordinates.latitude;
          point.coordinates.longitude = +point.coordinates.longitude;
        });
        this.setState({
          markers: response,
          isLoading: false
        });
      })
      .catch((error) => {
        console.error("XUI error");
      });
  }

  markerClick() {
    console.error("XUI");
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 53.8640005,
            longitude: 27.5993982,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers.map((marker, i) => (
            <Marker
              coordinate={marker.coordinates}
              onPress={() => this.markerClick()}
              key={marker._id}
            ></Marker>
          ))}
        </MapView>
      </View>
    );
  }
}