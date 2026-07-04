// Deep diagnostic test for EmailJS
// Tests all combinations to find exactly what works

const SERVICE_ID  = 'service_9n83p9d';
const PUBLIC_KEY  = 'NdPCOvlHroH40qTcL'; // from latest screenshot

const TEMPLATE_IDS = [
  'template_nsrrtxh',  // visible in BOTH latest screenshots
  'template_uo3pc79',  // what's in code now
];

// Also test known public key variants
const PUBLIC_KEYS = [
  'NdPCOvlHroH40qTcL',  // lowercase l
  'NdPCOvIHroH40qTcL',  // uppercase I
];

async function testCombo(templateId, publicKey) {
  const payload = {
    service_id: SERVICE_ID,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name:    'Test User',
      email:   'test@test.com',
      subject: 'Test',
      message: 'Test message'
    }
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  return { status: response.status, body: text };
}

async function run() {
  console.log('=== EmailJS Deep Debug ===\n');
  for (const tid of TEMPLATE_IDS) {
    for (const key of PUBLIC_KEYS) {
      const result = await testCombo(tid, key);
      const emoji = result.status === 200 ? '✅' : '❌';
      console.log(`${emoji} Template: ${tid} | Key: ${key}`);
      console.log(`   Status: ${result.status} | Body: ${result.body}\n`);
    }
  }
}

run();
