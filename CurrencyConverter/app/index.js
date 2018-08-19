import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Let's build a Currency Converter from app/index.js.</Text>
  </View>
);

export default App;
