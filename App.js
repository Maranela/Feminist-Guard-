import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./IMG-20260916-WA0063.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Feminist-Guard</Text>
      <Text style={styles.subtitle}>Strong. Safe. Protected.</Text>
      
      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>🆘 SOS EMERGENCY</Text>
      </TouchableOpacity>
      
      <View style={styles.menu}>
        <Text style={styles.menuText}>✓ Share Location</Text>
        <Text style={styles.menuText}>✓ Emergency Contacts</Text>
        <Text style={styles.menuText}>✓ Safe Zones</Text>
        <Text style={styles.menuText}>✓ Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4A0E4E', alignItems: 'center', paddingTop: 80 },
  logo: { width: 150, height: 150, borderRadius: 75, backgroundColor: 'white' },
  title: { color: '#FF2D78', fontSize: 32, fontWeight: 'bold', marginTop: 20 },
  subtitle: { color: 'white', fontSize: 16, marginTop: 5 },
  sosButton: { backgroundColor: '#FF2D78', padding: 20, borderRadius: 50, marginTop: 40, width: '80%', alignItems: 'center' },
  sosText: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  menu: { marginTop: 30, width: '80%' },
  menuText: { color: 'white', fontSize: 18, marginVertical: 8, backgroundColor: '#6A1B6D', padding: 12, borderRadius: 10 }
});
