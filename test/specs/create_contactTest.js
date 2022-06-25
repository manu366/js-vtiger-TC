const Homepage = require('../pageobjects/Homepage');
const loginPage = require('../pageobjects/login.page');
const create_conact_page = require('../pageobjects/create_conact_page');
describe('contact module',async()=>{
    it('create contact',async()=>{
        await loginPage.open()
        
        await browser.maximizeWindow()
        await loginPage.login("admin","admin")
        await expect(browser).toHaveTitleContaining("vtiger")

        // const username=await browser.$("//input[@name='user_name']")
        // await username.waitForDisplayed()
        // await username.setValue("admin")
        // const password=await browser.$("//input[@name='user_password']")
        // await password.waitForDisplayed()
        // await password.setValue("admin")
        // const submitBTN=await browser.$("//input[@id='submitButton']")
        // await submitBTN.click()
        // await expect(browser).toHaveUrlContaining("localhost:8888")
        
        await (await Homepage.contact).waitForDisplayed()
        await Homepage.contactlink()
        // const contactBTN=await browser.$("//a[.='Contacts']")
        // await contactBTN.waitForClickable()
        // await contactBTN.click()
        await expect(browser).toHaveTitleContaining("Contacts")
        await create_conact_page.contact.waitForDisplayed()
        await create_conact_page.create_contact()
        // const create_contact=await browser.$("//img[@alt='Create Contact...']")
        // await create_contact.waitForClickable()
        // await create_contact.click()
        // await expect(browser).toHaveTitleContaining("Contacts")
        
        // const lastname=await browser.$("//input[@name='lastname']")
        // await lastname.waitForDisplayed()
        // // await lastname.setValue("reddy")
        // const saveBTN=await browser.$("//input[@title='Save [Alt+S]']")
        // await saveBTN.waitForDisplayed()
        // await saveBTN.click()
        // await expect(browser).toHaveTitleContaining("Contacts")
        
        // var lastname1=await (await browser.$("//span[@class='dvHeaderText']")).getText
        // await await console.log(lastname1);
        // const administretor=await browser.$("//img[@src='themes/softed/images/user.PNG']")
        // await administretor.waitForDisplayed()
        // await administretor.moveTo()
        // const singout=await browser.$("//a[.='Sign Out']")
        // await singout.waitForDisplayed()
        // await singout.click()
        // await expect(browser).toHaveTitleContaining("vtiger")
    })
})
