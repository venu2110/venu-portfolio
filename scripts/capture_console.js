const puppeteer = require('puppeteer');

async function run(url) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push({ type: 'pageerror', message: err.message, stack: err.stack }));
  page.on('error', (err) => errors.push({ type: 'error', message: err.message, stack: err.stack }));
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console', message: msg.text() });
    }
  });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.waitForTimeout(5000);
  await browser.close();
  return errors;
}

(async () => {
  const url = process.argv[2] || 'http://localhost:5175';
  console.log('Checking', url);
  const errors = await run(url);
  if (errors.length === 0) {
    console.log('No console errors detected (page might still be blank).');
    process.exit(0);
  }
  console.log('Errors:', JSON.stringify(errors, null, 2));
  process.exit(1);
})();
