import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert } from 'react-native';
import ButtonComp from './Button';
import Modal from './tryingStuff';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    console.log('mounting');
    this.setState({ counter: this.state.counter + 1 });
  }
  onClick = event => {
    Alert.alert('You tapped the button');
    this.setState({ counter: this.state.counter + 1 });
    console.log('working', this.state.counter);
  };

  render() {
    console.log('IN THE RENDER HELLO');
    console.log(this.state.counter);
    return (
      <View style={styles.container}>
        <Text>WORK PLS</Text>
        <Text>Hi, I'm working now! :)</Text>
        <Button
          title="click me pls"
          onPress={this.onClick}
          accessibilityLabel="Learn more about this button"
          color="#841584"
        />
        <ButtonComp />
        <Modal />
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
