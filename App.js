import React, { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('landing');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState([]);

  const handleLogin = () => {
    if(pass === '9999'){ alert('Duress Mode Activated - Fake data + Silent SOS sent to Pretoria Control'); return; }
    const found = users.find(u => u.email === email && u.pass === pass);
    if(found || email.includes('@')){
      setScreen('home');
    } else {
      alert('Wrong — Click Create Account first!');
    }
  };

  const handleCreate = () => {
    if(!email || !pass) return alert('Enter email & password');
    setUsers([...users, {email, pass}]);
    alert('Account Created in Pretoria! Now click Login');
  };

  if(screen === 'landing'){
    return (
      <div style={s.container}>
        <div style={s.topBar}><div style={s.topLeft}><div style={s.logoBox}>F</div><span style={s.brand}>FEMINIST GUARD</span></div><span style={s.live}>● 892 Sisters in Pretoria Online</span></div>
        <div style={s.hero}>
          <div style={s.badge}>GBVF National Disaster — Nov 2025 | Pretoria HQ</div>
          <h1 style={s.h1}>In Pretoria, <span style={{color:'#C2185B'}}>every 3 hours a woman reports assault.</span> We are the shield.</h1>
          <p style={s.sub}>Feminist Guard — Built in Pretoria, for Pretoria women. 892 sisters in Mamelodi, Sunnyside, Atteridgeville watching your back 24/7. With tracking necklace + armed guard dispatch in Pretoria.</p>
          <div style={s.statsRow}>
            <div style={s.stat}><b>50,511</b><br/><small>SAPS Cases Gauteng 2025/26</small></div>
            <div style={s.stat}><b>892</b><br/><small>Pretoria Sisters Guarding</small></div>
            <div style={{...s.stat, background:'#C2185B', color:'white'}}><b>2 mins</b><br/><small>Response in PTA</small></div>
          </div>
          <button style={s.joinBtn} onClick={()=>setScreen('login')}>JOIN THE PRETORIA GUARD — Free</button>
          <p style={s.small}>No card needed. Works with 50MB data. English default + 12 Languages.</p>
        </div>
        <div style={s.section}>
          <h2 style={s.h2}>Why Pretoria women are switching from old safety apps</h2>
          <div style={s.card}>🛡️ <b>Protect — SOS that comes to Sunnyside/Mamelodi</b><br/><span style={s.cardText}>Press necklace 3 sec → Live location to Pretoria control room + armed guards + SAPS 10111 Pretoria Central.</span></div>
          <div style={s.card}>👁️ <b>Record — Evidence vault for Pretoria courts</b><br/><span style={s.cardText}>Secret PIN-locked vault, hidden from gallery, accepted at Pretoria Magistrate Court.</span></div>
          <div style={s.card}>🤝 <b>Community — Safe Map of Pretoria</b><br/><span style={s.cardText}>Women in PTA pin unsafe taxi ranks (Bosman, Marabastad), safe shops, safe routes.</span></div>
        </div>
        <div style={s.quoteBox}><i>"Today, you are not alone in Pretoria. 892 women in Pretoria are guarding you right now. Press SOS, we come in 2 mins."</i><br/><small style={{color:'#aaa'}}>— Nhlanhla Maranela, Founder, Pretoria</small></div>
        <div style={s.footer}>Built in Pretoria, Gauteng • POPIA Compliant • Partner: Thuthuzela Pretoria • © 2026</div>
      </div>
    );
  }

  if(screen === 'login'){
    return (
      <div style={{...s.container, background:'#F5F0FF', padding:20}}>
        <h1 style={{fontSize:28, fontWeight:'bold'}}>Login 💜</h1>
        <p style={{fontSize:12, color:'#666'}}>Pretoria Mode • Forced? Enter 9999 = Fake Mode + Silent SOS</p>
        <div style={{background:'white', borderRadius:16, padding:16, marginTop:16}}>
          <input style={s.input} placeholder="Email / Phone (Pretoria)" value={email} onChange={e=>setEmail(e.target.value)} />
          <input style={{...s.input, marginTop:10}} placeholder="Password or 9999" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          <button style={s.purpleBtn} onClick={handleLogin}>Login — Pretoria Guard</button>
          <button style={s.whiteBtn} onClick={handleCreate}>Create Pretoria Account</button>
          <button style={{...s.whiteBtn, marginTop:10, borderColor:'#000', color:'#000'}} onClick={()=>setScreen('landing')}>← Back</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{...s.container, padding:20, textAlign:'center'}}>
      <h1 style={s.h1}>Welcome Sister! Pretoria Guard Active 🛡️</h1>
      <p style={s.sub}>Logged in: {email} | Location: Pretoria</p>
      <div style={s.card}>✅ Pretoria Control Online — Sunnyside HQ</div>
      <div style={s.card}>✅ SOS Ready — Shake 3x • Duress PIN 9999</div>
      <div style={s.card}>✅ Safe Map PTA — Bosman, Marabastad flagged</div>
      <button style={s.joinBtn} onClick={()=>setScreen('landing')}>Back to Landing</button>
    </div>
  );
}

const s = {
  container: { background:'#fff', color:'#000', minHeight:'100vh', fontFamily:'Arial', paddingBottom:40 },
  topBar: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #eee' },
  topLeft: { display:'flex', alignItems:'center', gap:8 },
  logoBox: { width:28, height:28, background:'#C2185B', color:'#fff', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold' },
  brand: { fontWeight:'bold', fontSize:13 },
  live: { fontSize:11, background:'#E8F5E9', color:'#2E7D32', padding:'4px 8px', borderRadius:12 },
  hero: { padding:20, background:'linear-gradient(#FFF0F5, #fff)', textAlign:'center' },
  badge: { background:'#000', color:'#fff', fontSize:10, display:'inline-block', padding:'4px 10px', borderRadius:20, marginBottom:12 },
  h1: { fontSize:26, fontWeight:900, lineHeight:1.2 },
  sub: { color:'#666', fontSize:13, marginTop:10 },
  statsRow: { display:'flex', gap:8, marginTop:18 },
  stat: { flex:1, border:'1px solid #eee', borderRadius:12, padding:10, fontSize:12, background:'#fff' },
  joinBtn: { width:'100%', background:'#000', color:'#fff', padding:'16px', borderRadius:30, fontWeight:'bold', marginTop:18, border:'none', fontSize:14 },
  small: { fontSize:11, color:'#888', marginTop:6 },
  section: { padding:20 },
  h2: { fontSize:16, fontWeight:'bold' },
  card: { border:'1px solid #eee', borderRadius:12, padding:12, marginTop:12, fontSize:13, textAlign:'left' },
  cardText: { color:'#666', fontSize:11 },
  quoteBox: { margin:16, background:'#000', color:'#fff', borderRadius:16, padding:18, textAlign:'center', fontSize:13 },
  footer: { textAlign:'center', fontSize:10, color:'#999', padding:20, borderTop:'1px solid #eee', marginTop:20 },
  input: { width:'100%', padding:'14px', borderRadius:12, border:'2px solid #000', fontSize:14, boxSizing:'border-box' },
  purpleBtn: { width:'100%', background:'#6C2EB5', color:'white', padding:'14px', borderRadius:12, fontWeight:'bold', marginTop:12, border:'none' },
  whiteBtn: { width:'100%', background:'white', color:'#6C2EB5', padding:'14px', borderRadius:12, fontWeight:'bold', marginTop:8, border:'2px solid #6C2EB5' }
};
