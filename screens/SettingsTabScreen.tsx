import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function SettingsTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 7.5,
    height: 1,
    width: '66.66%',
  },
});
