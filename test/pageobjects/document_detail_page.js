class document_detail_page{
     get documentname(){
        return $("//input[@class='detailedViewTextBox']")
    }
    get fream(){
        return $("//iframe")
    }
    get freambody(){
        return $("//body[@class='cke_show_borders']")
    }
    get bold(){
        return $("//a[@id='cke_5']")
    }
    get italic(){
        return $("//a[@id='cke_6']")
    }
    get filepath(){
        return $("//input[@name='filename']")
    }
    get save(){
        return $("//input[@title='Save [Alt+S]']")
    }
    async document_details(documentname,desciption){
    await this.documentname.setValue(documentname)
    await this.documentname.waitForDisplayed()
    await this.fream.waitForDisplayed()
    await browser.switchToFrame(0)
    await this.freambody.setValue(desciption)
    await browser.keys(['control','a'])
    await browser.switchToParentFrame()
    await this.bold.click()
    await this.italic.click()
    await this.save.click()
    }
}module.exports=new document_detail_page()