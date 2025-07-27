import {test} from '@playwright/test'
test('screenshot',async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 await page.screenshot({path:"tests/uploadfile/1.png"});
 await page.screenshot({path:"tests/uploadfile/2.png",fullPage:true});
 await page.screenshot({path:"tests/uploadfile/3.png"});
 await page.locator('#HTML1').screenshot({path:'tests/uploadfile/4.png'});
})