import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../IMG-20260916-WA0063.jpg')} style={styles.logo} />
        <Text style={styles.title}>Feminist-Guard</Text>
        <Text style={styles.tagline}>Your Strength. Your Safety.</Text>
      </View>

      <TouchableOpacity style={styles.sos}>
        <Text style={styles.sosText}>🆘 EMERGENCY SOS</Text>
        <Text style={styles.sosSub}>Tap to alert contacts & share location</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.cardIcon}>📍</Text><Text style={styles.cardText}>Share Location</Text></View>
        <View style={styles.card}><Text style={styles.cardIcon}>👥</Text><Text style={styles.cardText}>Trusted Contacts</Text></View>
        <View style={styles.card}><Text style={styles.cardIcon}>🗺️</Text><Text style={styles.cardText}>Safe Zones</Text></View>
        <View style={styles.card}><Text style={styles.cardIcon}>📞</Text><Text style={styles.cardText}>Emergency Call</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2A0A2E' },
  header: { alignItems: 'center', paddingTop: 60, paddingBottom: 20, backgroundColor: '#4A0E4E' },
  logo: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#FF2D78' },
  title: { color: '#FF2D78', fontSize: 28, fontWeight: 'bold', marginTop: 10 },
  tagline: { color: 'white', fontSize: 14 },
  sos: { backgroundColor: '#FF2D78', margin: 20, padding: 25, borderRadius: 20, alignItems: 'center', elevation: 5 },
  sosText: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  sosSub: { color: 'white', fontSize: 12, marginTop: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 },
  card: { backgroundColor: '#6A1B6D', width: '45%', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 15 },
  cardIcon: { fontSize: 30 },
  cardText: { color: 'white', marginTop: 10, fontWeight: 'bold' }
});
