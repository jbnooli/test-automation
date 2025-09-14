// tests/auth.setup.ts
import { test as setup } from '@playwright/test';
// const {setup,expect} = require ('@playwright/test')
import path from 'path';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate and save state', async ({ page }) => {

    await page.goto('https://dev.diinr.com/login');

  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('karthikjn01@gmail.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('Today123');
  await page.getByRole('button', { name: 'Sign in' }).click();
await page.locator('button[name="accept cookies"]').click();
//   await page.goto('https://your-app.com/login');
//   await page.fill('input[name="username"]', 'yourUsername');
//   await page.fill('input[name="password"]', 'yourPassword');
//   await page.click('button[type="submit"]');
//   await page.waitForURL('https://your-app.com/dashboard');
  await page.context().storageState({ path: authFile });

});
