import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/Main';
import { ListMain } from './src/DataListUI/List';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
        {/*<ListMain />*/}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
