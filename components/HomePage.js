import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ConfigPage from './ConfigPage'; 
import CartPage from './CartPage';

const Tab = createBottomTabNavigator();

const HomePageTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à tela de compra!</Text>
      <Text style={styles.content}>
        Aqui é onde o Josué vai sofrer um pouco.
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#D9D9D9',
        inactiveBackgroundColor: '#D9D9D9',
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="ConfigPage"
        component={ConfigPage}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePageTab}
      />
      <Tab.Screen
        name="CartPage"
        component={CartPage}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default TabNavigator;
