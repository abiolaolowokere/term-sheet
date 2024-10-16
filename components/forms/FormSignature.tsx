// FormSignature.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index'; // Ensure this is correctly imported

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSignature'>;

export default function FormSignature() {
    const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Please confirm your information and sign below:</Text>
      {/* Add a signature component if needed */}

      <Button title="Finish and Download PDF" onPress={() => navigation.navigate('PDFDownload')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
