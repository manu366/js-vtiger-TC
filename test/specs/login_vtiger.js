const fs=require('fs')
const credentials=JSON.parse(fs.readFileSync('./Test/testdata/login.json'))
describe('vtiger',async()=>{
credentials.forEach(({username,password}) => {
    it('login',async()=>{
        await browser.url('http://localhost:8888/')
        await expect(browser).toHaveTitleContaining("vtiger")

        await browser.maximizeWindow()
        
        await browser.$("//input[@name='user_name']").setValue(username)
        await browser.$("//input[@name='user_password']").setValue(password)
        await browser.$("//input[@id='submitButton']").click()
                
        // var errormeg=$("//div[@class='errorMessage']")
        // await expect(errormeg).toHaveTextContaining('You')
        // await browser.waitUntil(async()=>(await $(".errorMessage").getAttribute('class')==='.errorMessage',
        // {
        //     timeout:5000,
        //     timeoutMsg: 'you want to enter valide username and password'
        // }
        // ));
 
        // await browser.$("//img[@src='themes/softed/images/user.PNG']").click()
        // await browser.$("//a[.='Sign Out']").click()
    })
})
})