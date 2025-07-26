import {test,expect} from '@playwright/test'

test.skip('Alert with OK',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',async dialog=>{
          await dialog.accept();
          expect(dialog.type()).toContain('alert');
          console.log("message content value",dialog.message());
          expect(dialog.message()).toContain("I am an alert box!");
          
    })
    await page.getByRole('button',{name:'Simple Alert'}).click();
})
test.skip('Alert with ok and cancel',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async dialog=>{
        //await dialog.accept();
        await dialog.dismiss();
        console.log("dialog blog message",dialog.message());
        expect(dialog.message()).toContain('Press a button!');
        
        
        
    })
    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    //expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!');
    //await expect(page.getByRole('p',{name:'You pressed OK!'})).toHaveText("You pressed OK!");

})

test('Alert with entry text box',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async dialog=>{
     await dialog.accept();
     console.log("prompt",dialog.message());
     expect(dialog.message()).toContain('Please enter your name:');
     dialog.defaultValue()
     
        
        
        
    })
    await page.getByRole('button',{name:'Prompt Alert'}).click();
    //expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Harry Potter! How are you today?');
    //await expect(page.getByRole('p',{name:'You pressed OK!'})).toHaveText("You pressed OK!");

})