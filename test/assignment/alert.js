describe('alert',async()=>{
    it('alert',async()=>{
        await browser.url('C:/Users/HARISH/Desktop/webdriver_io/test/assignment/alert.html')
        // await browser.maximizeWindow()
        const text=await browser.getAlertText()
        
        console.log(text);
        await browser.acceptAlert()
        const text1=await browser.getAlertText()
        
        console.log(text1);
        await browser.sendAlertText("maaama")
        await browser.acceptAlert()
    })
})