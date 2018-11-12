import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert } from 'react-native';
import ButtonComp from './Button';
import ModalExample from './tryingStuff';
import UpdateUserExercise from './updateUserExercise';
import NewUserExercise from './newUserExercise';
import WorkoutHistory from './WorkoutHistory';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to workout history"
          onPress={() => this.props.navigation.navigate('WorkoutHistory')}
        />
        <Button
          title="Add new workout"
          onPress={() => this.props.navigation.navigate('NewWorkout')}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    WorkoutHistory: WorkoutHistory,
    NewWorkout: NewUserExercise,
  },
  {
    initialRouteName: 'Home',
  }
);

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
  }
  onClick = event => {
    Alert.alert('You tapped the button');
  };

  render() {
    console.log('IN THE RENDER HELLO');
    // console.log(this.state.counter);
    return (
      //     <View style={styles.container}>
      //       <Text>WORK PLS</Text>
      //       <Text>Hi, I'm working now! :)</Text>
      //       <Button
      //         title="click me pls"
      //         onPress={this.onClick}
      //         accessibilityLabel="Learn more about this button"
      //         color="#841584"
      //       />
      //       <ButtonComp />
      //       <ModalExample />
      //       <UpdateUserExercise />
      //       <NewUserExercise />
      //     </View>
      <RootStack />
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
