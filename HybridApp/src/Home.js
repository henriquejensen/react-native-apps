
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import pokemon from './pokemonStore';

const Home = props => {

  const handleClick = (pokemon) => {
    props.selectPokemon(pokemon);
    props.history.push('pokemon');
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>{'Pokemons da ligue 12'}</Text>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleClick(item)}
            style={styles.wrapper}
          >
            <View style={styles.container}>
              <Image style={{ width: 50, height: 50 }} source={{ uri: item.photoUrl }} />
              <Text style={styles.text} >{item.name}</Text>
            </View>
            
          </TouchableOpacity>          
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#666666',
    flex: 1,
    height: 50,
    width: 300,
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})