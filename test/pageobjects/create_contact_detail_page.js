const page=require('./page')
class create_contact_detail_page{
    get lastNameTextfield(){
        return $("//input[@name='lastname']")
    }

    async enterLastname(lastname){
    await this.lastNameTextfield.setValue(lastname)
    await this.lastNameTextfield.waitForDisplayed()
    }
    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }
    async saveButton(){
        await this.saveBtn.waitForDisplayed()
        await this.saveBtn().click()
    }
}
module.exports=new create_contact_detail_page()