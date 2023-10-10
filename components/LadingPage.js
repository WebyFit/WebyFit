import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class LadingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logoWebyFit.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>WebyFit</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40FF6A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
  },
  text: {
    fontSize: 45,
    color: 'black',
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default LadingPage;
