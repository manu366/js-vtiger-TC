describe('contact module',async()=>{
    it('create contact',async()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        
        const username=await browser.$("//input[@name='user_name']")
        username.waitForDisplayed()
        username.setValue("admin")
        const password=await browser.$("//input[@name='user_password']")
        password.waitForDisplayed()
        password.setValue("admin")
        const loginBTN=await browser.$("//input[@id='submitButton']")
        loginBTN.waitForDisplayed()
        loginBTN.click()
        // await expect(browser).toHaveUrlContaining("8888")

        const product=await browser.$("//a[.='Products']")
        product.waitForDisplayed()
        product.click()
        
        // await expect(browser).toHaveUrlContaining("Home")
        
        const createproduct=await browser.$("//img[@title='Create Product...']")
        createproduct.waitForDisplayed()
        createproduct.click()
        await expect(browser).toHaveUrlContaining("Products&action")
        
        const productname=await browser.$("//input[@name='productname']")
        productname.waitForDisplayed()
        productname.setValue("mobile")
        await expect(browser).toHaveUrlContaining("EditView&return_action")
        const saveBTN=await browser.$("//input[@title='Save [Alt+S]']")
        saveBTN.waitForDisplayed()
        saveBTN.click()

        const administretor=await browser.$("//img[@src='themes/softed/images/user.PNG']")
        administretor.waitForDisplayed()
        administretor.moveTo()
        const singout=await browser.$("//a[.='Sign Out']")
        singout.waitForDisplayed()
        singout.click()
        await expect(browser).toHaveUrlContaining("localhost:8888")
    })
})