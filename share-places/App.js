import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FetchLocation from './src/components/FetchLocation';
import UsersMap from './src/components/UsersMap';
import { URL_FIREBASE } from './src/utils/constants';

export default class App extends React.Component {
  state = {
    userLocation: null,
    userPlaces: [],
  };

  _getUserGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          },
        });
        fetch(URL_FIREBASE + '/places.json', {
          method: 'POST',
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        })
          .then(resp => console.log(resp))
          .catch(err => console.log(err));
      },
      err => {
        console.log(err);
      },
    );
  };

  _getUserPlaces = () => {
    fetch(URL_FIREBASE + '/places.json')
      .then(resp => resp.json())
      .then(response => {
        const userPlaces = [];
        for (const key in response) {
          userPlaces.push({
            latitude: response[key].latitude,
            longitude: response[key].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            id: key,
          });
        }

        this.setState({
          userPlaces,
          userLocation: userPlaces[0],
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._getUserPlaces} title="Get User places" />
        <FetchLocation getUserGeoLocation={this._getUserGeoLocation} />
        <UsersMap {...this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
