import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, TextInputComponent } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Offering</Text>
      <View style={styles.input}>
        <Text>Card Information</Text>
        <TextInput style={{  flex: 1, flexDirection:'row' }} placeholder='Number' />
        <TextInput style={{  flex: 0.5, flexDirection:'row'  }} placeholder='MM/YY' />
        <TextInput style={{  flex: 0.5, flexDirection:'row' }} placeholder='CVV' />

      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    input : {
      borderColor: "gray",
      width: "66.66%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    }
});
