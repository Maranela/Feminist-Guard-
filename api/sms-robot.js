// /api/send-sms.js - Vercel Serverless Function
export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).json({error:'POST only'});
  
  const { to, message } = req.body;
  
  // Check if tokens exist in Vercel Env Variables
  const TOKEN_ID = process.env.BULKSMS_TOKEN_ID || process.env.BULKSMS_TOKEN;
  const TOKEN_SECRET = process.env.BULKSMS_TOKEN_SECRET;
  
  if(!TOKEN_ID || !TOKEN_SECRET) {
    return res.json({ real:false, demo:true, message:'DEMO LOG - Add BULKSMS_TOKEN' });
  }
  
  try {
    const resp = await fetch('https://api.bulksms.com/v1/messages', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Basic ' + Buffer.from(`${TOKEN_ID}:${TOKEN_SECRET}`).toString('base64')
      },
      body: JSON.stringify({
        to: [to],
        body: message
      })
    });
    const data = await resp.json();
    return res.json({ real:true, data });
  } catch(e) {
    return res.json({ real:false, error:e.message });
  }
                     }
