import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LadingPage from './components/LadingPage';
import HomePage from './components/HomePage';
import ConfigPage from './components/ConfigPage';
import CartPage from './components/CartPage';

const Tab = createBottomTabNavigator();

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
        {isLoading ? (
          <Tab.Navigator initialRouteName="LadingPage" tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
              name="LadingPage"
              component={LadingPage}
            />
          </Tab.Navigator>
        ) : (
          <Tab.Navigator initialRouteName="HomePage" tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
              name="HomePage"
              component={HomePage}
            />
            <Tab.Screen
              name="ConfigPage"
              component={ConfigPage}
            />
            <Tab.Screen
              name="CartPage"
              component={CartPage}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

export default App;
