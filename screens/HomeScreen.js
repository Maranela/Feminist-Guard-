import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [lang, setLang] = useState('English (Default)');
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Hello, Madumane ✓</Text>
        <Text style={styles.sub}>Shake 3x SOS: ON • Pretoria HQ • {lang}</Text>
      </View>

      <TouchableOpacity style={styles.tripBtn}>
        <Text style={styles.tripTitle}>▶ Start Safe Trip</Text>
        <Text style={styles.tripSub}>Live location + Offline SMS - Pretoria</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={[styles.iconBox,{backgroundColor:'#FFE4E6'}]}>
          <Text style={styles.icon}>🚨</Text><Text style={styles.iconText}>SOS</Text>
        </View>
        <View style={[styles.iconBox,{backgroundColor:'#EDE9FE'}]}>
          <Text style={styles.icon}>🧮</Text><Text style={styles.iconText}>Hide</Text>
        </View>
        <View style={[styles.iconBox,{backgroundColor:'#FEF3C7'}]}>
          <Text style={styles.icon}>🔒</Text><Text style={styles.iconText}>Vault</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Access - Pretoria</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.pBtn}><Text style={styles.pBtnText}>📍 Safe Places PTA</Text></TouchableOpacity>
          <TouchableOpacity style={styles.pBtn}><Text style={styles.pBtnText}>🎙️ Record</Text></TouchableOpacity>
        </View>
        <Text style={{fontSize:11,color:'#666',marginTop:8}}>Pretoria Central: 012 353 4100 • Sunnyside: 012 422 3600 • Mamelodi: 012 801 8600</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌐 Language / Ulimi</Text>
        <Text style={{fontSize:12}}>Current: {lang} • 12 Languages</Text>
        <TouchableOpacity onPress={()=>navigation?.navigate('Settings')} style={styles.outlineBtn}>
          <Text style={styles.outlineText}>⚙️ Go to Settings - Meta Style</Text>
        </TouchableOpacity>
        <Text style={{fontSize:10,color:'#10B981',marginTop:6}}>✓ English default for Pretoria as requested</Text>
      </View>

      <View style={{height:80}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{backgroundColor:'#F5F0FF',flex:1},
  header:{padding:16},
  hello:{fontSize:24,fontWeight:'900'},
  sub:{fontSize:12,color:'#666'},
  tripBtn:{backgroundColor:'#7C3AED',borderRadius:20,padding:16,margin:12},
  tripTitle:{color:'white',fontWeight:'bold',fontSize:16},
  tripSub:{color:'white',fontSize:11},
  row:{flexDirection:'row',gap:8,marginHorizontal:12},
  iconBox:{flex:1,borderRadius:16,padding:16,alignItems:'center'},
  icon:{fontSize:24},
  iconText:{fontWeight:'bold',marginTop:4},
  card:{backgroundColor:'white',borderRadius:16,padding:16,margin:12},
  cardTitle:{fontWeight:'bold',marginBottom:8},
  pBtn:{flex:1,backgroundColor:'#6C2EB5',borderRadius:12,padding:12,alignItems:'center'},
  pBtnText:{color:'white',fontWeight:'bold',fontSize:12},
  outlineBtn:{borderWidth:2,borderColor:'#6C2EB5',borderRadius:12,padding:12,marginTop:10,alignItems:'center'},
  outlineText:{color:'#6C2EB5',fontWeight:'bold'}
});
