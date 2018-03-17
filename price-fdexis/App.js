import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: 0, classes: 0 };
  }

  totalValue(people) {
    return 30 + (people - 1) * 10;
  }

  descountApply(people, classes) {
    if (classes < 4) {
      return 0;
    }
    if (classes < 8) {
      return this.totalValue(people) * classes * 0.25;
    }

    return this.totalValue(people) * classes * 0.35;
  }

  render() {
    const valueTotalWithouDescount =
      this.totalValue(this.state.people) * this.state.classes;

    const valueWithDescount = this.descountApply(
      this.state.people,
      this.state.classes,
    );
    return (
      <View style={styles.container}>
        <Image
          source={require('./logo.jpg')}
          style={{ width: 50, height: 50 }}
        />
        <Text>Calculadora de preços FdeXis</Text>
        <Text>Entre com a quantidade de pessoas:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
          }}
          onChangeText={people => this.setState({ people })}
          value={this.state.people}
          maxLength={1}
        />
        <Text>Quantidade de pessoas: {this.state.people}</Text>
        <Text>Entre com a quantidade de aulas:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={classes => this.setState({ classes })}
          value={this.state.classes}
          maxLength={1}
        />
        <Text>Quantidade de aulas: {this.state.classes}</Text>

        <Text>Valor sem desconto R$ {valueTotalWithouDescount}</Text>
        <Text>Desconto aplicado R$ {valueWithDescount}</Text>
        <Text>
          Valor total R$ {valueTotalWithouDescount - valueWithDescount}
        </Text>
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
