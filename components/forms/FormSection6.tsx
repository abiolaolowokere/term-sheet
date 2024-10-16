import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index'; // Ensure this is correctly imported

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection6'>;

export default function FormSection6() {
  const navigation = useNavigation<NavigationProp>(); // Correctly typing useNavigation

  // Default values from ElecPed Term Sheet (Section VI: Confidentiality)
  const [confidentiality, setConfidentiality] = useState(
    'The summary of proposed terms and any related correspondence from the investors are to be held in strict confidence and are not to be disclosed to any party, other than the company’s legal and financial advisors, without the prior approval of PacificRim Eco Ventures.'
  );

  // Reset all values to empty strings
  const resetFields = () => {
    setConfidentiality('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Confidentiality */}
      <Text>Confidentiality Agreement:</Text>
      <TextInput
        value={confidentiality}
        onChangeText={setConfidentiality}
        style={styles.input}
      />

      {/* Buttons for reset and next */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Next" onPress={() => navigation.navigate('FormSection7')} />
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
