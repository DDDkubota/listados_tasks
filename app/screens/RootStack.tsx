import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen/HomeScreen';
import { TaskScreen } from './TaskScreen/TaskScreen';
import { UserScreen } from './UserScreen/UserScreen';

export const RootStack = () => {

const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
  )
}
