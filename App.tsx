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
   
        <Provider store={store}>
           <NavigationContainer >
    <NativeBaseProvider>
      <RootStack />
    </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
    
  
  );
}
export default App;
