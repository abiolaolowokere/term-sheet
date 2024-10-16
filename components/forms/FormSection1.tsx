import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../app/index';

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection1'>;

// Define the Stakeholder type
type Stakeholder = {
  id: string;
  name: string;
  preDealShares: string;
  postDealShares: string;
  percentagePreDeal: number;
  percentagePostDeal: number;
};

// Define the form item type
type FormItem = {
  key: string;
  label: string;
  value: string;
  onChange: (text: string) => void;
  keyboardType?: 'default' | 'numeric'; // Add keyboardType as an optional prop
};

// Define the data type that includes both form fields and stakeholders
type DataItem = FormItem | { key: string; header: string } | { key: string; stakeholder: Stakeholder };

export default function FormSection1() {
  const navigation = useNavigation<NavigationProp>();

  const [issuer, setIssuer] = useState('ElecPed, Inc.');
  const [totalFinancing, setTotalFinancing] = useState('25000000');
  const [investors, setInvestors] = useState('PacificRim Eco Ventures ("PEV")');
  const [amount, setAmount] = useState('25000000');
  const [security, setSecurity] = useState('Series A Preferred Stock ("Series A Preferred")');
  const [capitalStructure, setCapitalStructure] = useState('$50,000,000 post-money valuation');
  const [optionPool, setOptionPool] = useState('1,500,000 shares');
  const [pricePerShare, setPricePerShare] = useState('__.00');
  const [firstClosing, setFirstClosing] = useState('On or before October 30, 2019');

  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([
    { id: '1', name: 'Sanchez', preDealShares: '5000', postDealShares: '5000', percentagePreDeal: 40, percentagePostDeal: 17.9 },
    { id: '2', name: 'Ward', preDealShares: '5000', postDealShares: '5000', percentagePreDeal: 40, percentagePostDeal: 17.9 },
    { id: '3', name: 'Angel', preDealShares: '2500', postDealShares: '2500', percentagePreDeal: 20, percentagePostDeal: 8.9 },
    { id: '4', name: 'Series A', preDealShares: '0', postDealShares: '14000', percentagePreDeal: 0, percentagePostDeal: 50 },
    { id: '5', name: 'Option Pool', preDealShares: '0', postDealShares: '1500', percentagePreDeal: 0, percentagePostDeal: 5.4 },
  ]);

  const handleStakeholderChange = (id: string, field: keyof Stakeholder, value: string) => {
    setStakeholders(prevState =>
      prevState.map(stakeholder =>
        stakeholder.id === id ? { ...stakeholder, [field]: value } : stakeholder
      )
    );
  };

  // Combine form data and list into FlatList
  const data: DataItem[] = [
    { key: 'issuer', label: 'Issuer:', value: issuer, onChange: setIssuer },
    { key: 'totalFinancing', label: 'Total Amount of Financing:', value: totalFinancing, onChange: setTotalFinancing, keyboardType: 'numeric' },
    { key: 'investors', label: 'Investors and Amounts:', value: investors, onChange: setInvestors },
    { key: 'amount', label: 'Amount:', value: amount, onChange: setAmount, keyboardType: 'numeric' },
    { key: 'security', label: 'Security:', value: security, onChange: setSecurity },
    { key: 'capitalStructure', label: 'Capital Structure:', value: capitalStructure, onChange: setCapitalStructure },
    { key: 'optionPool', label: 'Option Pool:', value: optionPool, onChange: setOptionPool },
    { key: 'pricePerShare', label: 'Price Per Share:', value: pricePerShare, onChange: setPricePerShare },
    { key: 'firstClosing', label: 'First Closing:', value: firstClosing, onChange: setFirstClosing },
    { key: 'header', header: 'Pro-Forma Capitalization Table' },
    ...stakeholders.map((stakeholder, index) => ({
      key: `stakeholder-${index}`,
      stakeholder,
    })),
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.key}
      renderItem={({ item }) => {
        if ('header' in item) {
          // Render header
          return <Text style={styles.header}>{item.header}</Text>;
        } else if ('stakeholder' in item) {
          // Render stakeholders
          return (
            <View style={styles.row}>
              <TextInput
                style={styles.inputSmall}
                value={item.stakeholder.name}
                onChangeText={text => handleStakeholderChange(item.stakeholder.id, 'name', text)}
              />
              <TextInput
                style={styles.inputSmall}
                value={item.stakeholder.preDealShares.toString()}
                keyboardType="numeric"
                onChangeText={text => handleStakeholderChange(item.stakeholder.id, 'preDealShares', text)}
              />
              <TextInput
                style={styles.inputSmall}
                value={item.stakeholder.postDealShares.toString()}
                keyboardType="numeric"
                onChangeText={text => handleStakeholderChange(item.stakeholder.id, 'postDealShares', text)}
              />
            </View>
          );
        } else {
          // Render form fields
          return (
            <View>
              <Text>{item.label}</Text>
              <TextInput
                value={item.value}
                onChangeText={item.onChange}
                style={styles.input}
                keyboardType={item.keyboardType || 'default'}
              />
            </View>
          );
        }
      }}
      ListFooterComponent={<Button title="Next" onPress={() => navigation.navigate('FormSection2')} />}
    />
  );
}

const styles = StyleSheet.create({
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
});
