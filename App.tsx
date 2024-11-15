
import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
      {/* <Home /> */}
    </SafeAreaView>
  );
};

