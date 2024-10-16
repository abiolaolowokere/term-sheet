import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/index'; // Ensure this is correctly imported

// Define the route types from index.tsx (RootStackParamList)
type NavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

export default function Landing() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/ijesaprime.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to IJESA Term Sheet App</Text>
      {/* Navigate to FormSection1 when "Start" is pressed */}
      <Button title="Start" onPress={() => navigation.navigate('FormSection1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
