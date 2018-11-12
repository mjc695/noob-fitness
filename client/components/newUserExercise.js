import {
  TextInput,
  Modal,
  View,
  Alert,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Button, FormInput } from 'react-native-elements';

class NewUserExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseId: 1,
      workoutId: 1,
      set: '0',
      rep: '0',
      rest: '0',
      weight: '0',
    };
  }
  componentDidMount() {}

  onChange(evt, name) {
    this.setState({ [name]: evt });
  }
  changeExercise(num) {
    this.setState({ exerciseId: num });
  }

  onSubmit = async () => {
    console.log('HELLO SUBMITTING');
    const newExercise = {
      exerciseId: this.state.exerciseId,
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
      navi = () => this.props.navigation.navigate('Home');
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
      <View style={{ marginTop: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <Text>Pick an exercise to add</Text>
        </View>
        <Button
          containerViewStyle={{ padding: 10 }}
          title="Deadlift"
          onPress={() => this.changeExercise(1)}
        />
        <Button
          containerViewStyle={{ padding: 10 }}
          title="Squat"
          onPress={() => this.changeExercise(2)}
        />
        <Button
          containerViewStyle={{ padding: 10 }}
          title="Bench Press"
          onPress={() => this.changeExercise(3)}
        />
        <View style={{ margin: 20, padding: 10, height: 60 }}>
          <View>
            <View style={{ padding: 5 }}>
              <TextInput
                style={{ borderColor: '#483d8b', borderWidth: 1 }}
                placeholder={' Input set number'}
                placeholderTextColor="#841684"
                name="set"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'set')}
              />
            </View>
            <View style={{ padding: 5 }}>
              <TextInput
                style={{ borderColor: '#483d8b', borderWidth: 1 }}
                placeholder={' Input rep count'}
                placeholderTextColor="#841684"
                name="rep"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'rep')}
              />
            </View>
            <View style={{ padding: 5 }}>
              <TextInput
                style={{ borderColor: '#483d8b', borderWidth: 1 }}
                placeholder={' Input amount of Rest (optional)'}
                placeholderTextColor="#841684"
                name="rest"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'rest')}
              />
            </View>
            <View style={{ padding: 5 }}>
              <TextInput
                style={{ borderColor: '#483d8b', borderWidth: 1 }}
                placeholder={' Input weight'}
                placeholderTextColor="#841684"
                name="weight"
                // value={this.state.set}
                onChangeText={text => this.onChange(text, 'weight')}
              />
            </View>
            <Button title="submit" onPress={() => this.onSubmit()} />
          </View>
        </View>
      </View>
    );
  }
}

export default NewUserExercise;
