import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../components/Landing';
import FormSection1 from '../components/forms/FormSection1';
import FormSection2 from '../components/forms/FormSection2';
import FormSection3 from '../components/forms/FormSection3';
import FormSection4 from '../components/forms/FormSection4';
import FormSection5 from '../components/forms/FormSection5';
import FormSection6 from '../components/forms/FormSection6';
import FormSection7 from '../components/forms/FormSection7';
import FormSignature from '../components/forms/FormSignature';
import PDFDownload from '../components/forms/PDFDownload';

// Define route types
export type RootStackParamList = {
  Landing: undefined;
  FormSection1: undefined;
  FormSection2: undefined;
  FormSection3: undefined;
  FormSection4: undefined;
  FormSection5: undefined;
  FormSection6: undefined;
  FormSection7: undefined;
  FormSignature: undefined;
  PDFDownload: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="FormSection1" component={FormSection1} />
      <Stack.Screen name="FormSection2" component={FormSection2} />
      <Stack.Screen name="FormSection3" component={FormSection3} />
      <Stack.Screen name="FormSection4" component={FormSection4} />
      <Stack.Screen name="FormSection5" component={FormSection5} />
      <Stack.Screen name="FormSection6" component={FormSection6} />
      <Stack.Screen name="FormSection7" component={FormSection7} />
      <Stack.Screen name="FormSignature" component={FormSignature} />
      <Stack.Screen name="PDFDownload" component={PDFDownload} />
    </Stack.Navigator>
  );
}
