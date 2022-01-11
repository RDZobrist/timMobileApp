import { StyleSheet } from 'react-native';
import { SimpleLineIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons'; 

import { Text, View } from '../components/Themed';

export default function SupportTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We're Always Here if You Need Us</Text>
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />
      <Text>Ways to connect with us</Text>
      <AntDesign name="phone" size={18} color="black" />
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

      <SimpleLineIcons name="social-facebook" size={18} color="#3B7979" />    
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />
  
      <Feather name="twitter" size={18} color="#3B7979" />
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

      <Feather name="instagram" size={24} color="3B7979" />
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

      <Ionicons name="md-location-outline" size={24} color="3B7979" />  
      <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />
    
      <AntDesign name="message1" size={24} color="3B7979" />
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