/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NativeBaseProvider} from "native-base"
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import {store} from './app/store/store';
import { RootStack } from './app/screens/RootStack';


function App(): JSX.Element {
  return (
    <NavigationContainer >
        <Provider store={store}>
    <NativeBaseProvider>
      <RootStack />
    </NativeBaseProvider>
    </Provider>
    </NavigationContainer>
  
  );
}
export default App;
