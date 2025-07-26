import {test,expect, chromium} from '@playwright/test'

test("assertion",async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fcomputers");
    //1. .toHaveURL()
    expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2Fcomputers");
    //2 .toHaveTitle()
    expect(page).toHaveTitle("nopCommerce demo store. Register");
    //3. .toBeVisiable()
    const firstname = page.getByRole('textbox',{name:'First name'});
   await expect(firstname).toBeVisible();
   await expect(firstname).toBeEnabled();
   //4 . toBeChecked()
   const female=page.getByLabel('Female')
   female.click()
   expect(female).toBeChecked();
   // 5 .toHaveAttribute()  
   expect(page.getByRole('button',{name:'Register'})).toHaveAttribute('type','submit');

   // .toHaveText() .toContainText()

   
   expect(page.locator(".page-title>h1")).toHaveText('Register');
   expect(page.locator(".page-title>h1")).toContainText('Reg');
   
   // .toHaveValue(Value)Email

   const  Email=await page.locator('#Email');
   Email.fill('a@b.com');
   expect(Email).toHaveValue('a@b.com')
       
})