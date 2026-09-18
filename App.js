import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <div style={styles.topLeft}>
          <div style={styles.logoBox}>F</div>
          <span style={styles.brand}>FEMINIST GUARD</span>
        </div>
        <span style={styles.live}>● 1,247 Online</span>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.badge}>GBVF National Disaster — Nov 2025</div>
        <h1 style={styles.h1}>In South Africa, <span style={{color:'#C2185B'}}>15 women are murdered daily.</span> We are the shield.</h1>
        <p style={styles.sub}>Feminist Guard is not just an app. It's 1,247 sisters in Limpopo watching your back, 24/7. With tracking necklace + guard dispatch.</p>
        
        <div style={styles.statsRow}>
          <div style={styles.stat}><b>50,511</b><br/><small>Cases SAPS 2025/26</small></div>
          <div style={styles.stat}><b>1M+</b><br/><small>Signed petition</small></div>
          <div style={{...styles.stat, background:'#C2185B', color:'white'}}><b>2 mins</b><br/><small>Response time</small></div>
        </div>

        <button style={styles.joinBtn} onClick={()=>alert('Welcome sister! Login coming next')}>
          JOIN THE GUARD — Free 30 Days
        </button>
        <p style={styles.small}>No card needed. Works with 50MB data.</p>
      </div>

      {/* PURPOSE */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Why women in Thohoyandou are switching</h2>
        <div style={styles.card}>🛡️ <b>Protect</b><br/><span style={styles.cardText}>Press necklace 3 sec → location to control room + guards + SAPS 10111</span></div>
        <div style={styles.card}>👁️ <b>Record — Evidence vault</b><br/><span style={styles.cardText}>Secret PIN-locked vault, hidden from gallery, auto-upload</span></div>
        <div style={styles.card}>🤝 <b>Community — Safe Map</b><br/><span style={styles.cardText}>Women pin unsafe ranks, safe shops. Like Waze for safety.</span></div>
      </div>

      {/* QUOTE */}
      <div style={styles.quoteBox}>
        <i>"Today, you are not alone. 1,247 women in Limpopo are guarding you right now. Press SOS, we come."</i>
        <br/><small style={{color:'#aaa'}}>— Nhlanhla Maranela, Founder, Thohoyandou</small>
      </div>

      <div style={styles.footer}>Built in Thohoyandou • POPIA Compliant • © 2026 Feminist Guard</div>
    </div>
  );
}

const styles = {
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
  card: { border:'1px solid #eee', borderRadius:12, padding:12, marginTop:12, fontSize:13 },
  cardText: { color:'#666', fontSize:11 },
  quoteBox: { margin:16, background:'#000', color:'#fff', borderRadius:16, padding:18, textAlign:'center', fontSize:13 },
  footer: { textAlign:'center', fontSize:10, color:'#999', padding:20, borderTop:'1px solid #eee', marginTop:20 }
};                                                                                                              };
