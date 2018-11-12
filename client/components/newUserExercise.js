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
import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';

class NewUserExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      workoutId: 1,
      set: '0',
      rep: '0',
      rest: '0',
      weight: '0',
    };
  }

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
      workoutId: this.state.workoutId || 1,
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
      navi = () => this.props.navigation.navigate('WorkoutHistory');
      navi();
      Alert.alert('Submission successful!');
    } catch (err) {
      console.log(err);
      Alert.alert('Failure to submit, please check values and try again');
    }
  };
  render() {
    // console.log('state set', this.state);
    return (
      <View style={{ marginTop: 22 }}>
        <Text> work pls</Text>
        <View style={{ margin: 55, padding: 10, height: 60 }}>
          <View>
            <TextInput
              style={{ borderColor: '#7a42f4', borderWidth: 1 }}
              placeholder={' Input set number'}
              placeholderTextColor="#841684"
              name="set"
              // value={this.state.set}
              onChangeText={text => this.onChange(text, 'set')}
            />
            <TextInput
              style={{ borderColor: '#7a42f4', borderWidth: 1 }}
              placeholder={' Input rep count'}
              placeholderTextColor="#841684"
              name="rep"
              // value={this.state.set}
              onChangeText={text => this.onChange(text, 'rep')}
            />
            <TextInput
              style={{ borderColor: '#7a42f4', borderWidth: 1 }}
              placeholder={' Input amount of Rest'}
              placeholderTextColor="#841684"
              name="rest"
              // value={this.state.set}
              onChangeText={text => this.onChange(text, 'rest')}
            />
            <TextInput
              style={{ borderColor: '#7a42f4', borderWidth: 1 }}
              placeholder={' Input weight'}
              placeholderTextColor="#841684"
              name="weight"
              // value={this.state.set}
              onChangeText={text => this.onChange(text, 'weight')}
            />
            <Button title="submit" onPress={() => this.onSubmit()} />
          </View>
        </View>
      </View>
    );
  }
}

export default NewUserExercise;
