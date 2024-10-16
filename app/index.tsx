import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../components/Landing';
import FormScreen from '../components/forms';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Create Term Sheet' }} />
    </Stack.Navigator>
  );
}
