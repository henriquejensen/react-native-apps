import React from 'react';
import { View, Button } from 'react-native';

export default function FetchLocation(props) {
  return (
    <View>
      <Button
        onPress={props.getUserGeoLocation}
        title="Get user location"
        color="#841584"
        accessibilityLabel="Pega a localização do usuário"
      />
    </View>
  );
}
