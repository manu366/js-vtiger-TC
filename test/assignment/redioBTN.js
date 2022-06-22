describe('redio button',async()=>{
    it('tc-1',async()=>{
        await browser.url('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        const redio=await browser.$("//label[@class='ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-radio-on']")
        redio.waitForDisplayed()
        redio.click()
        browser.isElementSelected()
    })
})