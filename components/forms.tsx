import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function FormScreen() {
  const [companyName, setCompanyName] = useState('');
  const [totalFinancing, setTotalFinancing] = useState('');
  const [investors, setInvestors] = useState('');

  const submitForm = async () => {
    try {
      const response = await axios.post('https://chosenhomelandsolutions.com/create_term_sheet', {
        companyName,
        totalFinancing,
        investors,
      });
      Alert.alert('Success', 'Term sheet created successfully');
    } catch (error) {
      Alert.alert('Error', 'There was an error creating the term sheet');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Company Name:</Text>
      <TextInput value={companyName} onChangeText={setCompanyName} style={styles.input} />

      <Text>Total Amount of Financing:</Text>
      <TextInput value={totalFinancing} onChangeText={setTotalFinancing} keyboardType="numeric" style={styles.input} />

      <Text>Investors and Amounts:</Text>
      <TextInput value={investors} onChangeText={setInvestors} style={styles.input} />

      <Button title="Create Term Sheet" onPress={submitForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
