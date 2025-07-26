import {test,expect } from '@playwright/test'
test('inputbox',async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fcomputers");
    await expect(page.locator("#FirstName")).toBeEmpty();
    await expect(page.locator("#FirstName")).toBeEnabled();
    await expect(page.locator("#FirstName")).toBeEditable()
    await expect(page.locator("#FirstName")).toBeVisible();
    //await expect(page.getByLabel('Newsletter')).toBeChecked();
    // expect(page.getByLabel('Newsletter').isChecked()).toBeTruthy()


})