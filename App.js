import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App(){
  const [page,setPage]=useState('splash');
  if(page==='splash'){
    return(
      <div style={{background:'#4C1D95',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'white',padding:20,textAlign:'center'}}>
        <div style={{fontSize:60}}>🛡️</div>
        <h1>Feminist Guard PRO <span style={{background:'#10B981',fontSize:11,padding:'4px 8px',borderRadius:10}}>POPIA ✓</span></h1>
        <p>Pretoria • English default • 12 Languages</p>
        <button onClick={()=>setPage('login')} style={{background:'white',color:'#6C2EB5',padding:'14px 28px',borderRadius:30,fontWeight:'bold',border:'none',marginTop:20}}>Tap to Start →</button>
        <p style={{fontSize:10,marginTop:12,color:'#D8B4FE'}}>Duress 9999 • Shake 3x SOS • Child • 50MB Lite</p>
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
          <button onClick={()=>setPage('home')} style={{width:'100%',background:'#6C2EB5',color:'white',padding:14,borderRadius:12,marginTop:12,border:'none',fontWeight:'bold'}}>Login</button>
        </div>
      </div>
    );
  }
  if(page==='settings'){
    return(
      <div style={{background:'#F5F0FF',minHeight:'100vh'}}>
        <div style={{padding:12}}><span onClick={()=>setPage('more')} style={{fontWeight:'bold'}}>‹ Back to More</span></div>
        <SettingsScreen/>
      </div>
    );
  }
  if(page==='more'){
    return(
      <div style={{background:'#F5F0FF',minHeight:'100vh',padding:16,paddingBottom:80}}>
        <h1 style={{fontWeight:900}}>More</h1>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>💜 Stories - Pretoria</div>
        <div onClick={()=>setPage('settings')} style={{background:'#6C2EB5',color:'white',borderRadius:16,padding:16,marginTop:12}}><b>⚙️ Settings - 12 Languages ✓</b></div>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>🔐 Admin - Pretoria HQ</div>
        <div style={{position:'fixed',bottom:0,left:0,right:0,background:'white',display:'flex',justifyContent:'space-around',padding:12,borderTop:'1px solid #eee',fontSize:11}}>
          <span onClick={()=>setPage('home')}>🏠 Home</span><span>👥</span><span>🔒</span><span>📍</span><span>☰</span>
        </div>
      </div>
    );
  }
  return(
    <div style={{background:'#F5F0FF',minHeight:'100vh',paddingBottom:80}}>
      <div style={{padding:12}}>
        <div style={{background:'white',borderRadius:16,padding:12,marginBottom:8}}><b>Hello, Madumane ✓</b><br/><small>SOS: ON • Pretoria HQ 012 353 4100</small></div>
        <HomeScreen/>
        <button onClick={()=>setPage('settings')} style={{width:'100%',marginTop:12,background:'white',border:'2px solid #6C2EB5',color:'#6C2EB5',padding:12,borderRadius:12,fontWeight:'bold'}}>⚙️ Language - 12 Languages</button>
      </div>
      <div style={{position:'fixed',bottom:0,left:0,right:0,background:'white',display:'flex',justifyContent:'space-around',padding:12,borderTop:'1px solid #eee',fontSize:11}}>
        <span>🏠 Home</span><span>👥 Contacts</span><span>🔒 Vault</span><span>📍 Safe</span><span onClick={()=>setPage('more')}>☰ More</span>
      </div>
    </div>
  );
  }
