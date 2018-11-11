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

class NewUserExercise extends Component {
  state = {
    modalVisible: false,
    set: '0',
    rep: '0',
    rest: '0',
    weight: '0',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onChange(evt, name) {
    this.setState({ [name]: evt });
  }

  onSubmit = async () => {
    console.log('HELLO SUBMITTING');
    const newExercise = {
      exerciseId: 1,
      userId: 1,
      set: this.state.set,
      rep: this.state.rep,
      rest: this.state.rep,
      weight: this.state.weight,
    };
    try {
      const response = await axios.post(
        'https://noob-fitness.herokuapp.com/api/userexercise/1',
        newExercise
      );
      console.log('submit successful', response.data);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    // console.log('state set', this.state);
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
          <View style={{ margin: 55, padding: 10, height: 60 }}>
            <View>
              <TextInput
                placeholder={'set'}
                placeholderTextColor="#841684"
                name="set"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'set')}
              />
              <TextInput
                placeholder={'rep'}
                placeholderTextColor="#841684"
                name="rep"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'rep')}
              />
              <TextInput
                placeholder={'rest'}
                placeholderTextColor="#841684"
                name="rest"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'rest')}
              />
              <TextInput
                placeholder={'weight'}
                placeholderTextColor="#841684"
                name="weight"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'weight')}
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
          <Text>Add Completed Exercise</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default NewUserExercise;
