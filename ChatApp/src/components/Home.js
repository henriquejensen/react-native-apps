import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  state = {};

  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>Entre com seu nome</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Seu nome aqui"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({ text: this.state.text });
          }}
        >
          <Text style={styles.text}>Próximo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
  },
  nameInput: {},
});

export default Home;
