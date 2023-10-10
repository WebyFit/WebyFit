import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfigPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à ConfigPage</Text>
      <Text style={styles.content}>
        Página de configurações ficara com o Igor! Boa Sorte :).
      </Text>
    </View>
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

export default ConfigPage;
