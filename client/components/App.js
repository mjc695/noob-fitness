import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import ButtonComp from './Button';
import ModalExample from './tryingStuff';
import UpdateUserExercise from './updateUserExercise';
import NewUserExercise from './newUserExercise';
import WorkoutHistory from './WorkoutHistory';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Button } from 'react-native-elements';

class HomeScreen extends React.Component {
  state = {
    isSignedIn: false,
  };
  isSignedIn() {
    if (this.state.isSignedIn) Alert.alert('You have been signed out');
    else Alert.alert('Thank you for signing in!');
    this.setState({ isSignedIn: !this.state.isSignedIn });
    console.log(this.state);
  }
  render() {
    if (this.state.isSignedIn) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text> Click one of the buttons to begin: </Text>
          <Button
            containerViewStyle={{ padding: 15 }}
            title="Go to workout history"
            onPress={() => this.props.navigation.navigate('WorkoutHistory')}
          />
          <Button
            containerViewStyle={{ padding: 15 }}
            title="Add new workout"
            onPress={() => this.props.navigation.navigate('NewWorkout')}
          />
          <Button
            containerViewStyle={{ padding: 40 }}
            title="Sign Out"
            onPress={() => this.isSignedIn()}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Welcome to Noob-Fitness</Text>

          <Button
            containerViewStyle={{ padding: 15 }}
            title="Please Sign In"
            onPress={() => this.isSignedIn()}
          />
          {/* <Button
          containerViewStyle={{ padding: 15 }}
          title="Go to workout history"
          onPress={() => this.props.navigation.navigate('WorkoutHistory')}
          />
          <Button
          containerViewStyle={{ padding: 15 }}
          title="Add new workout"
          onPress={() => this.props.navigation.navigate('NewWorkout')}
        /> */}
        </View>
      );
    }
  }
}
class SignIn extends React.Component {
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
    SignIn: SignIn,
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
