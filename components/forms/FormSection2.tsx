import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/index'; // Ensure this is correctly imported
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'FormSection2'>;

export default function FormSection2() {
    const navigation = useNavigation<NavigationProp>();

  // Default values from ElecPed Term Sheet (Section II: A to M)
  const [dividends, setDividends] = useState('8% annual cumulative dividends');
  const [liquidationPreference, setLiquidationPreference] = useState(
    'One (1) times the Series A Original Purchase Price plus cumulative and other declared but unpaid dividends'
  );
  const [conversion, setConversion] = useState('Series A Preferred convertible at one-to-one ratio');
  const [votingRights, setVotingRights] = useState('Equal votes to the number of shares of Common Stock issuable');
  const [protectiveProvisions, setProtectiveProvisions] = useState(
    'Consent of Preferred Majority required for major actions like liquidation, amending bylaws, or issuing senior stock'
  );
  const [preemptiveRights, setPreemptiveRights] = useState(
    'Holders of at least $1,000,000 of Series A Preferred have pre-emptive rights'
  );
  const [secondarySales, setSecondarySales] = useState('Right of first refusal for shares of Common Stock');
  const [rightOfCoSale, setRightOfCoSale] = useState('Right of co-sale with respect to Common Stock sales');
  const [informationRights, setInformationRights] = useState(
    'Annual audited financial statements, monthly unaudited financials, and annual equity report'
  );
  const [registrationRights, setRegistrationRights] = useState('Customary demand and piggy-back registration rights');
  const [redemption, setRedemption] = useState('No redemption rights');
  const [boardOfDirectors, setBoardOfDirectors] = useState('Five members; PEV to designate two, Common to designate three');

  // Reset all values to empty strings
  const resetFields = () => {
    setDividends('');
    setLiquidationPreference('');
    setConversion('');
    setVotingRights('');
    setProtectiveProvisions('');
    setPreemptiveRights('');
    setSecondarySales('');
    setRightOfCoSale('');
    setInformationRights('');
    setRegistrationRights('');
    setRedemption('');
    setBoardOfDirectors('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Dividends */}
      <Text>Dividends:</Text>
      <TextInput value={dividends} onChangeText={setDividends} style={styles.input} />

      {/* Liquidation Preference */}
      <Text>Liquidation Preference:</Text>
      <TextInput value={liquidationPreference} onChangeText={setLiquidationPreference} style={styles.input} />

      {/* Conversion Features */}
      <Text>Conversion Features:</Text>
      <TextInput value={conversion} onChangeText={setConversion} style={styles.input} />

      {/* Voting Rights */}
      <Text>Voting Rights:</Text>
      <TextInput value={votingRights} onChangeText={setVotingRights} style={styles.input} />

      {/* Protective Provisions */}
      <Text>Protective Provisions:</Text>
      <TextInput value={protectiveProvisions} onChangeText={setProtectiveProvisions} style={styles.input} />

      {/* Pre-emptive Rights */}
      <Text>Pre-emptive Rights:</Text>
      <TextInput value={preemptiveRights} onChangeText={setPreemptiveRights} style={styles.input} />

      {/* Secondary Sales */}
      <Text>Secondary Sales:</Text>
      <TextInput value={secondarySales} onChangeText={setSecondarySales} style={styles.input} />

      {/* Right of Co-Sale */}
      <Text>Right of Co-Sale:</Text>
      <TextInput value={rightOfCoSale} onChangeText={setRightOfCoSale} style={styles.input} />

      {/* Information Rights */}
      <Text>Information Rights:</Text>
      <TextInput value={informationRights} onChangeText={setInformationRights} style={styles.input} />

      {/* Registration Rights */}
      <Text>Registration Rights:</Text>
      <TextInput value={registrationRights} onChangeText={setRegistrationRights} style={styles.input} />

      {/* Redemption */}
      <Text>Redemption:</Text>
      <TextInput value={redemption} onChangeText={setRedemption} style={styles.input} />

      {/* Board of Directors */}
      <Text>Board of Directors:</Text>
      <TextInput value={boardOfDirectors} onChangeText={setBoardOfDirectors} style={styles.input} />

      {/* Buttons for reset and next */}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={resetFields} color="red" />
        <Button title="Next" onPress={() => navigation.navigate('FormSection3')} />
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
