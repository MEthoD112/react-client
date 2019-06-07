import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class AddpointScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: {
        title: "Point title",
        coordinates: {
          latitude: "53.8640005",
          longitude: "27.5993982",
        }
      }
    };
  }

  onClick(point) {
    return fetch('http://10.0.2.2:3000/api/points', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(this.state.point)
    })
      .then(response => {
      })
      .catch((error) => {
        console.error("XUI error");
      });
  }

  changeTitle(title) {
    this.setState(prevState => ({
      point: {
        ...prevState.point,
        title: title
      }
    }))
  }

  changeLatitude(latitude) {
    this.setState(prevState => ({
      point: {
        ...prevState.point,
        coordinates: {
          ...prevState.point.coordinates,
          latitude: latitude
        }
      }
    }))
  }

  changeLongitude(longitude) {
    this.setState(prevState => ({
      point: {
        ...prevState.point,
        coordinates: {
          ...prevState.point.coordinates,
          longitude: longitude
        }
      }
    }))
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>ADD NEW POINT</Text>
        <Text>TITLE</Text>
        <TextInput  onChangeText={title => this.changeTitle(title)} 
                    defaultValue={this.state.point.title} >
        </TextInput>
        <Text>Latitude</Text>
        <TextInput onChangeText={latitude => this.changeLatitude(latitude)}
                   defaultValue={this.state.point.coordinates.latitude} >
        </TextInput>
        <Text>Longitude</Text>
        <TextInput onChangeText={longitude => this.changeLongitude(longitude)} 
                   defaultValue={this.state.point.coordinates.longitude} >
        </TextInput>
        <Button onPress={() => this.onClick(this.state.point)} title={"Sign in"}></Button>
      </View>
    )
  }
}