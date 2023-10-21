import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
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

    if (isLoading) {
      return (
        <NavigationContainer>
          <LadingPage />
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
              name="HomePage"
              component={HomePage}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const iconColor = focused ? 'green' : color;
                  const iconWidth = focused ? '30%' : '20%';
                  const iconHeight = focused ? '70%' : '50%';

                  return (
                    <Image
                      source={require('./assets/iconHomeTab.png')}
                      style={{ width: iconWidth, height: iconHeight, tintColor: iconColor }}
                    />
                  );
                },
              })}
            />
          <Tab.Screen
            name="ConfigPage"
            component={ConfigPage}
            options={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const iconColor = focused ? 'green' : color;
                const iconWidth = focused ? '30%' : '20%';
                const iconHeight = focused ? '70%' : '50%';

                return (
                  <Image
                    source={require('./assets/iconConfigTab.png')}
                    style={{ width: iconWidth, height: iconHeight, tintColor: iconColor }}
                  />
                );
              },
            })}
          />
          <Tab.Screen
            name="CartPage"
            component={CartPage}
            options={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const iconColor = focused ? 'green' : color;
                const iconWidth = focused ? '30%' : '20%';
                const iconHeight = focused ? '70%' : '50%';

                return (
                  <Image
                    source={require('./assets/iconCartTab.png')}
                    style={{ width: iconWidth, height: iconHeight, tintColor: iconColor }}
                  />
                );
              },
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
