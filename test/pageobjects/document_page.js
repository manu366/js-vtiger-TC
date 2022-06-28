class document_page{
    get create_document(){
        return $("//img[@title='Create Document...']")
    }
    async create_documentButton(){
        await this.create_document.click()
        await this.create_document.waitForDisplayed()
    }
}module.exports=new document_page()