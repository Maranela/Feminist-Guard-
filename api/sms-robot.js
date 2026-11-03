// FEMINIST-GUARD SMS ROBOT - Auto sends SMS straight to inbox, no tap!
// Uses BulkSMS SA (best for SA) - or Twilio - Free test
export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, lat, lng, link, source, to, idLast4 } = req.body;

  // Validate
  if (!to || !link) {
    return res.status(400).json({ error: 'Missing phone or location' });
  }

  const message = `🚨 FEMINIST-GUARD v38.1 ROBOT SOS! Source: ${source}. Name: ${name} ID ****${idLast4}. LIVE: ${link} Lat ${lat} Lng ${lng} Time ${new Date().toLocaleTimeString()} - Auto live every 30s`;

  // --- OPTION A: BulkSMS SA (Recommended for Soshanguve - cheap SA SMS) ---
  // Get FREE token from: https://www.bulksms.com - Sign up - Get API token
  // Then set in Vercel: Settings -> Environment Variables -> BULKSMS_TOKEN
  try {
    const bulksmsToken = process.env.BULKSMS_TOKEN; // Format: username:token

    if (bulksmsToken) {
      const response = await fetch('https://api.bulksms.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(bulksmsToken).toString('base64')
        },
        body: JSON.stringify({
          to: to.replace(/\D/g,'').replace(/^0/, '27'), // 0XXXXXXXXX -> 27XXXXXXXXX
          body: message
        })
      });
      const result = await response.json();
      return res.status(200).json({ success: true, provider: 'BulkSMS', result, message: 'SMS sent straight to inbox AUTO!' });
    }

    // --- OPTION B: Twilio (Backup - works worldwide, free trial) ---
    const twilioSid = process.env.TWILIO_SID;
    const twilioToken = process.env.TWILIO_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE; // Your Twilio number

    if (twilioSid && twilioToken) {
      const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          From: twilioPhone,
          To: '+' + to.replace(/\D/g,'').replace(/^0/, '27'),
          Body: message
        })
      });
      const twilioResult = await twilioRes.json();
      return res.status(200).json({ success: true, provider: 'Twilio', twilioResult });
    }

    // If no API key set - Demo mode (logs only, for testing)
    console.log('ROBOT SMS DEMO:', message, 'to', to);
    return res.status(200).json({ success: true, provider: 'DEMO - Set BULKSMS_TOKEN in Vercel', demoMessage: message, to: to });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
  }
