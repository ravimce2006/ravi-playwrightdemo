import { test,expect } from "@playwright/test"
import { text } from "stream/consumers"

test("Builtin locators",async({page})=>{
 
    await page.goto("https://www.demoblaze.com/index.html")
    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    //page.getByText() to locate by text content.
    ///page.getByLabel() to locate a form control by associated label's text.
    //page.getByPlaceholder() to locate an input by placeholder.
    //page.getByAltText() to locate an element, usually image, by its text alternative.
    //page.getByTitle() to locate an element by its title attribute.
    //page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    
    //getByRole();
    //1, Using links
    await page.getByRole('link',{name:"Log in"}).click()
     //const visi=await page.getByLabel("Username:").isVisible(); 
     //if(visi==true)
    // {
      //  console.log("assert true");
    // }
     //getByAltText()
     //const log=await page.getByAltText("First slide");
     //await expect(log).toBeVisible();

     // .getByPlaceholder()

    // await page.goto("https://support.orangehrm.com/portal/en/signin");
    // await page.getByPlaceholder("Email Address").fill("a@b.com");
    // await page.getByPlaceholder("Password").fill("23232");
   //await page.getByRole('textbox',{id:"loginusername"}).fill("adivamma");
  //  await page.getByRole('textbox', { name: 'Username' });
await page.locator("#loginusername").fill("adivamma");
await page.locator("#loginpassword").fill("adivamma");

await page.getByRole('button',{name:"Log in"}).click();
const prod=page.getByRole('link',{name:'PRODUCT STORE'});
await expect(prod).toBeVisible();
const logout=page.getByRole('link',{name:'Log out'});
console.log(logout);
await expect(logout).toBeVisible();
await expect(page.getByTitle("STORE")).toBeVisible();
})