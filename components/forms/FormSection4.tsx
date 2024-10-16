import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/index'; // Make sure to import the type
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection4'>;

export default function FormSection4() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from ElecPed Term Sheet (Section IV: Conditions to Closing)
  const [dueDiligence, setDueDiligence] = useState(
    'Completion of all legal, intellectual property, technical, corporate, and other due diligence to the satisfaction of investors.'
  );
  const [approvals, setApprovals] = useState(
    'Company must obtain necessary board, shareholder, and other legally required approvals.'
  );
  const [executionOfAgreements, setExecutionOfAgreements] = useState(
    'Execution of definitive agreements, including stock purchase agreements with appropriate representations and warranties.'
  );

  // Reset all values to empty strings
  const resetFields = () => {
    setDueDiligence('');
    setApprovals('');
    setExecutionOfAgreements('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Due Diligence */}
      <Text>Due Diligence:</Text>
      <TextInput
        value={dueDiligence}
        onChangeText={setDueDiligence}
        style={styles.input}
      />

      {/* Approvals */}
      <Text>Approvals:</Text>
      <TextInput
        value={approvals}
        onChangeText={setApprovals}
        style={styles.input}
      />

      {/* Execution of Agreements */}
      <Text>Execution of Agreements:</Text>
      <TextInput
        value={executionOfAgreements}
        onChangeText={setExecutionOfAgreements}
        style={styles.input}
      />

      {/* Buttons for reset and next */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Next" onPress={() => navigation.navigate('FormSection5')} />
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
