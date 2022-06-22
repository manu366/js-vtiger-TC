describe('testsuite',async()=>{
    it('lanch browser',async()=>{
        await browser.url('http://localhost:8888/')
        await browser.maximizeWindow()
        await console.log(browser.getTitle());
        
    })
})
