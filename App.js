import React, { useState } from 'react';

export default function App(){
  const [page,setPage]=useState('landing');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [users,setUsers]=useState([]);

  const login=()=>{
    if(pass==='9999'){alert('Duress 9999 Active - Fake + Silent SOS to Pretoria HQ');return;}
    if(email.includes('@')){setPage('home');}else{alert('Enter email - Click Create first');}
  };
  const create=()=>{
    if(!email||!pass)return alert('Enter email & pass');
    setUsers([...users,{email,pass}]);
    alert('Created! Now Login');
  };

  if(page==='landing'){
    return(
      <div style={{background:'#fff',color:'#000',minHeight:'100vh',fontFamily:'Arial'}}>
        <div style={{display:'flex',justifyContent:'space-between',padding:12,borderBottom:'1px solid #eee'}}>
          <b style={{display:'flex',gap:8,alignItems:'center'}}><span style={{background:'#C2185B',color:'#fff',width:28,height:28,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</span>FEMINIST GUARD</b>
          <span style={{fontSize:11,background:'#E8F5E9',padding:'4px 8px',borderRadius:12}}>● 892 Sisters in Pretoria</span>
        </div>
        <div style={{padding:20,textAlign:'center',background:'linear-gradient(#FFF0F5,#fff)'}}>
          <div style={{background:'#000',color:'#fff',fontSize:10,display:'inline-block',padding:'4px 10px',borderRadius:20}}>GBVF Disaster Nov 2025 • Pretoria HQ</div>
          <h1 style={{fontSize:28,fontWeight:900,marginTop:12,lineHeight:1.2}}>In Pretoria,<br/><span style={{color:'#C2185B'}}>every 3 hours</span> a woman reports assault. We are the shield.</h1>
          <p style={{color:'#666',fontSize:13,marginTop:10}}>Feminist Guard — 892 sisters in Mamelodi, Sunnyside, Atteridgeville watching your back 24/7. Necklace + Guard dispatch in Pretoria.</p>
          <div style={{display:'flex',gap:8,marginTop:16}}>
            <div style={{flex:1,border:'1px solid #eee',borderRadius:12,padding:10,fontSize:12}}><b>50,511</b><br/>Cases Gauteng</div>
            <div style={{flex:1,border:'1px solid #eee',borderRadius:12,padding:10,fontSize:12}}><b>892</b><br/>Pretoria Sisters</div>
            <div style={{flex:1,background:'#C2185B',color:'#fff',borderRadius:12,padding:10,fontSize:12}}><b>2 mins</b><br/>Response PTA</div>
          </div>
          <button onClick={()=>setPage('login')} style={{width:'100%',background:'#000',color:'#fff',padding:16,borderRadius:30,fontWeight:'bold',marginTop:18,border:'none'}}>JOIN THE PRETORIA GUARD — Free</button>
          <p style={{fontSize:11,color:'#888',marginTop:6}}>POPIA ✔️ • Works with 50MB • 12 Languages</p>
        </div>
        <div style={{padding:20}}>
          <h3>Why Pretoria women switch</h3>
          <div style={{border:'1px solid #eee',borderRadius:12,padding:12,marginTop:10,fontSize:13}}>🛡️ <b>Protect — SOS in Sunnyside/Mamelodi</b><br/><small style={{color:'#666'}}>Press 3 sec → Pretoria control + armed guards + SAPS 10111</small></div>
          <div style={{border:'1px solid #eee',borderRadius:12,padding:12,marginTop:10,fontSize:13}}>👁️ <b>Record — Evidence for Pretoria Court</b><br/><small style={{color:'#666'}}>Secret vault, hidden from gallery</small></div>
          <div style={{border:'1px solid #eee',borderRadius:12,padding:12,marginTop:10,fontSize:13}}>📍 <b>Safe Map — Bosman, Marabastad flagged</b><br/><small style={{color:'#666'}}>Women in PTA pin unsafe ranks, safe shops</small></div>
        </div>
        <div style={{margin:16,background:'#000',color:'#fff',borderRadius:16,padding:16,textAlign:'center',fontSize:13}}><i>"You are not alone in Pretoria. 892 women guarding you now."</i><br/><small style={{color:'#aaa'}}>— Founder, Pretoria</small></div>
        <div style={{textAlign:'center',fontSize:10,color:'#999',padding:15}}>Built in Pretoria • POPIA Compliant • ©2026</div>
      </div>
    );
  }

  if(page==='login'){
    return(
      <div style={{background:'#F5F0FF',minHeight:'100vh',padding:20,fontFamily:'Arial'}}>
        <h1 style={{fontSize:28,fontWeight:'bold'}}>Login 💜</h1>
        <p style={{fontSize:12,color:'#666'}}>Pretoria • Forced? Enter 9999 = Fake + Silent SOS</p>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:16}}>
          <input style={{width:'100%',padding:14,borderRadius:12,border:'2px solid #000'}} placeholder="Email / Phone" value={email} onChange={e=>setEmail(e.target.value)} />
          <input style={{width:'100%',padding:14,borderRadius:12,border:'2px solid #000',marginTop:10}} placeholder="Password or 9999" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          <button onClick={login} style={{width:'100%',background:'#6C2EB5',color:'white',padding:14,borderRadius:12,fontWeight:'bold',marginTop:12,border:'none'}}>Login — Pretoria Guard</button>
          <button onClick={create} style={{width:'100%',background:'white',color:'#6C2EB5',padding:14,borderRadius:12,fontWeight:'bold',marginTop:8,border:'2px solid #6C2EB5'}}>Create Pretoria Account</button>
          <button onClick={()=>setPage('landing')} style={{width:'100%',marginTop:10,background:'white',border:'1px solid #000',padding:10,borderRadius:12}}>← Back to Inspiring Page</button>
        </div>
      </div>
    );
  }

  return(
    <div style={{background:'#F5F0FF',minHeight:'100vh',fontFamily:'Arial',paddingBottom:70}}>
      <div style={{padding:16}}>
        <h1 style={{fontSize:24,fontWeight:900}}>Hello, {email.split('@')[0]||'Madumane'} ✓</h1>
        <p style={{fontSize:12,color:'#666'}}>Shake 3x SOS: ON • Battery Saver: ON • Pretoria HQ</p>
        <div style={{background:'#7C3AED',borderRadius:20,padding:16,color:'white',marginTop:12}}><b>▶ Start Safe Trip</b><br/><small>Live location + Offline SMS — Pretoria</small></div>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <div style={{flex:1,background:'#FFE4E6',borderRadius:16,padding:16,textAlign:'center'}}><div style={{fontSize:24}}>🚨</div><b style={{color:'#C2185B'}}>SOS</b></div>
          <div style={{flex:1,background:'#EDE9FE',borderRadius:16,padding:16,textAlign:'center'}}><div style={{fontSize:24}}>🧮</div><b>Hide</b></div>
          <div style={{flex:1,background:'#FEF3C7',borderRadius:16,padding:16,textAlign:'center'}}><div style={{fontSize:24}}>🔒</div><b>Vault</b></div>
        </div>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>
          <b>Quick Access</b>
          <div style={{display:'flex',gap:8,marginTop:10}}>
            <button style={{flex:1,background:'#6C2EB5',color:'white',border:'none',borderRadius:12,padding:12,fontWeight:'bold'}}>📍 Safe Places Pretoria</button>
            <button style={{flex:1,background:'#6C2EB5',color:'white',border:'none',borderRadius:12,padding:12,fontWeight:'bold'}}>🎙️ Record Evidence</button>
          </div>
        </div>
        <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>
          <b>Language / Ulimi</b><br/><small>Current: English - Change in Settings → Language</small>
          <button style={{width:'100%',marginTop:10,border:'2px solid #6C2EB5',background:'white',color:'#6C2EB5',padding:12,borderRadius:12,fontWeight:'bold'}}>⚙️ Go to Language Settings</button>
        </div>
      </div>
      <div style={{position:'fixed',bottom:0,left:0,right:0,background:'white',display:'flex',justifyContent:'space-around',padding:10,borderTop:'1px solid #eee',fontSize:11}}>
        <span>🏠<br/>Home</span><span>👥<br/>Contacts</span><span>🔒<br/>Vault</span><span>📍<br/>Safe</span><span>☰<br/>More</span>
      </div>
    </div>
  );
                                                                             }
