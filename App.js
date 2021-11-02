import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';
import SignedInStack from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SignedInStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
