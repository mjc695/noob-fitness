import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';

export default class WorkoutHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWorkouts: false,
    };
  }

  async componentDidMount() {
    try {
      const workouts = await axios.get(
        'https://noob-fitness.herokuapp.com/api/userexercise/'
      );
      const allWorkouts = workouts.data;
      // console.log('keys in mount:', Object.keys(allWorkouts));
      this.setState({ allWorkouts: allWorkouts });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (!!this.state.allWorkouts) {
      // console.log(
      //   'typeof in render',
      //   Object.keys(this.state.allWorkouts).length
      // );
      // if (this.state.allWorkouts.length) console.log('hello');

      return (
        <View>
          <ScrollView>
            {Object.values(this.state.allWorkouts).map(workout => {
              // console.log('each workout', workout.id);
              let type = '';
              if (workout.exerciseId === 1) type = 'Deadlift';
              else if (workout.exerciseId === 2) type = 'Squat';
              else type = 'Bench Press';
              return (
                <View key={workout.id} style={{ padding: 20 }}>
                  <Text>Workout Date : {workout.createdAt.slice(0, 10)}</Text>
                  <Text>Exercise : {type}</Text>
                  <Text>Set : {workout.set} </Text>
                  <Text>Rep : {workout.rep} </Text>
                  <Text>Weight : {workout.weight} </Text>
                  <Text>Rest : {workout.rest}</Text>
                </View>
              );
            })}
            {/* <Text>TELL ME WHAT YOU WANT</Text> */}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View>
          <Text>No workouts found</Text>
        </View>
      );
    }
  }
}
