const { test, expect } = require('@playwright/test');

test('Скріншот всієї сторінки', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('home-page.png', { threshold: 0.2 });
});

test('Скріншот заголовка сторінки', async ({ page }) => {
  await page.goto('/');
  const header = await page.locator('h1');
  expect(await header.screenshot()).toMatchSnapshot('header.png');
});
