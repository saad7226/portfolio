async function test() {
  const payload = {
    service_id: 'service_0z8ltya',
    template_id: 'template_zz5u4k6',
    user_id: 'g0Fdyh_zw5JDyaqgM',
    template_params: {
      name: 'Test User',
      email: 'test@test.com',
      message: 'Test message from portfolio'
    }
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  console.log('Status:', response.status);
  console.log('Body:', text);
  if (response.status === 200) {
    console.log('✅ Credentials are VALID! Form will work.');
  } else if (response.status === 403) {
    console.log('✅ Account found! Need to add domain in EmailJS Security settings.');
  } else {
    console.log('❌ Issue found:', text);
  }
}

test();
