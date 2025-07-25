   import { test,chromium,firefox,webkit} from "@playwright/test"


  test("launch chrome browser",async()=>{
      
      const browser=await chromium.launch()
      const context =await browser.newContext()
      const  page=await context.newPage()
      await page.goto("https://www.google.com/")
      await browser.close()
   })
   test("launch firfox browser",async()=>{
         const browser= await firefox.launch()
         const  context =await browser.newContext()
         const  page=await context.newPage()
         await page.goto("https://www.google.com")
         await browser.close()
   })
   test("launch webkit",async()=>{
     const browser=await webkit.launch()
      const context=await browser.newContext()
      const page=await context.newPage()
      await page.goto("https://www.google.com")
      await browser.close()


   })
