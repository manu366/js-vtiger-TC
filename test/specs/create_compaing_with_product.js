describe("compaign",async()=>{
    it("create compaign with product",async()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await expect(browser).toHaveUrlContaining("localhost:8888")
        await browser.$("//input[@name='user_name']").setValue("admin")
        await browser.$("//input[@name='user_password']").setValue("admin")
        await browser.$("//input[@id='submitButton']").click()
        await expect(browser).toHaveUrlContaining("Home")
        await browser.$("//a[.='Products']").click()
        await expect(browser).toHaveUrlContaining("Products&action")
        await browser.$("//img[@title='Create Product...']").click()
        await expect(browser).toHaveUrlContaining("EditView&return_action")
        await browser.$("//input[@name='productname']").setValue("mobile")
        await browser.$("//input[@title='Save [Alt+S]']").click()
        await browser.$("//a[.='More']").moveTo()
        await browser.$("//a[.='Campaigns']").click()
        await expect(browser).toHaveUrlContaining("Campaigns&action")
        await browser.$("//img[@title='Create Campaign...']").click()
        await expect(browser).toHaveUrlContaining("EditView&return_action")
        await browser.$("//input[@name='campaignname']").setValue("TYC"+Math.random)
        await browser.$("//input[@value='T']").click()
        await browser.$("//select[@name='assigned_group_id']").selectByVisibleText("Support Group")
        await browser.$("//img[@src='themes/softed/images/select.gif']").click()
        var window=await browser.getWindowHandles();
        await browser.switchToWindow(window[1])
        await browser.$("//input[@name='search_text']").setValue("mobile")
        await browser.$("//input[@name='search']").click()
        await browser.$("//a[@id='1']").click()
        await browser.switchToWindow(window[0])
        await browser.$("//input[@title='Save [Alt+S]']").click()
        await expect(browser).toHaveUrlContaining("Campaigns&record")
        await browser.$("//td[@class='dvtCellInfo']").getText()=="mobile"
        await browser.$("//img[@src='themes/softed/images/user.PNG']").moveTo()
        await browser.$("//a[.='Sign Out']").click()
    })
})