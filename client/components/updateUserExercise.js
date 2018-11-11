import {
  TextInput,
  Modal,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text,
} from 'react-native';
import axios from 'axios';

import React, { Component } from 'react';

class UpdateUserExercise extends Component {
  state = {
    modalVisible: false,
    set: '0',
    rep: 1,
    rest: 60,
    weight: 0,
  };
  // async componentDidMount() {
  //   try {
  //     const response = await axios.get(
  //       'https://noob-fitness.herokuapp.com/api/userexercise'
  //     );
  //     this.setState({
  //       set: response.data.set,
  //       rep: response.data.rep,
  //       rest: response.data.rest,
  //       weight: response.data.weight,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onChange(evt) {
    console.log(evt);
    this.setState({ set: evt });
  }

  onSubmit = () => {
    console.log('HELLO SUBMITTING');
  };
  render() {
    console.log('state set', this.state.set);
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ marginTop: 220 }}>
            <View>
              <TextInput
                placeholder={'0'}
                placeholderTextColor="#841684"
                name="set"
                // value={this.state.set}
                onChangeText={text => this.onChange(text)}
              />
              <Button title="submit" onPress={() => this.onSubmit()} />
            </View>
            <Button
              title="Hide Modal"
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default UpdateUserExercise;
