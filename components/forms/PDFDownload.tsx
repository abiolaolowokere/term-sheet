// PDFDownload.tsx
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';

export default function PDFDownload() {
  const downloadPDF = async () => {
    try {
      // Make a request to your Flask backend to generate the PDF
      const response = await axios.post('https://chosenhomelandsolution.com/create_term_sheet_with_capitalization', {
        // Add form data collected from each section here
        companyName: 'ElecPed, Inc.',
        totalFinancing: 25000000,
        // Add other fields from the term sheet
      });

      if (response.status === 200) {
        Alert.alert('Success', 'PDF downloaded successfully.');
        // Handle file download logic (if necessary)
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to download PDF.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your term sheet is ready to download!</Text>
      <Button title="Download PDF" onPress={downloadPDF} />
    </View>
  );
}
