// FormSection1.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index'; // Ensure this is correctly imported

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection1'>;

export default function FormSection1() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from the ElecPed Term Sheet
  const [issuer, setIssuer] = useState('ElecPed, Inc.');
  const [totalFinancing, setTotalFinancing] = useState('25000000');
  const [investors, setInvestors] = useState('PacificRim Eco Ventures ("PEV")');
  const [amount, setAmount] = useState('25000000');
  const [security, setSecurity] = useState('Series A Preferred Stock ("Series A Preferred")');
  const [capitalStructure, setCapitalStructure] = useState('$50,000,000 post-money valuation');
  const [optionPool, setOptionPool] = useState('1,500,000 shares');
  const [pricePerShare, setPricePerShare] = useState('__.00');
  const [firstClosing, setFirstClosing] = useState('On or before October 30, 2019');

  // Pro-forma Capitalization Table
  const [stakeholders, setStakeholders] = useState([
    { id: '1', name: 'Sanchez', preDealShares: '5000', postDealShares: '5000', percentagePreDeal: 40, percentagePostDeal: 17.9 },
    { id: '2', name: 'Ward', preDealShares: '5000', postDealShares: '5000', percentagePreDeal: 40, percentagePostDeal: 17.9 },
    { id: '3', name: 'Angel', preDealShares: '2500', postDealShares: '2500', percentagePreDeal: 20, percentagePostDeal: 8.9 },
    { id: '4', name: 'Series A', preDealShares: '0', postDealShares: '14000', percentagePreDeal: 0, percentagePostDeal: 50 },
    { id: '5', name: 'Option Pool', preDealShares: '0', postDealShares: '1500', percentagePreDeal: 0, percentagePostDeal: 5.4 },
  ]);

  // Handle user input in Pro-Forma Capitalization Table
  // Type definition for the stakeholder structure
type Stakeholder = {
    id: string;
    name: string;
    preDealShares: string;
    postDealShares: string;
    percentagePreDeal: number;
    percentagePostDeal: number;
  };
  
  const handleStakeholderChange = (id: string, field: keyof Stakeholder, value: string) => {
    setStakeholders(prevState =>
      prevState.map(stakeholder =>
        stakeholder.id === id ? { ...stakeholder, [field]: value } : stakeholder
      )
    );
  };
  

  return (
    <View style={styles.container}>
      {/* Existing fields */}
      <Text>Issuer:</Text>
      <TextInput value={issuer} onChangeText={setIssuer} style={styles.input} />

      <Text>Total Amount of Financing:</Text>
      <TextInput 
        value={totalFinancing} 
        onChangeText={setTotalFinancing} 
        style={styles.input} 
        keyboardType="numeric" 
      />

      <Text>Investors and Amounts:</Text>
      <TextInput value={investors} onChangeText={setInvestors} style={styles.input} />
      <TextInput 
        value={amount} 
        onChangeText={setAmount} 
        style={styles.input} 
        keyboardType="numeric" 
      />

      <Text>Security:</Text>
      <TextInput value={security} onChangeText={setSecurity} style={styles.input} />

      <Text>Capital Structure:</Text>
      <TextInput value={capitalStructure} onChangeText={setCapitalStructure} style={styles.input} />

      <Text>Option Pool:</Text>
      <TextInput value={optionPool} onChangeText={setOptionPool} style={styles.input} />

      <Text>Price Per Share:</Text>
      <TextInput value={pricePerShare} onChangeText={setPricePerShare} style={styles.input} />

      <Text>First Closing:</Text>
      <TextInput value={firstClosing} onChangeText={setFirstClosing} style={styles.input} />

      {/* Pro-Forma Capitalization Table */}
      <Text style={styles.header}>Pro-Forma Capitalization Table</Text>
      <FlatList
        data={stakeholders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TextInput
              style={styles.inputSmall}
              value={item.name}
              onChangeText={text => handleStakeholderChange(item.id, 'name', text)}
            />
            <TextInput
              style={styles.inputSmall}
              value={item.preDealShares.toString()}
              keyboardType="numeric"
              onChangeText={text => handleStakeholderChange(item.id, 'preDealShares', text)}
            />
            <TextInput
              style={styles.inputSmall}
              value={item.postDealShares.toString()}
              keyboardType="numeric"
              onChangeText={text => handleStakeholderChange(item.id, 'postDealShares', text)}
            />
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.row}>
            <Text style={styles.columnHeader}>Stakeholder</Text>
            <Text style={styles.columnHeader}>Pre-Deal Shares</Text>
            <Text style={styles.columnHeader}>Post-Deal Shares</Text>
          </View>
        }
      />

      <Button title="Next" onPress={() => navigation.navigate('FormSection2')} />
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
  inputSmall: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 80,
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  columnHeader: {
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center',
  },
});
