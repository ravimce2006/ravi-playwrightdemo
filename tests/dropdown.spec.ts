import {test,expect } from '@playwright/test'
test('dropdowlist',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.locator("#country").selectOption({label:'india'});
    //await page.locator('#country').selectOption("india");
  // await page.locator('#country').selectOption({value:'canada'});
   await page.locator('#country').selectOption({index:5}); 
   await page.waitForTimeout(3000);

})