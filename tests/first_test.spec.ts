const {test,expect} = require ('@playwright/test')
import { hello, hello2 } from './demo/hello';


test('create cash order', async ({ page }) => {
  // await page.goto('https://google.co.uk');
  await page.goto('https://dev.diinr.com/login');

  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('karthikjn01@gmail.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('Today123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'The Bakery Orders Pro 6' }).click();
  await page.locator('.lucide.lucide-circle-plus').click();
  await page.getByRole('checkbox', { name: 'Don\'t show this again' }).click();
  await page.getByRole('button', { name: 'Stay in Back Office' }).click();
  await page.getByRole('heading', { name: 'Omelette' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'd2' }).click();
  await page.locator('div').filter({ hasText: /^Cold drinks$/ }).nth(1).click();
  await page.getByText('Mango Lassi£').nth(1).click();
  await page.locator('button[name="accept cookies"]').click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'Add to Cart £' }).click();
  await page.getByRole('button', { name: 'Takeaway' }).click();
  await page.locator('div:nth-child(2) > .flex.flex-col.w-full > .h-fit.flex.flex-col > div:nth-child(2) > div > .inline-flex').click();
  await page.getByRole('button', { name: 'Pay with Cash' }).click();
  await page.goto('https://dev.diinr.com/dashboard/1c8bb1b1-c64f-44e2-b6ee-0a505495225f/order');


  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle('The Bakery | Diinr | Diinr');
});


