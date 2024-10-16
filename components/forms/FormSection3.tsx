import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/index'; // Make sure to import the type
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection3'>;

export default function FormSection3() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from ElecPed Term Sheet (Section III: Other Matters)
  const [legalFees, setLegalFees] = useState('30000');
  const [approvals, setApprovals] = useState(
    'Necessary board, shareholder, and other approvals obtained'
  );
  const [executionAgreements, setExecutionAgreements] = useState(
    'Execution of definitive agreements, including appropriate representations and warranties'
  );

  // Reset all values to empty strings
  const resetFields = () => {
    setLegalFees('');
    setApprovals('');
    setExecutionAgreements('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Legal and Due Diligence Fees */}
      <Text>Legal and Due Diligence Fees:</Text>
      <TextInput
        value={legalFees}
        onChangeText={setLegalFees}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Approvals */}
      <Text>Approvals:</Text>
      <TextInput
        value={approvals}
        onChangeText={setApprovals}
        style={styles.input}
      />

      {/* Execution of Definitive Agreements */}
      <Text>Execution of Definitive Agreements:</Text>
      <TextInput
        value={executionAgreements}
        onChangeText={setExecutionAgreements}
        style={styles.input}
      />

      {/* Buttons for reset and next */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Next" onPress={() => navigation.navigate('FormSection4')} />
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
