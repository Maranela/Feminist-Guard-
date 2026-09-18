import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App(){
  const [page,setPage]=useState('splash');

  if(page==='splash'){
    return(
      <div style={{background:'linear-gradient(#4C1D95,#7C3AED)',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'white',padding:20,textAlign:'center'}}>
        <div style={{fontSize:60}}>🛡️</div>
        <h1>Feminist Guard PRO <span style={{background:'#10B981',fontSize:12,padding:'4px 8px',borderRadius:10}}>POPIA ✓</span></h1>
        <p>Pretoria • English default • 12 Languages</p>
        <button onClick={()=>setPage('login')} style={{background:'white',color:'#6C2EB5',padding:'14px 28px',borderRadius:30,fontWeight:'bold',border:'none',marginTop:20}}>Tap to Start →</button>
        <p style={{fontSize:11,marginTop:10,color:'#E9D5FF'}}>Duress 9999 • Shake 3x SOS • Child Mode • 50MB Lite</p>
      </div>
    );
  }
  if(page==='login'){
    return(
      <div style={{background:'#F5F0FF',minHeight:'100vh',padding:20}}>
        <h2>Login 💜</h2>
        <p style={{fontSize:12}}>Forced? Use 9999 = Fake + Silent SOS</p>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:16}}>
          <input style={{width:'100%',padding:14,borderRadius:12,border:'1px solid #ccc'}} placeholder="Email" />
          <input style={{width:'100%',padding:14,borderRadius:12,border:'1px solid #ccc',marginTop:10}} placeholder="Password or 9999" type="password"/>
          <button onClick={()=>setPage('home')} style={{width:'100%',background:'#6C2EB5',color:'white
