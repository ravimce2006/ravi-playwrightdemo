import { test,chromium } from "@playwright/test"

test("Multple elements",async()=>{
    const browser=await chromium.launch()
    const contextpage= await browser.newContext()
    const page=await contextpage.newPage()
    await page.goto("https://www.demoblaze.com/index.html")
    await page.click("#login2")
    await page.locator("#loginusername").fill("adivamma")
    await page.locator("#loginpassword").fill("adivamma")
    //await page.fill("#loginpassword","adivamma")
    await page.click("//button[normalize-space()='Log in']")
   /* const links=await page.$$('a');
    console.log("----------------->")
    console.log(links.length)
    for(const link of links)
    {
        const linktext=await link.textContent()
        console.log(linktext);
    }*/
   await page.waitForSelector("//div[@id='tbodyid']//div/h4")
   const products=await page.$$("//div[@id='tbodyid']//div/h4")
   console.log(products.length)
   for(const product of products){
     const prod=await product.textContent()
     if(prod=="Samsung galaxy s6")
     {
      console.log("Found the text")
      break;
      
     }
     console.log(prod)
     
   }
})
