import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index'; // Ensure this is correctly imported

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection7'>;

export default function FormSection7() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from ElecPed Term Sheet (Section VII: Expiration)
  const [expiration, setExpiration] = useState(
    'The term sheet shall expire at 5:00 pm US Pacific Time on September 20, 2019, unless executed by both the company and PacificRim Eco Ventures by such date.'
  );

  // Reset all values to empty strings
  const resetFields = () => {
    setExpiration('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Expiration */}
      <Text>Expiration of the Term Sheet:</Text>
      <TextInput
        value={expiration}
        onChangeText={setExpiration}
        style={styles.input}
      />

      {/* Buttons for reset and finishing the form */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Finish" onPress={() => navigation.navigate('PDFDownload')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
