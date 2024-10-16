import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index'; // Make sure to import the type

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection5'>;


export default function FormSection5() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from ElecPed Term Sheet (Section V: No-Shop)
  const [noShopPeriod, setNoShopPeriod] = useState(
    'Neither the company nor its directors, officers, or agents will entertain discussions with any other investor or consider any other investment or acquisition proposals for 30 days without prior approval of PacificRim Eco Ventures.'
  );

  // Reset all values to empty strings
  const resetFields = () => {
    setNoShopPeriod('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* No-Shop Period */}
      <Text>No-Shop Period:</Text>
      <TextInput
        value={noShopPeriod}
        onChangeText={setNoShopPeriod}
        style={styles.input}
      />

      {/* Buttons for reset and next */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Next" onPress={() => navigation.navigate('FormSection6')} />
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
