/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { config, GluestackUIProvider} from "@gluestack-ui/themed"
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import {store} from './app/store/store';
import { RootStack } from './app/screens/RootStack';


function App(): JSX.Element {
  return (
    <NavigationContainer >
        <Provider store={store}>
    <GluestackUIProvider config={config.theme}>
      <RootStack />
    </GluestackUIProvider>
    </Provider>
    </NavigationContainer>
  
  );
}
export default App;
