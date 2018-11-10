import React, { Component } from 'react';
import {
  Modal,
  FlatList,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
} from 'react-native';
import axios from 'axios';

class ModalExample extends Component {
  state = {
    modalVisible: false,
    exercise: {},
  };

  async componentDidMount() {
    console.log('mounting');
    try {
      const response = await axios.get(
        'https://noob-fitness.herokuapp.com/api/exercise '
      );
      // console.log('in mount', response);
      this.setState({ exercise: response.data[0] });
    } catch (err) {
      console.log(err);
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log(this.state.exercise, 'in render');
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 220, justifyContent: 'space-between' }}>
            <View
              style={{
                alignItems: 'center',
              }}
              key={this.state.id}
            >
              <Text>{this.state.exercise.name}</Text>
              <Text>{this.state.exercise.type}</Text>
              <Text>{this.state.exercise.description}</Text>

              {/* <TouchableHighlight */}
            </View>
            <Button
              title="Hide Modal"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              {/* >Hide Modal */}
            </Button>
            {/* </TouchableHighlight> */}
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

export default ModalExample;
