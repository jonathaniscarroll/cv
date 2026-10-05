import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve('index.html')).href);
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: 'Jonathan-Carroll-CV.pdf', format: 'Letter', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log('Built Jonathan-Carroll-CV.pdf');
