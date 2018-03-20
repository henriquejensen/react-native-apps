import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
  state = {
    messages: [],
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { text } = this.props;
    console.log('Hello' + text);
    console.log(this.state.messages);
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
          name: text,
        }}
      />
    );
  }
}

export default Chat;
