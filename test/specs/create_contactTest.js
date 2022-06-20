describe('contact module',async()=>{
    it('create contact',async()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await expect(browser).toHaveTitleContaining("vtiger")
        await (await browser.$("//input[@name='user_name']")).setValue("admin")
        await (await browser.$("//input[@name='user_password']")).setValue("admin")
        await (await browser.$("//input[@id='submitButton']")).click()
        await expect(browser).toHaveTitleContaining("Home")
        await (await browser.$("//a[.='Contacts']")).click()
        await expect(browser).toHaveTitleContaining("Contacts")
        await (await browser.$("//img[@alt='Create Contact...']")).click()
        await expect(browser).toHaveTitleContaining("Contacts")
        await (await browser.$("//input[@name='lastname']")).setValue("reddy")
        await (await browser.$("//input[@title='Save [Alt+S]']")).click()
        await expect(browser).toHaveTitleContaining("Contacts")
        var lastname=await (await browser.$("//span[@class='dvHeaderText']")).getText
        await console.log(lastname);
        await (await browser.$("//img[@src='themes/softed/images/user.PNG']")).moveTo()
        await browser.$("//a[.='Sign Out']").click()
        await expect(browser).toHaveTitleContaining("vtiger")
    })
})
