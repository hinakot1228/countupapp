import React from 'react';
//Buttonを追加
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    int: 0,
  }

  render() {
    return (
      <View style={{flex:1, paddingVertical:80, alignItems:'center'}}>
        <Button
          title="Click Here"
          onPress={this.countUp}
        />
        <Text>{this.state.int}</Text>
      </View>
    );
  }
  countUp = () => {
    this.setState({
      int: this.state.int+1,
    });
  }
}