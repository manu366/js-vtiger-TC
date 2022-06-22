describe('disabled',async()=>{
    it('disabled',async()=>{
        await browser.url("C:/Users/HARISH/Desktop/webdriver_io/test/assignment/disabledelement.html")
        const fname=await browser.$("//input[@id='fname']")
        await fname.setValue("manohara")
        const lname=await browser.$("//input[@id='lname']")
        await browser.execute((lnamevalue)=>{
            document.getElementById("lname").setAttribute("value",lnamevalue),"reddy"
        })
    })
})