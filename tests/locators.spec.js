import {test,chromium,expect} from "@playwright/test"
import { beforeEach } from "node:test"

test("login details",async()=>{
  const browser=await chromium.launch()
  const context=await browser.newContext()
  const page=await context.newPage()
  await page.goto("https://www.demoblaze.com/index.html")
  //await page.locator("#login2").click()
  await page.click("#login2")
  //await page.locator("#loginusername").fill()
  await page.fill("#loginusername","adivamma")
  
  //await page.locator("#loginpassword").fill()
  await page.fill("#loginpassword","adivamma")
  //await page.locator("//button[normalize-space()='Log in']")
   await page.click("//button[normalize-space()='Log in']")
   await expect(page.locator("//button[normalize-space()='Log out']")).toBeVisible();
   
})

