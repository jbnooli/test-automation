const {test,expect} = require ('@playwright/test')
import { hello, hello2 } from './demo/hello';

test.use({ storageState: 'playwright/.auth/user.json' });

test('create card order', async ({ page }) => {
  await page.goto('https://dev.diinr.com/dashboard/1c8bb1b1-c64f-44e2-b6ee-0a505495225f/order');
  await page.getByRole('checkbox', { name: 'Don\'t show this again' }).click();
  await page.getByRole('button', { name: 'Stay in Back Office' }).click();
  await page.getByRole('heading', { name: 'Omelette' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'd2' }).click();
  await page.getByLabel('Notifications (F8)').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('div').filter({ hasText: /^Cold drinks$/ }).nth(1).click();
  await page.getByText('Mango Lassi').nth(1).click();
  await page.locator('button[name="accept cookies"]').click();
  await page.getByRole('button', { name: '4' }).click();
  // await page.getByLabel('Notifications (F8)').getByRole('button').filter({ hasText: /^$/ }).click();

  await page.getByRole('button', { name: 'Add to Cart £' }).click();
  await page.getByRole('heading', { name: 'Breakfast' }).click();
  await page.getByText('Malfy - Blood orange - single£').nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart £' }).click();
  await page.getByRole('button', { name: 'Eat In' }).click();
  await page.getByRole('button', { name: 'Pay Via' }).click();
  // await page.getByRole('button', { name: 'Pay Via' }).click();
  await page.getByText('VCMDIINSIP0').click();
  await page.goto('https://dev.diinr.com/dashboard/1c8bb1b1-c64f-44e2-b6ee-0a505495225f/order');


  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle('The Bakery | Diinr | Diinr');
});


test('create cash order', async ({ page }) => {
    await page.goto('https://dev.diinr.com/dashboard/1c8bb1b1-c64f-44e2-b6ee-0a505495225f/order');
  await page.getByRole('checkbox', { name: 'Don\'t show this again' }).click();
  await page.getByRole('button', { name: 'Stay in Back Office' }).click();
  await page.getByLabel('Notifications (F8)').getByRole('button').filter({ hasText: /^$/ }).click();
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


