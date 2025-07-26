import {test,expect} from '@playwright/test'
test("soft assertion",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");
expect(page).toHaveURL("https://www.demoblaze.com/index.html1");
expect(page).toHaveTitle('STORE')
})