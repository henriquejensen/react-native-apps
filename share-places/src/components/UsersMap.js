import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default function UsersMap(props) {
  const { userLocation, userPlaces } = props;
  let mapMarker = null;
  if (userLocation) {
    mapMarker = <MapView.Marker coordinate={userLocation} />;
  }
  const mapAllMarkers = userPlaces.map(p => (
    <MapView.Marker coordinate={p} key={p.id} />
  ));
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={userLocation}
        style={styles.map}
      >
        {mapMarker}
        {mapAllMarkers}
      </MapView>
    </View>
  );
}
