import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import fetchCoinData from '../actions/fetchCoinData';
import CoinCard from './CoinCard';

const styles = StyleSheet.create({
  containerScroll: {
    paddingBottom: 100,
    paddingTop: 55,
  },
});

function mapStateToProps(state) {
  return { ...state };
}

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  render() {
    const { crypto } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.containerScroll}>
        {crypto &&
          crypto.data.map(coin => {
            return <CoinCard key={coin.id} {...coin} />;
          })}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
