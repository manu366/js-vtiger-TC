const Homepage = require('../pageobjects/Homepage');
const loginPage = require('../pageobjects/login.page');
const create_conact_page = require('../pageobjects/create_conact_page');
const create_contact_detail_page=require('../pageobjects/create_contact_detail_page')
describe('contact module',async()=>{
    it('create contact',async()=>{
        await loginPage.open()
        await browser.maximizeWindow()
        await loginPage.loginToApp("admin","admin")
        await expect(browser).toHaveUrlContaining("localhost:8888")
        await Homepage.contactLink()
        await expect(browser).toHaveTitleContaining("Contacts")
        await create_conact_page.create_contact()
        await expect(browser).toHaveTitleContaining("Contacts")
        await create_contact_detail_page.enterLastname("reddy")
        await expect(browser).toHaveTitleContaining("Contacts")
        await Homepage.signout()
        await expect(browser).toHaveTitleContaining("vtiger")

        
    })
})
