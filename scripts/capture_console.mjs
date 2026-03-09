import puppeteer from 'puppeteer';
import process from 'process';

async function run(url) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push({ type: 'pageerror', message: err.message, stack: err.stack }));
  page.on('error', (err) => errors.push({ type: 'error', message: err.message, stack: err.stack }));
  const failedRequests = [];
  page.on('requestfailed', (req) => {
    const res = req.response();
    failedRequests.push({ url: req.url(), status: res ? res.status() : null, statusText: res ? res.statusText() : null });
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console', message: msg.text() });
    }
  });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await browser.close();
  return { errors, failedRequests };
}

// If you need to test a protected Vercel deployment, set `bypassUrl` to include the bypass token.
// Set bypassUrl to access protected Vercel deployments (if needed):
// const bypassUrl = 'https://your-domain.vercel.app/?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=TOKEN';
const bypassUrl = null;
const url = bypassUrl || process.argv[2] || 'http://localhost:5175';
console.log('Checking', url);
const { errors, failedRequests } = await run(url);
if (errors.length === 0 && failedRequests.length === 0) {
  console.log('No console errors or failed requests detected (page might still be blank).');
  process.exit(0);
}
console.log('Console Errors:', JSON.stringify(errors, null, 2));
console.log('Failed Requests:', JSON.stringify(failedRequests, null, 2));
process.exit(1);
