describe('amezon',async()=>{
    it('scroll action',async()=>{
        await browser.url("https://www.amazon.in/")
        const help=await browser.$("//a[.='Help']")
        help.waitForDisplayed()
        help.scrollIntoView()
    })
})