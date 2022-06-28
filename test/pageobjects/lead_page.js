class lead_page{
    get createlead(){
        return $("//img[@title='Create Lead...']")
    }
    async create_leadButton(){
        await this.createlead.waitForDisplayed()
        await this.createlead.click()
    }
}module.exports=new lead_page()