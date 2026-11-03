export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const { name, lat, lng, link, source, to, idLast4 } = req.body || {};
  if (!to) return res.status(200).json({ success: true, provider: 'DEMO - phone missing', to });

  const message = `🚨 FEMINIST-GUARD v38.3 ROBOT SOS! Source: ${source}. Name: ${name} ID ****${idLast4}. LIVE: ${link} Lat ${lat} Lng ${lng} Time ${new Date().toLocaleTimeString()} - Auto live every 30s`;

  try {
    const bulksmsToken = process.env.BULKSMS_TOKEN;
    if (bulksmsToken && bulksmsToken.includes(':')) {
      const resp = await fetch('https://api.bulksms.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + Buffer.from(bulksmsToken).toString('base64') },
        body: JSON.stringify({ to: to.replace(/\D/g,'').replace(/^0/, '27'), body: message })
      });
      const result = await resp.json();
      return res.status(200).json({ success: true, provider: 'BulkSMS SA REAL', result });
    }
    // DEMO MODE - Logs in Vercel Logs
    console.log('ROBOT SMS AUTO DEMO:', message, 'to', to);
    return res.status(200).json({ success: true, provider: 'ROBOT DEMO LOG (Add BULKSMS_TOKEN for real SMS)', demoMessage: message, to });

  } catch (err) {
    console.log('ROBOT DEMO FALLBACK:', message);
    return res.status(200).json({ success: true, provider: 'ROBOT DEMO LOG', error: err.message });
  }
}
