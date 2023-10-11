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
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
          {isLoading ? (
            <Tab.Screen
              name="LadingPage"
              component={LadingPage}
            />
          ) : (
            <>
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
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;