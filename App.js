import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LadingPage from './components/LadingPage';
import HomePage from './components/HomePage';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LadingPage" headerShown="false">
          {isLoading ? (
            <Stack.Screen name="LadingPage" component={LadingPage} />
          ) : (
            <Stack.Screen name="HomePage" component={HomePage} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
