import React, { useState } from 'react';

export default function SettingsScreen(){
  const [lang,setLang] = useState('English (Default) - Pretoria');
  const languages = [
    'English (Default) - Pretoria',
    'isiZulu - Zulu',
    'isiXhosa - Xhosa',
    'Sepedi - Northern Sotho',
    'Setswana - Tswana',
    'Sesotho - Sotho',
    'Afrikaans',
    'Tshivenda - Venda',
    'Xitsonga - Tsonga',
    'isiNdebele - Ndebele',
    'siSwati - Swati',
    'Shona - Pretoria Community'
  ];
  return(
    <div style={{background:'#F5F0FF',minHeight:'100vh',padding:16}}>
      <h2 style={{fontWeight:900}}>⚙️ Settings - Pretoria</h2>
      <p style={{fontSize:12,color:'#666'}}>Meta-style • English default as you wanted • POPIA ✓</p>
      
      <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>
        <b>🌐 Language / Ulimi — 12 Languages</b>
        <p style={{fontSize:11,color:'#666'}}>Current: {lang}</p>
        {languages.map(l=>(
          <div key={l} onClick={()=>setLang(l)} style={{padding:12,border:'1px solid #eee',borderRadius:10,marginTop:6,background: lang===l ? '#F3E8FF':'white',borderColor: lang===l ? '#6C2EB5':'#eee'}}>
            {l} {lang===l ? '✓' : ''}
          </div>
        ))}
      </div>

      <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>
        <b>🔒 Duress PIN: 9999</b><br/>
        <small>Fake mode + Silent SOS to Pretoria HQ 012 353 4100</small>
      </div>

      <div style={{background:'white',borderRadius:16,padding:16,marginTop:12}}>
        <b>📍 Pretoria HQ</b><br/>
        <small>SAPS Central 012 353 4100 • Sunnyside 012 422 3600 • Thuthuzela Kalafong • POPIA Encrypted • 50MB Lite</small>
      </div>
    </div>
  );
  }
