import React from 'react';

export default function App() {
  return (
      <div style={styles.container}>
            <h1 style={styles.logo}>🛡️ Feminist-Guard</h1>
                  <p style={styles.tagline}>Strong. Safe. Supported.</p>

                        <div style={styles.card}>
                                <h2>Welcome Sister 💜</h2>
                                        <p>Your safe space. Emergency help, community support, and resources.</p>
                                              </div>

                                                    <a href="tel:112" style={{...styles.button, ...styles.primary, textDecoration:'none', display:'block', textAlign:'center'}}>
                                                            🚨 EMERGENCY CALL 112
                                                                  </a>

                                                                        <button style={styles.button}>👩‍👧‍👧 My Safe Circle</button>
                                                                              <button style={styles.button}>📚 Know Your Rights</button>
                                                                                    <button style={styles.button}>💬 Community Support</button>

                                                                                          <p style={styles.footer}>Built with love by Maranela • You are not alone</p>
                                                                                              </div>
                                                                                                );
                                                                                                }

                                                                                                const styles = {
                                                                                                  container: { background: '#1a0b2e', minHeight: '100vh', padding: 20, color: 'white', textAlign: 'center', fontFamily: 'Arial' },
                                                                                                    logo: { color: '#ff7ac3', fontSize: 32 },
                                                                                                      tagline: { letterSpacing: 2 },
                                                                                                        card: { background: '#2d184a', borderRadius: 20, padding: 20, margin: '20px 0', border: '1px solid #ff7ac3' },
                                                                                                          button: { background: '#4a2a7a', color: 'white', padding: 16, borderRadius: 15, width: '100%', border: 'none', marginBottom: 12, fontWeight: 'bold', fontSize: 16 },
                                                                                                            primary: { background: '#ff2e7e' },
                                                                                                              footer: { marginTop: 30, color: '#888', fontSize: 12 }
                                                                                                              };