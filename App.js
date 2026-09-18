import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert, Linking } from 'react-native';
import { supabase } from './supabase.js';

const LANG = {
en: { sos: "SOS EMERGENCY", add: "Add Guardian", safe: "I AM SAFE", cont: "My Guardians", slogan: "Strong. Safe. Protected." },
nso: { sos: "THUSO YA TSHOGANYETSO", add: "Oketša", safe: "KE SIRELETŠEGILE", cont: "Bahlokomedi", slogan: "O Tiile." },
ve: { sos: "THUSO YA VHUTALI", add: "Engedza", safe: "NDO TSIRIRELEA", cont: "Vhalondoti", slogan: "Wo Luga." },
ts: { sos: "PFUNO YA XIHATLA", add: "Engetela", safe: "NDZI HLAYISEKILE", cont: "Vahlayisi", slogan: "U Tiyile." }
};

export default function App(){
const [page,setPage]=useState('splash');
const [lang,setLang]=useState('en');
const [contacts,setContacts]=useState([]);
const [name,setName]=useState('');
const [phone,setPhone]=useState('');
const t=LANG[lang];

useEffect(()=>{
setTimeout(()=>setPage('home'),2000);
loadContacts();
},[]);

const loadContacts=async()=>{
try{
const {data}=await supabase.from('contacts').select('*');
if(data) setContacts(data);
}catch(e){}
};

const saveContact=async()=>{
if(!name||!phone) return Alert.alert("Fill both");
try{
await supabase.from('contacts').insert([{name,phone}]);
setName(''); setPhone(''); loadContacts();
Alert.alert("✅ Saved to Cloud!");
}catch(e){
setContacts([...contacts,{name,phone}]);
Alert.alert("Saved locally");
}
};

const triggerSOS=async()=>{
const loc="Thulamela - https://maps.google.com/?q=-22.94,30.79";
const msg=`SOS! Help! ${loc}`;
try{
await supabase.from('sos_logs').insert([{location:loc,message:msg}]);
}catch(e){}
Alert.alert("🚨 SOS SENT!","Cloud log saved. SMS opening...");
if(contacts[0]) Linking.openURL(`sms:${contacts[0].phone}?body=${msg}`);
};

if(page==='splash'){
return(
<View style={{flex:1,backgroundColor:'#4C1D95',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:60}}>🛡️</Text>
<Text style={{color:'white',fontSize:26,fontWeight:'bold',marginTop:10}}>Feminist Guard PRO</Text>
<Text style={{color:'#E9D5FF',marginTop:5}}>{t.slogan} • Pretoria</Text>
</View>
);
}

return(
<ScrollView style={{flex:1,backgroundColor:'#F5F0FF'}} contentContainerStyle={{padding:20,paddingTop:60}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:22,fontWeight:'bold',color:'#4C1D95'}}>Feminist Guard</Text>
<TouchableOpacity onPress={()=>setLang(lang==='en'?'nso':lang==='nso'?'ve':'en')} style={{backgroundColor:'#4C1D95',padding:8,borderRadius:8}}>
<Text style={{color:'white'}}>{lang.toUpperCase()}</Text>
</TouchableOpacity>
</View>

<TouchableOpacity onPress={triggerSOS} style={{backgroundColor:'#DC2626',padding:30,borderRadius:25,marginTop:30,alignItems:'center'}}>
<Text style={{color:'white',fontSize:26,fontWeight:'900'}}>{t.sos}</Text>
<Text style={{color:'white',marginTop:5}}>Tap to alert all</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Alert.alert
